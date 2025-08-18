#!/usr/bin/env node

/**
 * Monitor script for /Docs → /docs migration
 * Tracks 404 errors, redirect issues, and performance
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'http://localhost:3000';
const LOG_FILE = path.join(__dirname, '..', 'docs-migration-monitor.log');
const REPORT_FILE = path.join(__dirname, '..', 'docs-migration-report.json');
const CHECK_INTERVAL = 60000; // Check every minute

// URLs to monitor
const MONITOR_URLS = [
  '/Docs',
  '/docs', 
  '/Docs/introduction',
  '/docs/introduction',
  '/Docs/ecosystem',
  '/docs/ecosystem',
  '/Docs/developers',
  '/docs/developers'
];

// Statistics
let stats = {
  startTime: new Date().toISOString(),
  checks: 0,
  errors: [],
  redirects: {
    successful: 0,
    failed: 0
  },
  statusCodes: {},
  performance: []
};

// Load existing stats if available
if (fs.existsSync(REPORT_FILE)) {
  try {
    const existing = JSON.parse(fs.readFileSync(REPORT_FILE, 'utf8'));
    stats = { ...existing, startTime: stats.startTime };
  } catch (e) {
    console.log('Starting fresh monitoring session');
  }
}

// Log function
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  console.log(message);
  fs.appendFileSync(LOG_FILE, logMessage);
}

// Check a single URL
function checkUrl(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    http.get(`${BASE_URL}${url}`, { followRedirect: false }, (res) => {
      const responseTime = Date.now() - startTime;
      const status = res.statusCode;
      const location = res.headers.location;
      
      // Update status code statistics
      stats.statusCodes[status] = (stats.statusCodes[status] || 0) + 1;
      
      // Track performance
      stats.performance.push({
        url,
        responseTime,
        timestamp: new Date().toISOString()
      });
      
      // Check for issues
      if (status >= 400 && status < 500) {
        const error = {
          url,
          status,
          message: `Client error: ${status}`,
          timestamp: new Date().toISOString()
        };
        stats.errors.push(error);
        log(`❌ ERROR: ${url} returned ${status}`);
      } else if (status >= 500) {
        const error = {
          url,
          status,
          message: `Server error: ${status}`,
          timestamp: new Date().toISOString()
        };
        stats.errors.push(error);
        log(`🔥 CRITICAL: ${url} returned ${status}`);
      } else if (status === 302 || status === 301) {
        stats.redirects.successful++;
        log(`✓ Redirect: ${url} → ${location} (${status})`);
      } else if (status === 200) {
        log(`✓ OK: ${url} (${responseTime}ms)`);
      }
      
      resolve({ url, status, responseTime, location });
    }).on('error', (err) => {
      stats.errors.push({
        url,
        error: err.message,
        timestamp: new Date().toISOString()
      });
      log(`💥 NETWORK ERROR: ${url} - ${err.message}`);
      resolve({ url, error: err.message });
    });
  });
}

// Run monitoring check
async function runCheck() {
  stats.checks++;
  log(`\n=== Monitoring Check #${stats.checks} ===`);
  
  for (const url of MONITOR_URLS) {
    await checkUrl(url);
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Save report
  saveReport();
}

// Save monitoring report
function saveReport() {
  const report = {
    ...stats,
    summary: {
      totalChecks: stats.checks,
      totalErrors: stats.errors.length,
      averageResponseTime: stats.performance.length > 0 
        ? Math.round(stats.performance.reduce((sum, p) => sum + p.responseTime, 0) / stats.performance.length)
        : 0,
      uptimePercentage: ((stats.checks * MONITOR_URLS.length - stats.errors.length) / (stats.checks * MONITOR_URLS.length) * 100).toFixed(2),
      mostCommonStatusCodes: Object.entries(stats.statusCodes)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([code, count]) => ({ code, count }))
    }
  };
  
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  
  // Print summary
  console.log('\n📊 Current Status:');
  console.log(`Checks: ${report.summary.totalChecks}`);
  console.log(`Errors: ${report.summary.totalErrors}`);
  console.log(`Avg Response Time: ${report.summary.averageResponseTime}ms`);
  console.log(`Uptime: ${report.summary.uptimePercentage}%`);
}

// Alert function for critical issues
function checkAlerts() {
  // Alert if too many errors
  const recentErrors = stats.errors.filter(e => {
    const errorTime = new Date(e.timestamp);
    const now = new Date();
    return (now - errorTime) < 300000; // Last 5 minutes
  });
  
  if (recentErrors.length > 5) {
    log('🚨 ALERT: High error rate detected! ' + recentErrors.length + ' errors in last 5 minutes');
  }
  
  // Alert if response times are too high
  const recentPerf = stats.performance.slice(-10);
  if (recentPerf.length > 0) {
    const avgTime = recentPerf.reduce((sum, p) => sum + p.responseTime, 0) / recentPerf.length;
    if (avgTime > 1000) {
      log('⚠️  WARNING: Slow response times detected! Average: ' + Math.round(avgTime) + 'ms');
    }
  }
}

// Main monitoring loop
async function monitor() {
  log('🚀 Starting /Docs → /docs Migration Monitor');
  log(`Monitoring ${MONITOR_URLS.length} URLs every ${CHECK_INTERVAL/1000} seconds`);
  
  // Initial check
  await runCheck();
  
  // Schedule regular checks
  setInterval(async () => {
    await runCheck();
    checkAlerts();
  }, CHECK_INTERVAL);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  log('\n📊 Final Report:');
  log(`Total Checks: ${stats.checks}`);
  log(`Total Errors: ${stats.errors.length}`);
  log(`Successful Redirects: ${stats.redirects.successful}`);
  log('Monitor stopped.');
  process.exit(0);
});

// Start monitoring
monitor().catch(console.error); 