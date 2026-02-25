import godotDark from './src/theme/godot-dark';
import godotLight from './src/theme/godot-light';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Sprouty Dialogs',
  tagline: 'A graph-based visual dialogue system for Godot',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url
  url: 'https://SproutyLabs.github.io',
  baseUrl: '/SproutyDialogsDocs/',
  organizationName: 'SproutyLabs',
  projectName: 'SproutyDialogsDocs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/SproutyLabs/SproutyDialogsDocs/tree/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.1.0',
              path: '1.1.0',
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/SproutyLabs/SproutyDialogsDocs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'ignore',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/sprouty-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Sprouty Dialogs',
      logo: {
        alt: 'Sprouty Dialogs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          versions: {
            current: {label: 'v1.1.0'},
            '1.0.0': {label: 'v1.0.0'},
          },
          position: 'right',
        },
        {
          href: 'https://github.com/SproutyLabs/SproutyDialogs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Getting Started',
              to: '/docs/category/getting-started/',
            },
            {
              label: 'Class Reference',
              to: '/docs/category/class-reference',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SproutyLabs/SproutyDialogs',
            },
            {
              label: 'Report a Bug',
              href: 'https://github.com/SproutyLabs/SproutyDialogs/issues/new?template=bug_report.md',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Support ♡',
              href: 'https://ko-fi.com/kazymila',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SproutyLabs. Built with Docusaurus.`,
    },
    prism: {
      theme: godotLight,
      darkTheme: godotDark,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid']
};

export default config;
