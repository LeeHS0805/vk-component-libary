# Getting started with vk components libary

组件库项目基于 `React / TypeScript` 进行开发,使用 `react-testing-library` 完成单元测试，使用 `storybook` 本地调试和生成文档页面；使用 husky 进行提交发布前验证，Github Actions CI/CD 集成；

实现了 Input、Button、AutoComplete、Menu、Icon、Transition、Upload 等常用组件；

项目发布了 `npm` 包，可进行快速引用；

## 使用参考

### NPM

https://www.npmjs.com/package/vk-component-libary

### 在线文档

https://leehs0805.github.io/vk-component-libary/

## 可使用的脚本

### 一些本地开发命令

```
//启动 storybook 本地服务
npm run storybook

//打包 storybook 静态资源
npm run build-storybook

//进行单元测试
npm test

//发布静态文件
npm run build

//发布到 npm
npm run publish
```

## 引入的库

### react-testing-libary

```
npm i @testing-library/react
npm i @testing-library/jest-dom -D

@testing-library/react   测试React Component
@testing-library/jest-dom   提供更丰富的dom断言api
```

### react-fontawesome

仅使用了`solid`版本

```
npm i --save @fortawesome/fontawesome-svg-core 
         @fortawesome/free-solid-svg-icons 
         @fortawesome/react-fontawesome
```

### react-transition-group

```
npm i react-transition-group @types/react-transition-group -S
```

### storybook

```
npx storybook init
```

#### addOn：react-docgen-typescript-loader

```
npm install --save-dev react-docgen-typescript-loader
```

**踩坑**

- React下的属性需要导出使用
- 除 export default 组件外，还要单独 export 组件

```
import React, { Component } from 'react';

export const ColorButton: React.SFC<ColorButtonProps>
```

