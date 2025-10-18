# HashiCorp Vault Configuration for Ergo Platform

storage "postgresql" {
  connection_url = "postgres://vault:VAULT_PASSWORD@postgres-vault:5432/vault?sslmode=require"
  ha_enabled     = "true"
  ha_table       = "vault_ha_locks"
}

listener "tcp" {
  address       = "0.0.0.0:8200"
  tls_cert_file = "/vault/certs/vault.crt"
  tls_key_file  = "/vault/certs/vault.key"
  
  telemetry {
    unauthenticated_metrics_access = false
  }
}

seal "awskms" {
  region     = "us-east-1"
  kms_key_id = "arn:aws:kms:us-east-1:ACCOUNT:key/KEY_ID"
}

telemetry {
  prometheus_retention_time = "30s"
  disable_hostname          = true
}

api_addr      = "https://vault.ergoblockchain.org:8200"
cluster_addr  = "https://vault.ergoblockchain.org:8201"
ui            = true
log_level     = "info"
max_lease_ttl = "768h"
default_lease_ttl = "768h"

# Audit logging
audit {
  file {
    file_path = "/vault/logs/audit.log"
    log_raw   = false
    hmac_accessor = true
    mode = "0600"
    format = "json"
  }
}

# Auto-unseal configuration
auto_unseal {
  type = "awskms"
  
  config {
    region     = "us-east-1"
    kms_key_id = "arn:aws:kms:us-east-1:ACCOUNT:key/KEY_ID"
  }
} 