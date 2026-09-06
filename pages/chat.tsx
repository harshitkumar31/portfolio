import Container from 'components/Container';
import PageHeader from 'components/PageHeader';

export default function Chat() {
  return (
    <Container
      title="Interactive Conversation – Harshit Kumar"
      description="Ask questions about Harshit's platform engineering work, GraphQL architecture, or tech stack."
    >
      <div className="mx-auto mb-16 w-full max-w-[1020px]">
        {/* Apple Page Header */}
        <PageHeader
          eyebrow="Apple Intelligence &middot; AI Studio"
          title="Career Conversations"
          description="An interactive conversational model trained on my background, distributed systems philosophy, and career history. Ask me anything."
        />

        {/* Suggested Conversation Prompts */}
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="text-[13px] font-medium text-[#86868b] self-center mr-1">
            Try asking:
          </span>
          <span className="rounded-full bg-black/[0.04] px-3 py-1 text-[12px] text-[#1d1d1f] dark:bg-white/[0.06] dark:text-[#f5f5f7]">
            &ldquo;Tell me about Harshit&apos;s GraphQL work at Walmart&rdquo;
          </span>
          <span className="rounded-full bg-black/[0.04] px-3 py-1 text-[12px] text-[#1d1d1f] dark:bg-white/[0.06] dark:text-[#f5f5f7]">
            &ldquo;How did he reduce PWA load times at Quikr?&rdquo;
          </span>
          <span className="rounded-full bg-black/[0.04] px-3 py-1 text-[12px] text-[#1d1d1f] dark:bg-white/[0.06] dark:text-[#f5f5f7]">
            &ldquo;What is his homelab setup?&rdquo;
          </span>
        </div>

        {/* Ambient Glow & Frosted Frame */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-2 rounded-[36px] bg-gradient-to-r from-[#0071e3]/20 via-purple-500/10 to-[#30d158]/20 blur-2xl opacity-60 dark:opacity-30" />
          <div className="relative overflow-hidden rounded-[28px] bg-white border border-black/[0.08] shadow-apple-xl dark:bg-[#161617] dark:border-white/[0.1]">
            {/* macOS Window Header Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#f5f5f7] dark:bg-[#1f1f22] border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                <span className="ml-2 text-[12px] font-medium text-[#6e6e73] dark:text-[#86868b]">
                  Interactive AI Assistant &middot; HuggingFace Space
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#30d158]">
                <span className="h-2 w-2 rounded-full bg-[#30d158] animate-pulse" />
                Online
              </span>
            </div>

            <iframe
              src="https://harshitkumar31-career-conversations.hf.space"
              title="Career conversations"
              className="h-[720px] w-full border-0 bg-transparent"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
