import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import NewsletterLink from 'components/NewsletterLink';
import PageHeader from 'components/PageHeader';
import { allNewsletters } from '.contentlayer/generated';
import { pick } from 'lib/utils';

export default function Newsletter({ newsletters }) {
  return (
    <Container
      title="Newsletter – Harshit Kumar"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="mx-auto mb-8 w-full max-w-[720px]">
        <PageHeader
          eyebrow="Inbox"
          title="Newsletter"
          description="A behind-the-scenes look at what I'm working on and writing about — favorite articles, and anything fascinating about technology."
        />
        <Subscribe />
        <h3 className="mb-4 mt-12 text-[28px] font-semibold tracking-[-0.022em] text-[#1d1d1f] dark:text-[#f5f5f7]">
          Archive
        </h3>
        <div className="apple-inset divide-y divide-black/[0.06] dark:divide-white/[0.08]">
          {newsletters
            .sort(
              (a, b) =>
                Number(new Date(b.publishedAt)) -
                Number(new Date(a.publishedAt))
            )
            .map((newsletter) => (
              <NewsletterLink key={newsletter.title} {...newsletter} />
            ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const newsletters = allNewsletters.map((newsletter) =>
    pick(newsletter, ['slug', 'title', 'summary', 'publishedAt'])
  );

  return { props: { newsletters } };
}
