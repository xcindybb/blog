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
      text: '✒ 数据安全',
      link: getFirstDocLink('base/write')
    }, {
      text: '🤔 思考',
      link: getFirstDocLink('base/think')
    }, {
      text: '🔨 售前工具',
      link: getFirstDocLink('base/util')
    }],

    sidebar: autoGenerateSidebar(),
  }
})
