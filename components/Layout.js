import Head from 'next/head';
import Header from '@/components/Header';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <Header />
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: 'Boilerplate',
  description: 'Nextjs tailwind boilerplate',
  keywords: 'Build faster with tailwindcss',
};
