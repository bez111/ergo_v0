#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting Ergo Platform Monitoring Stack${NC}"

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker first.${NC}"
    exit 1
fi

# Create necessary directories
echo -e "${YELLOW}📁 Creating monitoring directories...${NC}"
mkdir -p sre/monitoring/grafana/{dashboards,datasources}
mkdir -p sre/monitoring/loki
mkdir -p sre/monitoring/promtail

# Create Grafana datasource configuration
cat > sre/monitoring/grafana/datasources/prometheus.yaml << EOF
apiVersion: 1

datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    url: http://prometheus:9090
    isDefault: true
    editable: true
    
  - name: Loki
    type: loki
    access: proxy
    url: http://loki:3100
    editable: true
EOF

# Create Alertmanager configuration
cat > sre/monitoring/alertmanager.yml << EOF
global:
  resolve_timeout: 5m

route:
  group_by: ['alertname', 'cluster', 'service']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 12h
  receiver: 'default'
  
receivers:
  - name: 'default'
    webhook_configs:
      - url: 'http://localhost:5001/webhook'
        send_resolved: true
        
templates:
  - '/etc/alertmanager/templates/*.tmpl'
EOF

# Create Loki configuration
cat > sre/monitoring/loki-config.yaml << EOF
auth_enabled: false

server:
  http_listen_port: 3100
  grpc_listen_port: 9096

ingester:
  wal:
    enabled: true
    dir: /tmp/wal
  lifecycler:
    address: 127.0.0.1
    ring:
      kvstore:
        store: inmemory
      replication_factor: 1
    final_sleep: 0s

schema_config:
  configs:
    - from: 2020-10-24
      store: boltdb-shipper
      object_store: filesystem
      schema: v11
      index:
        prefix: index_
        period: 24h

storage_config:
  boltdb_shipper:
    active_index_directory: /loki/boltdb-shipper-active
    cache_location: /loki/boltdb-shipper-cache
    cache_ttl: 24h
    shared_store: filesystem
  filesystem:
    directory: /loki/chunks

limits_config:
  enforce_metric_name: false
  reject_old_samples: true
  reject_old_samples_max_age: 168h

chunk_store_config:
  max_look_back_period: 0s

table_manager:
  retention_deletes_enabled: false
  retention_period: 0s
EOF

# Create Promtail configuration
cat > sre/monitoring/promtail-config.yaml << EOF
server:
  http_listen_port: 9080
  grpc_listen_port: 0

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
  - job_name: system
    static_configs:
      - targets:
          - localhost
        labels:
          job: varlogs
          __path__: /var/log/*log
          
  - job_name: containers
    static_configs:
      - targets:
          - localhost
        labels:
          job: containerlogs
          __path__: /var/lib/docker/containers/*/*log
EOF

# Start monitoring stack
echo -e "${YELLOW}🐳 Starting Docker containers...${NC}"
docker-compose -f docker-compose.monitoring.yml up -d

# Wait for services to be ready
echo -e "${YELLOW}⏳ Waiting for services to be ready...${NC}"
sleep 10

# Check service health
echo -e "${GREEN}🔍 Checking service status:${NC}"

services=("prometheus:9090" "grafana:3001" "alertmanager:9093" "loki:3100")
for service in "${services[@]}"; do
    IFS=':' read -r name port <<< "$service"
    if curl -s -o /dev/null -w "%{http_code}" "http://localhost:$port" | grep -q "200\|302"; then
        echo -e "  ✅ $name is running on port $port"
    else
        echo -e "  ❌ $name is not responding on port $port"
    fi
done

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ Monitoring stack is ready!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "📊 ${YELLOW}Grafana:${NC}      http://localhost:3001"
echo -e "   Username: admin / Password: ergo-admin"
echo ""
echo -e "📈 ${YELLOW}Prometheus:${NC}   http://localhost:9090"
echo -e "🔔 ${YELLOW}Alertmanager:${NC} http://localhost:9093"
echo -e "📝 ${YELLOW}Loki:${NC}         http://localhost:3100"
echo ""
echo -e "${YELLOW}To stop the monitoring stack, run:${NC}"
echo -e "  docker-compose -f docker-compose.monitoring.yml down"
echo ""
echo -e "${YELLOW}To view logs, run:${NC}"
echo -e "  docker-compose -f docker-compose.monitoring.yml logs -f" 