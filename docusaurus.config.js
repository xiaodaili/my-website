// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'shanzha的小站',
  tagline: '🚧小站正在修建中',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'blog',
        // Simple use-case: string editUrl
        // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        // Advanced use-case: functional editUrl
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/xiaodaili/my-website/blob/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogTitle: 'Blog title',
        blogDescription: 'Blog',
        blogSidebarCount: 5,
        blogSidebarTitle: 'all my blog',
        routeBasePath: 'blog',
        include: ['**/*.{md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        postsPerPage: 10,
        blogListComponent: '@theme/BlogListPage',
        blogPostComponent: '@theme/BlogPostPage',
        blogTagsListComponent: '@theme/BlogTagsListPage',
        blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
        rehypePlugins: [],
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        feedOptions: {
          type: 'all',
          title: '',
          description: '',
          copyright: '',
          language: undefined,
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '文章',
          },
          { to: '/blog', label: '博客', position: 'right' },
          // { label: '归档', to: 'blog/archive', position: 'right' },
          {
            label: '更多',
            position: 'right',
            items: [
              { label: '归档', to: 'blog/archive' },
              { label: '读书笔记', to: 'docs/读书笔记' }
            ],
          },
          {
            href: 'https://github.com/xiaodaili',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
            ],
          },
          //   {
          //     title: 'Community',
          //     items: [
          //       {
          //         label: 'Stack Overflow',
          //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //       },
          //       {
          //         label: 'Discord',
          //         href: 'https://discordapp.com/invite/docusaurus',
          //       },
          //       {
          //         label: 'Twitter',
          //         href: 'https://twitter.com/docusaurus',
          //       },
          //     ],
          //   },
          //   {
          //     title: 'More',
          //     items: [
          //       {
          //         label: 'Blog',
          //         to: '/blog',
          //       },
          //       {
          //         label: 'GitHub',
          //         href: 'https://github.com/facebook/docusaurus',
          //       },
          //     ],
          //   },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PRESENT, shanzha. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
