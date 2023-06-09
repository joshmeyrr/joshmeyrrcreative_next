import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
      {/* <Header name={globalData.name} /> */}
      <main className="p-2 mx-auto md:p-4 md:px-8 max-w-theme">
        <section className="pt-2 h-[66vh] md:h-[75vh] relative flex items-end md:items-center justify-center">
          {/* <img
            className="object-cover w-full h-full rounded-theme hero-image"
            src="../static/social-media-2.jpg"
            alt=""
          /> */}
          <div className="absolute flex flex-col px-4 pb-8 md:pb-0 md:justify-center">
            <h1 className="text-shadow-theme text-5xl font-bold text-right lowercase max-w-5xl md:text-center md:text-5xl lg:text-6xl font-header !leading-[1.2] md:!leading-[1.4]">
              Short form content editing & publishing
            </h1>
            <p className="pl-12 mt-4 text-3xl italic text-right text-shadow-theme md:text-center md:text-4xl lg:text-5xl md:pl-0">
              Press record. Submit the footage. Relax.
            </p>
          </div>
        </section>
        {/* <h1 classNameName="mb-12 text-3xl text-center lg:text-5xl">
          {globalData.blogTitle}
        </h1>
        <ul classNameName="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="mb-3 font-bold uppercase opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul> */}
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
