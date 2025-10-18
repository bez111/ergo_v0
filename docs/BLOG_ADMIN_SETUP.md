# Blog Admin Panel Setup Guide

## Overview
The blog admin panel is powered by Tina CMS, providing a visual interface for managing blog content with full SEO optimization capabilities.

## Features
- 📝 Visual MDX editor with live preview
- 🎯 SEO optimization fields (meta tags, schemas, keywords)
- 📅 Editorial calendar for content planning
- 📊 Content templates aligned with 90-day strategy
- 🔍 Focus keyword tracking
- 📈 Performance analytics integration

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the root directory:

```bash
# Tina CMS Configuration
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id-here
TINA_TOKEN=your-read-only-token-here

# For local development
TINA_PUBLIC_IS_LOCAL=true

# GitHub Integration (for production)
GITHUB_OWNER=your-github-username
GITHUB_REPO=ErgoErgo
GITHUB_TOKEN=your-github-token
GITHUB_BRANCH=main
```

### 2. Get Tina Cloud Credentials
1. Go to [https://app.tina.io](https://app.tina.io)
2. Create a new project
3. Connect your GitHub repository
4. Copy the Client ID and generate a read-only token
5. Add them to your `.env.local` file

### 3. Local Development
```bash
# Install dependencies (already done)
npm install

# Run the development server
npm run dev

# Access the admin panel
# Navigate to: http://localhost:3000/admin
```

### 4. Creating Content

#### New Blog Post
1. Go to `/admin`
2. Click "Blog Posts" in the sidebar
3. Click "Create New"
4. Fill in the required fields:
   - **Title**: 60-70 characters for SEO
   - **Description**: 155-160 characters meta description
   - **Category**: Select from predefined categories
   - **Tags**: Add relevant keywords
   - **SEO Settings**: Configure advanced SEO options

#### SEO Optimization
Each post includes comprehensive SEO fields:
- **Focus Keywords**: Primary keywords to target (3-5)
- **Schema Type**: Article, Tutorial, HowTo, etc.
- **Open Graph**: Custom social media previews
- **Canonical URL**: Override if needed

#### Content Templates
Use predefined templates for consistency:
- **Pillar Content**: 5000+ word comprehensive guides
- **Comparison Posts**: Side-by-side feature comparisons
- **Tutorials**: Step-by-step technical guides
- **Market Analysis**: Trading and investment content

### 5. Editorial Calendar
Plan your content strategy:
1. Go to "Editorial Calendar" in admin
2. Schedule posts according to the 90-day strategy
3. Assign authors and track status
4. Monitor keyword targets

### 6. Publishing Workflow

#### Draft → Review → Publish
1. **Draft**: Create and edit content
2. **Review**: SEO check and content review
3. **Schedule**: Set publish date/time
4. **Publish**: Make live on site

#### SEO Checklist
Before publishing, ensure:
- [ ] Title is 60-70 characters
- [ ] Meta description is 155-160 characters
- [ ] Focus keywords are naturally integrated
- [ ] Images have alt text
- [ ] Internal links are added
- [ ] Schema type is selected
- [ ] Read time is accurate

### 7. Content Strategy Implementation

Based on `CONTENT_STRATEGY_90_DAYS.md`:

#### Week 1-2: Foundation Phase
- Focus on educational content
- Target beginners & crypto-curious
- Publish 6 cornerstone articles

#### Week 3-4: Momentum Phase
- DeFi and use case content
- Target DeFi users & investors
- Launch comparison posts

#### Week 5-8: Growth Phase
- Developer-focused content
- Technical tutorials
- Community highlights

#### Week 9-12: Authority Phase
- Market analysis
- Thought leadership
- Predictions and insights

### 8. Performance Monitoring

Track these KPIs:
- **Organic Traffic**: Target 300% increase
- **Email Subscribers**: Target 10,000+
- **Social Shares**: 500+ per article
- **Keyword Rankings**: Monitor top 20 keywords
- **Engagement**: Comments, likes, time on page

### 9. Troubleshooting

#### Common Issues
- **Can't access admin**: Check environment variables
- **Changes not saving**: Verify GitHub permissions
- **Preview not working**: Ensure MDX dependencies installed
- **SEO score low**: Use Yoast-style checker in admin

### 10. Best Practices

1. **Consistency**: Publish daily according to schedule
2. **Quality**: Minimum 2000 words for pillar content
3. **SEO**: Always complete all SEO fields
4. **Engagement**: Respond to comments quickly
5. **Analytics**: Review performance weekly

## Support

For issues or questions:
- Check Tina CMS docs: [https://tina.io/docs](https://tina.io/docs)
- Review content strategy: `/CONTENT_STRATEGY_90_DAYS.md`
- GitHub issues: Report bugs and feature requests 