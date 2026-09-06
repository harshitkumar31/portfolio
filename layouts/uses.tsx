import Container from 'components/Container';
import PageHeader from 'components/PageHeader';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses – Harshit Kumar"
      description="Here's what tech I'm currently using for coding, videos, and music."
    >
      <article className="mx-auto mb-16 w-full max-w-[720px]">
        <PageHeader
          eyebrow="Setup"
          title="My Gear"
          description="Here's what tech I'm currently using for coding, videos, and music. Most of these have been accumulated over the past few years, with a recent office upgrade in 2020."
        />
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
