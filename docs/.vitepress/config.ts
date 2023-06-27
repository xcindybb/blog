import { defineConfig } from 'vitepress'
import { getFirstDocLink, autoGenerateSidebar } from 'press-util'


export default defineConfig({
  base: '/',
  appearance: true,
  title: 'Ruobing\'s blog',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]
  ],
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/logo.png',
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [{
      text: '✒ 信息安全',
      link: getFirstDocLink('write')
    }, {
      text: '🤔 杂记',
      link: getFirstDocLink('think')
    }, {
      text: '🔨 工具',
      link: getFirstDocLink('util')
    }],

    sidebar: autoGenerateSidebar(),
  }
})
