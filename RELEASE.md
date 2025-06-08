# Release Process

This document outlines the process for creating new releases of the Ergo website.

## Versioning

We follow [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

- MAJOR version for incompatible API changes
- MINOR version for backwards-compatible functionality
- PATCH version for backwards-compatible bug fixes

## Release Steps

1. **Prepare Release**
   - Update version in `package.json`
   - Update `CHANGELOG.md` with new changes
   - Create a new branch: `release/vX.Y.Z`

2. **Testing**
   - Run all tests: `npm test`
   - Check build: `npm run build`
   - Verify all pages render correctly
   - Test responsive design
   - Verify dark/light theme switching

3. **Create Release**
   - Create and push Git tag: `git tag -a vX.Y.Z -m "Version X.Y.Z"`
   - Push tag to remote: `git push origin vX.Y.Z`
   - Create GitHub Release with release notes from CHANGELOG.md

4. **Deploy**
   - Deploy to staging environment
   - Verify staging deployment
   - Deploy to production
   - Verify production deployment

5. **Post-Release**
   - Merge release branch to main
   - Update documentation if needed
   - Announce release to team

## Release Checklist

- [ ] Version updated in package.json
- [ ] CHANGELOG.md updated
- [ ] All tests passing
- [ ] Build successful
- [ ] Responsive design verified
- [ ] Dark/light theme working
- [ ] Git tag created and pushed
- [ ] GitHub Release created
- [ ] Staging deployment verified
- [ ] Production deployment verified
- [ ] Documentation updated
- [ ] Team notified 