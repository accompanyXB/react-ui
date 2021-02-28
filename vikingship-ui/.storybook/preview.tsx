// 配置全局的修饰器
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { addDecorator, addParameters } from '@storybook/react'
// 引入样式文件
import '../src/styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
  // background: 'pink'
}
// 定义内容居中的组件
const StoryWrapper = (storyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
)
// 添加全局修饰器
addDecorator(StoryWrapper)
// 添加显示组件信息
addDecorator(withInfo);

// 添加配置
addParameters({
  info: {
    inline: true, // 直接显示信息，不需要点击图标
    header: false // 不显示头部，比较好看
  }
})