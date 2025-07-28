import Link from 'next/link';

import Container from 'components/Container';

export default function Chat() {
    return (
        <Container title="Chat with Harshit Kumar">
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                    Chat
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Ask me anything you want to know about my career, tech, or anything else.
                </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <iframe
                    src="https://harshitkumar31-career-conversations.hf.space"
                    frameBorder="0"
                    width="70%"
                    height="700"
                ></iframe>
            </div>
        </Container>
    );
}
