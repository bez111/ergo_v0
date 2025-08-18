# Identity & Security Standards

Protect your project, your users, and yourself — by design.

## Minimum Requirements

- **Strong Passwords:** All admin and service accounts must use passwords at least 12 characters long.
- **Multi-Factor Authentication:** Enable 2FA on Telegram, Discord, GitHub, email, and any accounts with admin access.
- **No Secrets in Code:** Never commit private keys, API secrets, or passwords to your codebase. Use a secrets scanner in CI/CD.
- **Open-Source & Audits:** Preferably open-source your code. Community or third-party audit recommended for all mainnet launches.
- **KYA Prompts:** Clearly state assumptions, risks, and user responsibilities in your app (see [KYA Standard](./KYA.md)).

## Recommended Tools

- Password managers ([Bitwarden](https://bitwarden.com/), [1Password](https://1password.com/))
- 2FA apps ([Authy](https://authy.com/), [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en))
- [Semgrep](https://semgrep.dev/) for secrets scanning
- [Snyk](https://snyk.io/) or [OWASP DependencyCheck](https://owasp.org/www-project-dependency-check/) for dependency audits

## Resources

- [KYA Standard](./KYA.md)
- [Security Audit Checklist](#) 