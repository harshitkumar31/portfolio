import { useState, useRef } from 'react';
import { format } from 'date-fns';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';

import fetcher from 'lib/fetcher';
import { Form, FormState } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);
  
  const deleteEntry = async (e) => {
    e.preventDefault();
    setIsDeleting(true);

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
    setIsDeleting(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft hover:shadow-medium transition-all duration-300 p-6">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {getInitials(entry.created_by)}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {entry.created_by}
              </h4>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{format(new Date(entry.updated_at), "MMM d, yyyy 'at' h:mm a")}</span>
              </div>
            </div>
            
            {/* Delete Button */}
            {user && entry.created_by === user.name && (
              <button
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                onClick={deleteEntry}
                disabled={isDeleting}
                title="Delete message"
              >
                {isDeleting ? (
                  <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                )}
              </button>
            )}
          </div>
          
          {/* Message */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
              {entry.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl.current.value
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

    inputEl.current.value = '';
    mutate('/api/guestbook');
    setForm({
      state: Form.Success,
      message: `Hooray! Thanks for signing my Guestbook.`
    });
  };

  return (
    <>
      {/* Sign Guestbook Form */}
      <div className="relative mb-12">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-lg opacity-75"></div>
        
        {/* Form Card */}
        <div className="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-soft p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Sign the Guestbook
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Share a message, thought, or greeting for future visitors to discover.
            </p>
          </div>

          {/* Authentication Required */}
          {!session && (
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Sign in to leave a message
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Authentication helps maintain a safe and friendly community space.
                </p>
              </div>
              
              <button
                className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                onClick={(e) => {
                  e.preventDefault();
                  signIn('github');
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Sign in with GitHub</span>
              </button>
              
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                Your information is only used to display your name. No spam, ever.
              </p>
            </div>
          )}

          {/* Authenticated Form */}
          {session?.user && (
            <div>
              {/* User Info */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {session.user.name?.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Signed in as {session.user.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ready to leave your message
                  </p>
                </div>
              </div>
              
              {/* Message Form */}
              <form className="space-y-4" onSubmit={leaveEntry}>
                <div className="relative">
                  <textarea
                    ref={inputEl}
                    aria-label="Your message"
                    placeholder="Share your thoughts, feedback, or just say hello..."
                    required
                    rows={4}
                    className="w-full p-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  type="submit"
                  disabled={form.state === Form.Loading}
                >
                  {form.state === Form.Loading ? (
                    <>
                      <LoadingSpinner />
                      <span>Signing guestbook...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign Guestbook</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Status Messages */}
          {(form.state === Form.Error || form.state === Form.Success) && (
            <div className="mt-6">
              {form.state === Form.Error ? (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-red-800 dark:text-red-200 font-medium">{form.message}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-green-800 dark:text-green-200 font-medium">{form.message}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Messages Section */}
      <div className="space-y-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Community Messages
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {(entries as any)?.length ? `${(entries as any).length} message${(entries as any).length !== 1 ? 's' : ''} from the community` : 'Be the first to sign the guestbook!'}
          </p>
        </div>
        
        {/* Messages List */}
        {(entries as any)?.length > 0 ? (
          <div className="space-y-6">
            {(entries as any)?.map((entry) => (
              <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No messages yet
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Be the first to sign the guestbook and start the conversation!
            </p>
          </div>
        )}
      </div>
    </>
  );
}
