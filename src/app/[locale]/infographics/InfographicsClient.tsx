'use client';

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars, @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, Eye, ExternalLink, Share2, Download, ChevronDown, ArrowRight, Twitter, Linkedin, MessageCircle, Link2, X, Copy, Sparkles, BookOpen, HelpCircle } from 'lucide-react';
import { BackgroundWrapper } from '@/components/home/background-wrapper';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { FinalCTASimple } from '@/components/home/final-cta-simple';
import { infographics, filterInfographics } from '@/data/infographics';
import { InfographicMeta, CATEGORY_LABELS } from '@/types/infographic';
import { toast } from '@/components/ui/use-toast';

const ITEMS_PER_PAGE = 12;

// Helper to check if infographic is "new" (published within last 14 days)
function isNewInfographic(publishDate: string): boolean {
  const published = new Date(publishDate);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24));
  return diffDays <= 14;
}

// Helper function to get short category labels
function getShortCategoryLabel(category: string): string {
  const shortLabels: Record<string, string> = {
    'consensus-mining': 'Mining',
    'eutxo-smart-contracts': 'eUTXO',
    'storage-rent-economics': 'Storage Rent',
    'privacy-sigma': 'Privacy',
    'nipopows-light-clients': 'NiPoPoWs',
    'dev-tooling': 'Dev Tools',
    'vc-chains-narratives': 'VC Chains'
  };
  return shortLabels[category] || category;
}

