module.exports = {
  title: 'rRNADif',
  tagline: 'Make 16S great again',
  url: 'https://ostash-group.github.io',
  baseUrl: '/rRNADif/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.gif',
  organizationName: 'ostash-group', // Usually your GitHub org/user name.
  projectName: 'rRNADif', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'rRNADif',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.gif',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
//        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ostash-group/rRNADif',
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
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/installation',
            },
          ],
        },
        {
          title: 'Guides',
          items: [
            {
              label: 'Get started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
 //           {
//            label: 'Blog',
//              to: 'blog',
//            },
            {
              label: 'GitHub',
              href: 'https://github.com/ostash-group/rRNADif',
            },
          ],
        },
      ],
      copyright: `Copyright © Pavlo Hrab. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pavlohrab/rRNADif-docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pavlohrab/rRNADif-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
