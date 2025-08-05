# WeRead Clone - Vercel Deployment Guide

## Overview
This document provides instructions for deploying the WeRead clone to Vercel.

## Prerequisites

1. **Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)
   - Install Vercel CLI: `npm i -g vercel`

2. **Git Repository**
   - Project should be in a Git repository
   - Remote repository (GitHub, GitLab, Bitbucket) for automatic deployments

3. **Environment Variables**
   - Database connection string
   - Authentication secrets
   - Any API keys or external service credentials

## Deployment Setup

### 1. Connect to Vercel

#### Option A: Via Vercel CLI (Recommended for initial setup)

```bash
# Login to Vercel
vercel login

# Link project to Vercel
vercel

# Follow the prompts to:
# - Set project name
# - Link to Git remote
# - Configure environment variables
```

#### Option B: Via Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Configure project settings

### 2. Configure Environment Variables

In Vercel dashboard or via CLI:

```bash
# Set production environment variables
vercel env add DATABASE_URL production
vercel env add NEXTAUTH_URL production
vercel env add NEXTAUTH_SECRET production
vercel env add SUPABASE_URL production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
```

Required environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:port/db` |
| `NEXTAUTH_URL` | URL for NextAuth.js | `https://your-app.vercel.app` |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js | Generate a random string |
| `SUPABASE_URL` | Supabase project URL | `https://xyz.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | From Supabase dashboard |

### 3. Configure Build Settings

The [`vercel.json`](../vercel.json) file includes:

- Next.js build configuration
- Environment variables for build time
- Function timeout settings
- Routing configuration

### 4. Database Setup

#### For PostgreSQL (Supabase)

1. Ensure your Supabase project is configured
2. Update your Prisma schema to match production
3. Run migrations on production database:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to production database
npx prisma db push --preview-feature
```

#### For Development (SQLite)

For local development, the project uses SQLite:

```bash
# Generate client for SQLite
npx prisma generate

# Push to local SQLite
npx prisma db push
```

### 5. Deploy

#### Automatic Deployment (Git-based)

1. Push changes to your Git repository
2. Vercel automatically builds and deploys
3. Preview URLs for each commit
4. Production deployment on main branch

#### Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy to preview URL
vercel
```

## Deployment Workflow

### Development to Production

```mermaid
graph LR
    A[Local Development] --> B[Git Commit]
    B --> C[Push to Repository]
    C --> D[Vercel Build]
    D --> E[Preview Deployment]
    E --> F[Manual Promote to Production]
    F --> G[Production Deployment]
```

### Branch Strategy

- `main`/`master`: Production deployments
- `develop`: Staging/preview deployments
- Feature branches: Automatic preview deployments

## Monitoring and Logs

### Viewing Logs

```bash
# View logs for production
vercel logs --prod

# View logs for preview deployment
vercel logs
```

### Vercel Analytics

1. Go to Vercel dashboard
2. Select your project
3. Navigate to "Analytics" tab
4. Monitor performance, traffic, and errors

## Domain Configuration

### Custom Domain

1. In Vercel dashboard, go to project settings
2. Navigate to "Domains" tab
3. Add your custom domain
4. Configure DNS records as instructed

### HTTPS

Vercel automatically provisions HTTPS certificates for:
- `.vercel.app` domains
- Custom domains

## Performance Optimization

### Build Optimization

The project is optimized for Vercel deployment:

- Next.js static site generation where possible
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Efficient bundling

### Caching Strategy

- Static assets cached on CDN edge
- API responses cached with appropriate headers
- Database query optimization

## Troubleshooting

### Common Issues

#### Build Failures

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in package.json
3. Verify TypeScript and ESLint configurations

#### Environment Variables

1. Ensure all required variables are set
2. Check for typos in variable names
3. Verify variable values are correct

#### Database Connection

1. Verify DATABASE_URL is correct
2. Ensure database is accessible from Vercel
3. Check database migrations are applied

### Debug Commands

```bash
# Check environment variables
vercel env ls

# Redeploy with latest changes
vercel --prod

# Clear cache and redeploy
vercel rm --prod && vercel --prod
```

## Rollback Strategy

### Quick Rollback

1. Go to Vercel dashboard
2. Navigate to "Deployments" tab
3. Find the last stable deployment
4. Click "..." → "Promote to Production"

### Git-based Rollback

```bash
# Revert to previous commit
git revert <commit-hash>

# Push to trigger redeploy
git push origin main
```

## Security Considerations

### Environment Variables

- Never commit sensitive data to repository
- Use Vercel's environment variable system
- Regularly rotate secrets and keys

### Content Security Policy

The project includes basic CSP headers. For production:

1. Consider stricter CSP policies
2. Implement proper CORS configuration
3. Use Vercel's security headers

### Database Security

1. Use connection pooling for production
2. Implement proper access controls
3. Regularly update database credentials

## Next Steps

1. Complete initial deployment
2. Set up monitoring and alerts
3. Configure custom domain
4. Implement CI/CD pipeline
5. Set up backup and recovery procedures

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Domain Configuration](https://vercel.com/docs/projects/domains)