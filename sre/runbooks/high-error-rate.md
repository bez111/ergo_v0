# Runbook: High Error Rate

## Alert: `HighErrorRate`
**Severity:** Critical  
**Team:** Platform  
**SLO Impact:** Availability

## Symptoms
- HTTP 5xx errors > 1% for 5+ minutes
- Users experiencing failures
- Error budget burning fast

## Quick Actions (< 5 min)

### 1. Check Recent Deployments
```bash
kubectl rollout history deployment/ergo-web -n production
kubectl get events -n production --sort-by='.lastTimestamp' | head -20
```

**If deployment < 30 min ago:**
```bash
kubectl rollout undo deployment/ergo-web -n production
```

### 2. Check Dependencies
```bash
# Database
kubectl exec -it postgres-0 -n production -- pg_isready

# Redis
kubectl exec -it redis-0 -n production -- redis-cli ping

# External APIs
curl -s https://api-status.ergo/health | jq
```

### 3. Check Resource Utilization
```bash
kubectl top nodes
kubectl top pods -n production
```

## Investigation (5-15 min)

### Error Analysis
```promql
# Top error routes
sum by (route, status) (rate(http_requests_total{status=~"5.."}[5m]))

# Error types
sum by (error_type) (rate(application_errors_total[5m]))
```

### Trace Analysis
1. Open Jaeger: https://jaeger.ergo
2. Filter: `error=true` AND `service=ergo-web`
3. Analyze top 10 slowest traces

### Log Analysis
```bash
kubectl logs -n production -l app=ergo-web --tail=100 | grep ERROR
```

## Mitigation

### Option 1: Feature Flag Disable
```bash
kubectl exec -it redis-0 -n production -- redis-cli
> SET feature:heavy-component disabled
> SET feature:external-api-calls disabled
```

### Option 2: Scale Up
```bash
kubectl scale deployment/ergo-web -n production --replicas=10
```

### Option 3: Circuit Breaker
```bash
kubectl exec -it redis-0 -n production -- redis-cli
> SET circuit:database open
> EXPIRE circuit:database 300
```

### Option 4: Rate Limiting
```bash
# Enable stricter rate limits
kubectl patch configmap rate-limit-config -n production \
  -p '{"data":{"max_rps":"50"}}'
kubectl rollout restart deployment/ergo-web -n production
```

## Recovery Verification

### Metrics to Check
- [ ] Error rate < 0.5% for 10 minutes
- [ ] P95 latency < 400ms
- [ ] No active alerts
- [ ] Error budget burn rate normal

### User Verification
```bash
# Synthetic checks
curl -s https://ergoblockchain.org/health
npm run test:smoke
```

## Post-Incident

1. **Timeline:** Document in incident channel
2. **Root Cause:** Identify within 24h
3. **Action Items:** Create JIRA tickets
4. **Postmortem:** Schedule within 48h
5. **Runbook Update:** If new failure mode

## Related
- [Database Runbook](./database-issues.md)
- [Network Runbook](./network-issues.md)
- [Deployment Runbook](./deployment-failure.md) 