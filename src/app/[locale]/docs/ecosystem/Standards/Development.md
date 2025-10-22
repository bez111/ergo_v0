# Development Standards & Best Practices

Build projects that last — robust, open, and maintainable.

## Key Standards

- **Harden Server & App Configs:** Follow best practices for your stack (disable unused ports, secure headers, rate limiting, etc).
- **Dependency Management:** Always keep dependencies up to date. Automate checks during builds.
- **No Secrets in Code:** Use secrets scanning in CI/CD.
- **Analytics:** Integrate with [DeFiLlama](https://defillama.com/chain/Ergo), [ergo.watch](https://ergo.watch), or [Artemis](https://artemis.xyz) for on-chain metrics.
- **Open Source:** Public repos with clear README, license, contribution guide.
- **Ecosystem Integration:** Register your project in aggregators (ergcube, sigmaverse, ecosystem docs).

## Recommended Tools

- [Snyk](https://snyk.io/), [DependencyCheck](https://owasp.org/www-project-dependency-check/)
- [Semgrep](https://semgrep.dev/) with Secrets Policy
- GitHub Actions / CI for automated checks

## Resources

- [Add your project to Ecosystem](#)
- [Analytics Integration Guide](./Analytics.md) 