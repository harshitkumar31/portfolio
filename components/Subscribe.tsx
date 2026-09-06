import { useState, useRef } from 'react';
import useSWR from 'swr';
import { trackGoal } from 'fathom-client';

import fetcher from 'lib/fetcher';
import { Form, FormState, Subscribers } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement>(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = Number(data?.count || 0);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEl.current?.value) return;

    setForm({ state: Form.Loading });

    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputEl.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      const { error } = await res.json();
      if (error) {
        setForm({
          state: Form.Error,
          message: error
        });
        return;
      }

      trackGoal('JYFUFMSF', 0);
      inputEl.current.value = '';
      setForm({
        state: Form.Success,
        message: `Welcome to the dispatch! You're on the list.`
      });
    } catch (err: any) {
      setForm({
        state: Form.Error,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <div className="apple-card my-8 w-full p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0071e3] dark:text-[#2997ff]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#30d158]" />
          VIP Dispatch
        </span>
        <span className="text-[12px] text-[#86868b]">
          {Number(subscriberCount) > 0 ? `${subscriberCount.toLocaleString()} engineers subscribed` : 'No spam. Unsubscribe anytime.'}
        </span>
      </div>

      <h3 className="text-[22px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] sm:text-[26px]">
        Stay updated on systems, architecture & tech.
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6] max-w-xl">
        Early dispatches regarding distributed computing, GraphQL, homelab experiments, and lessons learned building platform systems.
      </p>

      <form className="relative mt-6 max-w-lg" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email address"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required
          className="block h-12 w-full rounded-full border border-black/[0.08] bg-black/[0.03] px-5 pr-32 text-[15px] text-[#1d1d1f] outline-none placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:shadow-apple-glow dark:border-white/[0.1] dark:bg-white/[0.06] dark:text-[#f5f5f7] dark:focus:bg-[#161617] transition-all"
        />
        <button
          className="absolute right-1.5 top-1.5 flex h-9 px-5 items-center justify-center rounded-full bg-[#0071e3] text-[13px] font-medium text-white shadow-xs transition-all hover:bg-[#0077ed] active:scale-95 disabled:opacity-50"
          type="submit"
          disabled={form.state === Form.Loading}
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>

      {form.state === Form.Error && (
        <div className="mt-4">
          <ErrorMessage>{form.message}</ErrorMessage>
        </div>
      )}
      {form.state === Form.Success && (
        <div className="mt-4">
          <SuccessMessage>{form.message}</SuccessMessage>
        </div>
      )}
    </div>
  );
}
