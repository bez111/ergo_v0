import { describe, it, expect } from '@playwright/test'
import { URLManager } from '@/lib/url-manager'

describe('URLManager', () => {
  describe('getCanonicalUrl', () => {
    it('should return correct canonical URL for homepage', () => {
      const url = URLManager.getCanonicalUrl('/')
      expect(url).toBe('https://ergoblockchain.org/')
    })

    it('should return correct canonical URL for docs pages', () => {
      const url = URLManager.getCanonicalUrl('/docs/introduction')
      expect(url).toBe('https://ergoblockchain.org/docs/introduction')
    })

    it('should handle trailing slashes correctly', () => {
      const url = URLManager.getCanonicalUrl('/blog/')
      expect(url).toBe('https://ergoblockchain.org/blog')
    })

    it('should handle query parameters', () => {
      const url = URLManager.getCanonicalUrl('/blog?page=2')
      expect(url).toBe('https://ergoblockchain.org/blog')
    })
  })

  describe('getRedirect', () => {
    it('should redirect /Docs to /docs', () => {
      const redirect = URLManager.getRedirect('/Docs/introduction')
      expect(redirect).toBeTruthy()
      expect(redirect?.to).toBe('/docs/introduction')
      expect(redirect?.statusCode).toBe(301)
    })

    it('should redirect /use/use-cases to /use/cases', () => {
      const redirect = URLManager.getRedirect('/use/use-cases/privacy')
      expect(redirect).toBeTruthy()
      expect(redirect?.to).toBe('/use/cases/privacy')
      expect(redirect?.statusCode).toBe(301)
    })

    it('should not redirect valid URLs', () => {
      const redirect = URLManager.getRedirect('/docs/introduction')
      expect(redirect).toBeNull()
    })
  })

  describe('shouldIndexPage', () => {
    it('should index main pages', () => {
      expect(URLManager.shouldIndexPage('/')).toBe(true)
      expect(URLManager.shouldIndexPage('/blog')).toBe(true)
      expect(URLManager.shouldIndexPage('/docs')).toBe(true)
    })

    it('should not index utility pages', () => {
      expect(URLManager.shouldIndexPage('/api/health')).toBe(false)
      expect(URLManager.shouldIndexPage('/404')).toBe(false)
      expect(URLManager.shouldIndexPage('/_next/static/chunk.js')).toBe(false)
    })

    it('should not index paginated pages beyond first', () => {
      expect(URLManager.shouldIndexPage('/blog?page=1')).toBe(true)
      expect(URLManager.shouldIndexPage('/blog?page=2')).toBe(false)
    })
  })
}) 