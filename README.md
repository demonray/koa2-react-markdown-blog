# **koa2-react-markdown-blog**

keywords: koa2,react,redux,isomorphic,markdown,blog

## Notes:

This is a simple blog use markdown files,built with react+redux+koa2. just a practice


## Develop

```
npm start
```

## Production

```
npm run build
npm run production
```

## 目录结构

```bash
.
├── app
│   ├── actions
│   ├── components
│   ├── containers
│   │   └── App.jsx             # React App
│   ├── reducers
│   ├── routes.js               # 路由配置文件
│   └── store
│       └── createStore.js
├── bin
│   ├── dev.js
│   └── prod.js
├── package.json
├── platforms
│   ├── browser                 # 浏览器相关
│   │   └── index.js            # 浏览器 APP 入口
│   ├── common
│   │   └── config              # 配置
│   │       └── index.js
│   └── server                  # 服务端相关
│       ├── controllers
│       │   ├── indexCtrl.js
│       │   ├── serverRenderCtrl.js
│       │   └── usersCtrl.js
│       ├── index.js            # 服务端入口
│       ├── middlewareRegister.js
│       ├── models
│       ├── routes              # 服务端路由
│       │   ├── api.js
│       │   ├── index.js
│       │   └── render.js
│       ├── services
│       └── templates           # 服务端模板
│           ├── 404.ejs
│           ├── 422.ejs
│           ├── 500.ejs
│           └── index.ejs
├── pm2.json
├── public                      # public
│   ├── favicon.ico
├── webpack.config.dev.js
└── webpack.config.prod.js
```   