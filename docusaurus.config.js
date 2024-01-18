const { themes } = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const outerLinkIcon = `<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K">
  <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
</svg>`

const presetClassicOptions = {}

if (process.env.CI_TAG) {
  Object.assign(presetClassicOptions, {
    gtag: {
      trackingID: 'G-LRQR4ZB077'
    }
  })
}

console.log('process.env.CI_TAG', process.env.CI_TAG)

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zepp OS Developers Documentation',
  tagline: 'All the resources you needed.',
  url: 'https://docs.zepp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Zepp Health', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: true,
  customFields: {
    description:
      'Documentation provides information about Zepp OS, including Tools, Sample Code, Articles, and API reference, learn how to build Zepp OS Apps and Watchfaces using our documentation.',
    keywords: 'zeppos, zepp os, documentation, tools, apps, watchfaces'
  },
  plugins: ['docusaurus-plugin-sass'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr'
      },
      'zh-cn': {
        label: '中文（中国）',
        direction: 'ltr'
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        ...presetClassicOptions,
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v3',
              banner: 'none'
            },
            'v2': {
              label: 'v2',
              banner: 'unmaintained'
            },
            '1.0': {
              label: 'v1.0',
              banner: 'none'
            }
          },
          editUrl: 'https://github.com/zepp-health/zeppos-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        }
      }),
    ]
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        language: ['en', 'zh']
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Zepp OS DOC Logo',
          src: 'img/logo.png',
          href: '/',
          target: '_self'
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides'
          },
          {
            type: 'doc',
            docId: 'reference/app-json',
            position: 'left',
            label: 'App'
          },
          {
            type: 'doc',
            docId: 'watchface/watchface-quick-start',
            position: 'left',
            label: 'Watchface'
          },
          {
            type: 'doc',
            docId: 'designs/index',
            position: 'left',
            label: 'Design Specifications'
          },
          {
            href: 'https://console.zepp.com/',
            label: 'Console',
            position: 'right'
          },
          {
            type: 'localeDropdown',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/guides/quick-start'
              },
              {
                label: 'Designs',
                to: '/docs/designs'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                html: `<a href="https://t.zepp.com/t/zepp-community-slack" target="_blank" rel="noopener noreferrer" class="footer__link-item only-hide-zh">
                  <span>Slack ${outerLinkIcon}</span>
                </a>`
              },
              {
                html: `<a href="https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=39dl39d6-4317-421e-ba14-16d311d92c49" target="_blank" rel="noopener noreferrer" class="footer__link-item only-show-zh">
                  <span>飞书 ${outerLinkIcon}</span>
                </a>`
              },
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/zepp-health/discussions'
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCU8LoAkoGotUNL82arnib5w'
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Zepp OS Developer',
                href: 'https://developer.zepp.com/os/home'
              },
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zepp Health, Inc.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}
