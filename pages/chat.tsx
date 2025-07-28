import Link from 'next/link';

import Container from 'components/Container';

export default function Chat() {
    return (
        <Container title="Chat with Harshit Kumar">
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
