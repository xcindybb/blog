import { defineConfig } from 'vitepress'
import { getFirstDocLink, autoGenerateSidebar } from 'press-util'

export default defineConfig({
  base: '/',
  title: 'Ruobing\'s blog',
  description: 'Vitepress documentation template project',
  lastUpdated: true,

  themeConfig: {
    logo: 'logo.png',
    lastUpdatedText: '最后更新于',
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
