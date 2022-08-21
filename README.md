# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 可使用的脚本

### 一些本地开发命令

```
//启动本地环境
npm run stroybook

//进行单元测试
npm test

//发布静态文件
npm run build

//发布到 npm
npm run publish
```

## ToDos

### Input组件

- [x] Default / Disabled
- [x] With icon
- [x] 

### Menu组件

- [x] Vertical 模式
- [x] Horizont 模式
- [x] SubMenu



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