// Simple Reddit-style icon in Lucide outline style
const RedditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="9.5" cy="11" r="0.9" fill="currentColor" />
    <circle cx="14.5" cy="11" r="0.9" fill="currentColor" />
    <path d="M9.5 14c.7.6 1.5.9 2.5.9s1.8-.3 2.5-.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15.5 8.5 17 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="17.7" cy="7.2" r="0.9" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M13.5 7 14 5l2 0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export function InfographicsClient() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const didMountRef = useRef(false);
  const didMountPageRef = useRef(false);

  const getInitialPage = () => {
    const pageParam = searchParams?.get('page');
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    return Number.isNaN(page) || page < 1 ? 1 : page;
  };

  const [filters, setFilters] = useState({
    category: 'all',
    search: '',
    sort: 'popular'
  });
  const [currentPage, setCurrentPage] = useState(() => getInitialPage());
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updatePageInUrl = (page: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (page <= 1) {
      params.delete('page');
    } else {
      params.set('page', String(page));
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  // Sync page change with URL and scroll to top (except on initial mount)
  useEffect(() => {
    if (!didMountPageRef.current) {
      didMountPageRef.current = true;
      return;
    }
    // Show loading skeleton briefly
    setIsLoading(true);
    updatePageInUrl(currentPage);
    if (typeof window !== 'undefined') {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsLoading(false);
      }, 150);
    }
  }, [currentPage]);

  // Filter and paginate infographics
  const filteredInfographics = useMemo(() => {
    return filterInfographics(infographics, filters);
  }, [filters]);

  const totalPages = Math.ceil(filteredInfographics.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedInfographics = filteredInfographics.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page when filters change (but not on initial mount)
  useEffect(() => {
    if (didMountRef.current) {
    setCurrentPage(1);
      updatePageInUrl(1);
    } else {
      didMountRef.current = true;
    }
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };


  const handleDownload = async (infographic: InfographicMeta, size?: string) => {
    let downloadUrl = infographic.fullImageUrl;

    // Try to use pre-generated files if they exist
    if (size) {
      const basePath = infographic.fullImageUrl.replace(/\.(png|jpg|jpeg|svg)$/i, "");
      let candidateUrl = infographic.fullImageUrl;

      if (size === "png") {
        candidateUrl = `${basePath}.png`;
      } else if (size === "vertical") {
        candidateUrl = `${basePath}-vertical.png`;
      } else if (size === "svg") {
        candidateUrl = `${basePath}.svg`;
      }

      try {
        const response = await fetch(candidateUrl, { method: "HEAD" });
        if (response.ok) {
          downloadUrl = candidateUrl;
          console.log(`Using pre-generated ${size} asset:`, candidateUrl);
        } else {
          console.log(`Pre-generated ${size} asset not found, falling back to original`);
        }
      } catch (error) {
        console.log(`Could not check for ${size} asset, using original`);
      }
    }
    
    // Create download link
    const link = document.createElement('a');
    link.href = downloadUrl;
    
    // Set filename based on size
    const sizeLabel = size && size !== 'png' ? `-${size}` : '';
    link.download = `${infographic.slug}${sizeLabel}-infographic.png`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up blob URL if we created one
    if (downloadUrl !== infographic.fullImageUrl) {
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    }
    
    console.log('Download initiated for:', infographic.title, size ? `(${size})` : '(original)');
  };

  return (
    <BackgroundWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { name: 'Infographics', href: '/infographics' },
            ]}
            className="mb-8"
          />
          
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ergo Blockchain <span className="text-orange-400">Infographics</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-6 max-w-4xl mx-auto">
              Visual guides to Ergo's PoW, eUTXO smart contracts, storage rent, privacy and global settlement.
              <br />
              Save, share, and reuse them with attribution to ergoblockchain.org.
            </p>
            <p className="text-lg text-neutral-400 mb-8 max-w-3xl mx-auto">
              This hub collects visual explainers for the most important parts of the Ergo protocol: consensus, tokenomics, DeFi, privacy, light clients and more.
              Every infographic comes with a full-text breakdown so you can learn, teach and build with Ergo.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
              asChild
            >
              <a href="/start/introduction">
                Learn the basics <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.section>

          {/* Filters Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search infographics (e.g. 'storage rent', 'NiPoPoWs', 'VC chains')"
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    aria-label="Search infographics"
                    role="searchbox"
                  />
                </div>

                {/* Desktop Filters */}
                <div className="hidden lg:flex gap-4 items-center" role="group" aria-label="Filter options">
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white focus:outline-none focus:border-orange-400"
                    aria-label="Filter by category"
                  >
                    {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                      <option key={value} value={value} className="bg-black">
                        {label}
                      </option>
                    ))}
                  </select>


                  <select
                    value={filters.sort}
                    onChange={(e) => handleFilterChange('sort', e.target.value)}
                    className="px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white focus:outline-none focus:border-orange-400"
                    aria-label="Sort by"
                  >
                    <option value="newest" className="bg-black">Newest</option>
                    <option value="popular" className="bg-black">Most popular</option>
                    <option value="alphabetical" className="bg-black">A–Z</option>
                  </select>
                </div>

                {/* Mobile Filter Toggle */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden border-white/20 text-white"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </Button>
              </div>

              {/* Mobile Filters Collapsible */}
              <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <CollapsibleContent className="lg:hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white focus:outline-none focus:border-orange-400"
                    >
                      {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
                        <option key={value} value={value} className="bg-black">
                          {label}
                        </option>
                      ))}
                    </select>


                    <select
                      value={filters.sort}
                      onChange={(e) => handleFilterChange('sort', e.target.value)}
                      className="px-4 py-3 bg-black/60 border border-white/20 rounded-xl text-white focus:outline-none focus:border-orange-400"
                    >
                      <option value="newest" className="bg-black">Newest</option>
                      <option value="popular" className="bg-black">Most popular</option>
                      <option value="alphabetical" className="bg-black">A–Z</option>
                    </select>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Results Count (optional UX element removed to avoid any hydration drift) */}
          </motion.section>

          {/* Infographics Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            {isLoading ? (
              /* Skeleton loader */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-black/60 border border-white/10 rounded-xl overflow-hidden animate-pulse">
                    <div className="aspect-[16/10] bg-neutral-800" />
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between">
                        <div className="h-5 bg-neutral-800 rounded w-3/4" />
                        <div className="h-5 bg-neutral-800 rounded w-16" />
                      </div>
                      <div className="h-3 bg-neutral-800 rounded w-1/3" />
                      <div className="space-y-2">
                        <div className="h-3 bg-neutral-800 rounded w-full" />
                        <div className="h-3 bg-neutral-800 rounded w-5/6" />
                      </div>
                      <div className="pt-4 border-t border-white/10 flex gap-2">
                        <div className="h-9 bg-neutral-800 rounded-xl flex-1" />
                        <div className="h-9 bg-neutral-800 rounded-xl flex-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : paginatedInfographics.length === 0 ? (
              <div className="text-center py-16">
                <Grid className="h-16 w-16 text-neutral-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No infographics found</h3>
                <p className="text-neutral-400 mb-4">Try adjusting your filters or search terms.</p>
                <Button
                  variant="outline"
                  onClick={() => setFilters({ category: 'all', search: '', sort: 'popular' })}
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
                >
                  Reset filters
                </Button>
              </div>
            ) : (
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
                role="list"
                aria-label="Infographics gallery"
                aria-live="polite"
                aria-atomic="false"
              >
                {paginatedInfographics.map((infographic, index) => (
                  <motion.div
                    key={infographic.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    role="listitem"
                  >
                    <InfographicCard infographic={infographic} onDownload={handleDownload} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <nav className="flex justify-center items-center gap-2" role="navigation" aria-label="Pagination">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => {
                    const newPage = Math.max(1, currentPage - 1);
                    setCurrentPage(newPage);
                  }}
                  className="border-white/20 text-white disabled:opacity-50"
                  aria-label="Go to previous page"
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                    className={currentPage === page 
                      ? "bg-orange-400 text-black hover:bg-orange-500" 
                      : "border-white/20 text-white"
                    }
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    const newPage = Math.min(totalPages, currentPage + 1);
                    setCurrentPage(newPage);
                  }}
                  className="border-white/20 text-white disabled:opacity-50"
                  aria-label="Go to next page"
                >
                  Next
                </Button>
              </nav>
            </motion.section>
          )}

          {/* How to Use Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <div className="bg-black border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">How to use these infographics</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Reuse Freely</h3>
                  <p className="text-neutral-400">
                    You can reuse any infographic in presentations, blog posts or educational materials.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Credit & Link Back</h3>
                  <p className="text-neutral-400">
                    Please credit ergoblockchain.org and link back to the original page.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Share2 className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Custom Branding</h3>
                  <p className="text-neutral-400">
                    If you want editable source files or custom branding, contact the Ergo community.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
                  <a href="/start/introduction">Learn more about Ergo</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white hover:text-black">
                  <a href="/start/community">Join the community</a>
                </Button>
              </div>
            </div>
          </motion.section>

          {/* Related Resources Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <div className="bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Related Questions */}
                <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-400/20 rounded-xl flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Common Questions</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/questions/what-is-ergo" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> What is Ergo blockchain?
                      </a>
                    </li>
                    <li>
                      <a href="/questions/what-is-eutxo" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> What is the eUTXO model?
                      </a>
                    </li>
                    <li>
                      <a href="/questions/what-is-mev-resistance" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> How does MEV resistance work?
                      </a>
                    </li>
                    <li>
                      <a href="/questions/what-is-storage-rent" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> What is storage rent?
                      </a>
                    </li>
                  </ul>
                  <a href="/questions" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm mt-4 font-medium">
                    View all questions <ArrowRight className="h-3 w-3" />
                  </a>
                </div>

                {/* Related Playbooks */}
                <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-400/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Playbooks & Guides</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/playbooks/first-ergo-wallet" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> Set up your first Ergo wallet
                      </a>
                    </li>
                    <li>
                      <a href="/playbooks/start-mining-ergo" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> Start mining Ergo
                      </a>
                    </li>
                    <li>
                      <a href="/playbooks/ergo-defi-basics" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> Ergo DeFi basics
                      </a>
                    </li>
                    <li>
                      <a href="/playbooks/privacy-on-ergo" className="text-neutral-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                        <span className="text-orange-400">→</span> Privacy tools on Ergo
                      </a>
                    </li>
                  </ul>
                  <a href="/playbooks" className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm mt-4 font-medium">
                    View all playbooks <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Email Capture Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FinalCTASimple
              title="Stay Updated on Ergo Visual Resources"
              description="Get notified when we publish new infographics, visual guides, and educational content about Ergo blockchain."
            />
          </motion.section>

        </div>
      </div>
    </BackgroundWrapper>
  );
}

