/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import type { ArchiveBlogPost, Props } from '@theme/BlogArchivePage';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

type YearProp = {
  year: string;
  posts: ArchiveBlogPost[];
};

function Year({ year, posts }: YearProp) {
  return (
    <>
      <h3 className={styles.year} id={year}>
        <span> {year} 年</span>
        <span className={styles.contentCount}>{posts.length} 篇</span>
      </h3>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.metadata.date}>
              <Link to={post.metadata.permalink}>
                {dayjs(post.metadata.date).format('MM-DD')} - <span className={styles.title}>{post.metadata.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function YearsSection({ years }: { years: YearProp[] }) {
  return (
    <section className={styles.main}>
      <div>
        <div>
          {years.map((_props, idx) => (
            <div key={idx} className=''>
              <Year {..._props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function listPostsByYears(blogPosts: readonly ArchiveBlogPost[]): YearProp[] {
  const postsByYear = blogPosts.reduce((posts, post) => {
    const year = post.metadata.date.split('-')[0]!;
    const yearPosts = posts.get(year) ?? [];
    return posts.set(year, [post, ...yearPosts]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(postsByYear, ([year, posts]) => ({
    year,
    posts,
  }));
}

export default function BlogArchive({ archive }: Props): JSX.Element {
  console.log(archive);

  const title = translate({
    id: 'theme.blog.archive.title',
    message: '历史文章',
    description: 'The page & hero title of the blog archive page',
  });
  const total = archive.blogPosts.length;
  const years = listPostsByYears(archive.blogPosts);
  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <main>
          <header>
            <div className={styles.header}>
              <Heading as='h1'>{title}</Heading>
              <p className={styles.contentCount}>文章总数：{total} 篇</p>
            </div>
          </header>
          {years.length > 0 && <YearsSection years={years} />}
        </main>
      </Layout>
    </>
  );
}
