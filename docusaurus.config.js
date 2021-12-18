module.exports = {
  title: 'Jules Peguet',
  tagline: 'Student developper',
  url: 'https://j-peguet.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'j-peguet', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'portfolio', // Usually your repo name.
  themeConfig: {
    // Metadata
    image: 'img/logo.jpg',
    metadata: [
      // Primary Meta Tags
      {name: 'description', content: 'Jules Peguet'},
      {name: 'description', content: 'Portfolio, documentation/blog'},
      // Open Graph/ Facebook
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://www.julespeguet.fr/'},
      {property: 'og:title', content: 'Jules Peguet'},
      {property: 'og:description', content: 'Portfolio, documentation/blog'},
      {property: 'og:image', content: 'https://j-peguet.github.io/portfolio/img/logo.jpg'},
      // Twitter
      {property: 'twitter:card', content: 'summary_large_image'},
      {property: 'twitter:url', content: 'https://www.julespeguet.fr/'},
      {property: 'twitter:title', content: 'Jules Peguet'},
      {property: 'twitter:description', content: 'Portfolio, documentation/blog'},
      {property: 'twitter:image', content: 'https://j-peguet.github.io/portfolio/img/logo.jpg'},
    ],
    navbar: {
      title: 'Jules Peguet',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/j-peguet/portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    hideableSidebar: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: 'docs/',
            },
            {
              label: 'Kubernetes Installation',
              to: 'docs/Kubernetes/install_&_configuration/1_install_VM',
            },
            {
              label: 'Masterings Arrays',
              to: 'docs/javascript/mastering-arrays',
            },
          ],
        },
        {
          title: 'Contact me',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/j-peguet',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Jules_Peguet',
            },
            {
              label: 'Mail',
              href: 'mailto:jules.peguet@epsi.fr',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/j-peguet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jules Peguet`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/j-peguet/portfolio/blob/master/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/j-peguet/portfolio/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
