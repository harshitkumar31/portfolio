import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';

interface SpotlightItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Articles' | 'Snippets' | 'Connect';
  href: string;
  external?: boolean;
  hint?: string;
}

const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  { id: 'nav-home', title: 'Home', category: 'Navigation', href: '/', hint: 'Return to start' },
  { id: 'nav-about', title: 'About Harshit', category: 'Navigation', href: '/about', hint: 'Staff Engineer biography & journey' },
  { id: 'nav-blog', title: 'Blog & Articles', category: 'Navigation', href: '/blog', hint: 'Distributed systems & engineering thoughts' },
  { id: 'nav-snippets', title: 'Code Snippets', category: 'Navigation', href: '/snippets', hint: 'Reusable functions & developer utilities' },
  { id: 'nav-uses', title: 'Setup & Uses', category: 'Navigation', href: '/uses', hint: 'Hardware, software & homelab gear' },
  { id: 'nav-chat', title: 'Chat / Ask Me Anything', category: 'Navigation', href: '/chat', hint: 'Interactive AI conversation' },
  { id: 'art-nas', title: 'Setup a NAS + Homelab using Raspberry Pi', category: 'Articles', href: '/blog/setup-a-nas', hint: 'Storage & self-hosting' },
  { id: 'art-diagrams', title: 'Diagrams as Code', category: 'Articles', href: '/blog/diagrams-as-code', hint: 'Architecture visualization' },
  { id: 'art-graphql', title: 'Creating a Proxy for your GraphQL Server', category: 'Articles', href: '/blog/graphql-proxy', hint: 'Federation & routing' },
  { id: 'art-resources', title: 'Resources I wish I knew when I started my career', category: 'Articles', href: '/blog/beginner-resources', hint: 'Engineering growth' },
  { id: 'snip-git-wip', title: 'Git WIP Commit Shortcut', category: 'Snippets', href: '/snippets/git-wip', hint: 'Developer workflow' },
  { id: 'social-github', title: 'GitHub Profile', category: 'Connect', href: 'https://github.com/harshitkumar31', external: true, hint: '@harshitkumar31' },
  { id: 'social-linkedin', title: 'LinkedIn Profile', category: 'Connect', href: 'https://www.linkedin.com/in/harshitkumar31', external: true, hint: 'Professional network' },
  { id: 'social-youtube', title: 'YouTube Channel', category: 'Connect', href: 'https://www.youtube.com/channel/UCBQISzmK1iI91Qv0kbZFBWg', external: true, hint: 'Tech videos' }
];

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Spotlight({ isOpen, onClose }: SpotlightProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = query.trim() === ''
    ? SPOTLIGHT_ITEMS
    : SPOTLIGHT_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.hint && item.hint.toLowerCase().includes(query.toLowerCase()))
      );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const executeItem = useCallback((item: SpotlightItem) => {
    onClose();
    if (item.external) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(item.href);
    }
  }, [onClose, router]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          onClose();
        }
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          executeItem(selected);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, executeItem]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[620px] overflow-hidden rounded-[24px] bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] shadow-apple-xl animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Apple Spotlight Search Header */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.08]">
          <svg
            className="h-5 w-5 text-[#86868b] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Spotlight Search (articles, setup, pages...)"
            className="w-full bg-transparent text-[17px] text-[#1d1d1f] dark:text-[#f5f5f7] placeholder-[#86868b] outline-none border-none ring-0 font-normal"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-black/[0.06] px-1.5 py-0.5 text-[11px] font-medium text-[#86868b] dark:bg-white/[0.1] hover:bg-black/[0.1] dark:hover:bg-white/[0.16] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 scrollbar-none">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-[15px] text-[#86868b]">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => executeItem(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex w-full items-center justify-between rounded-[14px] px-3.5 py-2.5 text-left transition-all ${
                      isSelected
                        ? 'bg-[#0071e3] text-white shadow-sm'
                        : 'text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-semibold ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-black/[0.05] text-[#6e6e73] dark:bg-white/[0.08] dark:text-[#a1a1a6]'
                        }`}
                      >
                        {item.category === 'Navigation' && '🧭'}
                        {item.category === 'Articles' && '📄'}
                        {item.category === 'Snippets' && '⚡'}
                        {item.category === 'Connect' && '🔗'}
                      </div>
                      <div className="truncate">
                        <p className="text-[14px] font-medium truncate">
                          {item.title}
                        </p>
                        {item.hint && (
                          <p
                            className={`text-[12px] truncate ${
                              isSelected ? 'text-white/80' : 'text-[#86868b]'
                            }`}
                          >
                            {item.hint}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pl-3 shrink-0">
                      <span
                        className={`text-[11px] font-medium uppercase tracking-[0.06em] px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-black/[0.04] text-[#86868b] dark:bg-white/[0.06]'
                        }`}
                      >
                        {item.category}
                      </span>
                      {isSelected && (
                        <span className="text-[12px] text-white/90">↵</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Apple Spotlight Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-black/[0.06] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] text-[11px] text-[#86868b]">
          <div className="flex items-center gap-2">
            <span>Use</span>
            <span className="rounded bg-black/[0.06] dark:bg-white/[0.1] px-1 py-0.5 font-mono">↑</span>
            <span className="rounded bg-black/[0.06] dark:bg-white/[0.1] px-1 py-0.5 font-mono">↓</span>
            <span>to navigate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Press</span>
            <span className="rounded bg-black/[0.06] dark:bg-white/[0.1] px-1 py-0.5 font-mono">↵</span>
            <span>to select</span>
          </div>
        </div>
      </div>
    </div>
  );
}