function InfographicShareMenu({ 
  infographic, 
  onDownload 
}: { 
  infographic: InfographicMeta; 
  onDownload: (infographic: InfographicMeta, size?: string) => void;
}) {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : 'https://ergoblockchain.org'}/infographics/${infographic.slug}`;

  // Close modals on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDownloadModalOpen(false);
        setIsShareModalOpen(false);
      }
    };
    if (isDownloadModalOpen || isShareModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
    return undefined;
  }, [isDownloadModalOpen, isShareModalOpen]);
  const encodedTitle = encodeURIComponent(`${infographic.title} - Ergo Infographics`);
  const encodedDescription = encodeURIComponent(infographic.shortDescription);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = [
    {
      name: "X",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=BuildOnErgo`,
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "Reddit",
      icon: RedditIcon,
      url: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
    },
  ];

  const downloadSizes = [
    { name: "PNG — Standard (1920×1080)", size: "png", description: "Landscape PNG for desktop and social feeds" },
    { name: "Embed code (HTML)", size: "embed", description: "Copy HTML snippet to embed this infographic" },
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Link copied",
        description: "Thanks for spreading Ergo.",
        duration: 1500,
      });
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const copyEmbedCode = async () => {
    const embedCode = `<img src="${infographic.fullImageUrl}" alt="${infographic.imageAlt}" loading="lazy" />`;
    try {
      await navigator.clipboard.writeText(embedCode);
      setEmbedCopied(true);
      setTimeout(() => setEmbedCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy embed code:', err);
    }
  };

  const handleLocalDownload = async (size?: string) => {
    setIsProcessing(true);
    try {
      await onDownload(infographic, size);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 w-full">
      {/* Primary Share button */}
      <Button
        type="button"
        variant="default"
        className="flex-1 inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider border border-white/20 bg-white/5 text-neutral-100 hover:border-orange-400 hover:text-orange-300 hover:bg-orange-400/10 rounded-[14px] h-9 text-[10px] sm:text-xs px-3"
        onClick={(e) => {
          e.stopPropagation();
          setIsShareModalOpen(true);
        }}
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </Button>

      {/* Secondary Download button */}
      <div className="relative dropdown-container flex-1">
        <Button
          type="button"
          variant="outline"
          className="w-full inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider border border-white/20 bg-transparent text-neutral-200 hover:border-orange-400 hover:text-orange-300 hover:bg-orange-400/10 rounded-[14px] h-9 text-[10px] sm:text-xs px-3"
          onClick={(e) => {
            e.stopPropagation();
            setIsDownloadModalOpen(true);
          }}
          title="Download image"
        >
          <Download className="w-4 h-4" />
          <span>Download</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isDownloadModalOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Share modal - rendered via Portal to avoid hover issues */}
      {isShareModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
          onClick={() => setIsShareModalOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-sm mx-4 rounded-2xl bg-neutral-900 border border-white/10 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-modal-title"
          >
            <div className="mb-2 flex items-center justify-between">
              <span id="share-modal-title" className="text-sm font-medium text-white">Share</span>
              <button
                type="button"
                className="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-slate-300 hover:border-orange-400 hover:bg-orange-400/10 hover:text-orange-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                onClick={() => setIsShareModalOpen(false)}
                aria-label="Close share options"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="mb-3 text-xs text-neutral-400">
              Pick where to share this infographic. Help other cypherpunks find fair-launch chains.
            </p>

            <div className="space-y-2">
              {shareLinks.map((social) => (
                <button
                  key={social.name}
                  type="button"
                  onClick={() => {
                    handleShare(social.url);
                    setIsShareModalOpen(false);
                  }}
                  className="w-full flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-100 hover:border-orange-400 hover:bg-orange-400/10 hover:text-orange-300 transition-colors"
                  title={`Share on ${social.name}`}
                  aria-label={`Share on ${social.name}`}
                >
                  <span>Share on {social.name}</span>
                  <social.icon className="w-4 h-4" />
                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  copyLink();
                  setIsShareModalOpen(false);
                }}
                className="w-full flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-100 hover:border-orange-400 hover:bg-orange-400/10 hover:text-orange-300 transition-colors"
                title={copied ? "Link copied" : "Copy link"}
                aria-label={copied ? "Link copied" : "Copy link"}
              >
                <span>{copied ? "Link copied" : "Copy link"}</span>
                <Link2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Download modal - rendered via Portal to avoid hover issues */}
      {isDownloadModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
          onClick={() => setIsDownloadModalOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-sm mx-4 rounded-2xl bg-neutral-900 border border-white/10 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
          >
            <div className="mb-2 flex items-center justify-between">
              <span id="download-modal-title" className="text-sm font-medium text-white">Download</span>
              <button
                type="button"
                className="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-slate-300 hover:border-orange-400 hover:bg-orange-400/10 hover:text-orange-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                onClick={() => setIsDownloadModalOpen(false)}
                aria-label="Close download options"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="mb-3 text-xs text-neutral-400">
              Choose the best format for reusing this infographic across social, blogs and decks.
            </p>

            <div className="space-y-2">
              {downloadSizes.map((sizeOption) => (
                <button
                  key={sizeOption.size}
                  type="button"
                  onClick={() => {
                    if (sizeOption.size === 'embed') {
                      copyEmbedCode();
                    } else {
                      handleLocalDownload(sizeOption.size === 'original' ? undefined : sizeOption.size);
                    setIsDownloadModalOpen(false);
                    }
                  }}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-slate-100 hover:border-orange-400 hover:bg-orange-400/10 hover:text-orange-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title={sizeOption.name}
                  aria-label={sizeOption.name}
                >
                  <div className="flex flex-col items-start">
                    <span>{sizeOption.name}</span>
                    <span className="text-[11px] text-neutral-400">
                      {sizeOption.size === 'embed'
                        ? (embedCopied ? 'Embed code copied to your clipboard.' : sizeOption.description)
                        : sizeOption.description}
                    </span>
                  </div>
                  {sizeOption.size === 'embed' ? (
                    <Copy className="w-4 h-4" />
                  ) : (
                  <Download
                    className={`w-4 h-4 ${isProcessing ? 'animate-pulse opacity-70' : ''}`}
                  />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

function InfographicCard({ 
  infographic, 
  onDownload
}: { 
  infographic: InfographicMeta; 
  onDownload: (infographic: InfographicMeta, size?: string) => void;
}) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Truncate title to max 2 lines (approximately 80 chars)
  const truncatedTitle = infographic.title.length > 80
    ? infographic.title.substring(0, 77) + '...'
    : infographic.title;

  // Truncate description to max 2 lines (approximately 140 chars)
  const truncatedDescription = infographic.shortDescription.length > 140
    ? infographic.shortDescription.substring(0, 137) + '...'
    : infographic.shortDescription;

  const handleCardClick = () => {
    // Save current page to sessionStorage for back navigation
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;
      sessionStorage.setItem('infographics-return-url', currentUrl);
    }
    router.push(`/infographics/${infographic.slug}`);
  };

  return (
    <Card 
      className="bg-black/60 border-white/10 hover:border-orange-400/40 transition-all duration-300 overflow-hidden group cursor-pointer h-full flex flex-col hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Preview Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
        
        {/* New badge */}
        {infographic.publishDate && isNewInfographic(infographic.publishDate) && (
          <div className="absolute top-3 left-3 z-30">
            <Badge className="bg-orange-500 text-white border-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              New
            </Badge>
          </div>
        )}
        
        <picture>
          <source 
            srcSet={infographic.previewImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.avif')} 
            type="image/avif" 
          />
          <source 
            srcSet={infographic.previewImageUrl.replace(/\.(png|jpg|jpeg)$/i, '.webp')} 
            type="image/webp" 
          />
          <img
            src={infographic.previewImageUrl}
            alt={infographic.imageAlt}
            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
            loading="lazy"
            style={{ aspectRatio: '16/9' }}
          />
        </picture>
        
        {/* Hover overlay - subtle */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/15 flex items-center justify-center z-20">
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <Eye className="h-4 w-4" />
              View infographic
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title with badge on the right */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-white leading-tight flex-1">
            {truncatedTitle}
          </h3>
          <Badge
            variant="outline"
            className="border-white/15 bg-white/5 text-neutral-200 text-xs shrink-0"
          >
            {getShortCategoryLabel(infographic.category)}
          </Badge>
        </div>
        
        {/* Meta line under badge */}
        <div className="text-xs text-neutral-400 mb-3">
          {getShortCategoryLabel(infographic.category)} · Visual guide
        </div>

        {/* Description - max 2 lines */}
        <p className="text-neutral-400 text-sm mb-6 leading-relaxed flex-1">
          {truncatedDescription}
        </p>

        {/* Actions - Clean share menu */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <InfographicShareMenu 
            infographic={infographic}
            onDownload={onDownload}
          />
        </div>
      </div>
    </Card>
  );
}

