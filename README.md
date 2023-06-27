# Getting Started with Create React App

In the project directory, you can run:

### `yarn`

### `yarn dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Description
<!-- Processment -->

## 1. Verify requirement
1. Create a server to crawl data from (formula1.com)
2. Create an application by using Typescript/React
- Implement UI ( Information details, Chart, Table )
- Implement feature Search/Filter/Sort based on data from the server

## 2. Create tasks to implement
![image](https://github.com/hvnganh/vrillar-test/assets/102368559/d25d04d8-5e39-423e-af0c-c01d1c0c760e)

## 3. Create branches based on the task's feature
- Implement task's features relate to the branch
- Control marge/pull requests in source code
- Commit message follows the pattern. Ex: feature "feat: implement search feature",...

## 4. Pick libraries to support coding
- Control source code: Eslint, prettier
- Build tool: Vite
- Fetch server's data: react-query
- Chart: chart.js, react-chartjs-2
- UI lib: ant design
- State routing: react-router-dom
- Utility CSS: Tailwind
![image](https://github.com/hvnganh/vrillar-test/assets/102368559/656b8bf5-2365-4e5c-aaaf-5e8932de2b72)

<!-- Folder structure -->

## Folder structure

```
├── src
│   ├── modules
│   │   ├── common (Define common component)
|   |   |   |   ├── components (Define common components: Button, input, radio button, checkbox, ...)
|   |   │   │   │   ├── **/*.css (Additional style)
|   |   │   |   |   ├── hook (Custom hook to handle logic for components)
|   |   |   |   |   |   ├── useComponents.ts (File handle logic for components)
|   |   |   |   |   |   ├── constant.ts (Define constant which is used for this component)
|   |   |   |   |   |   ├── helpers.ts (Define helper functions which is used for this component)
|   |   │   |   |   ├── *.tsx (Component only contain UI state)
|   |   │   |   |   ├── index.tsx
|   |   |   |   ├── icons (Define common components: Button, input, radio button, checkbox, ...)
|   |   │   |   |   ├── IconName
|   |   |   │   |   |   ├── index.tsx
│   │   ├── skeletons (Define Loading UI for specific component)
│   │   │   ├── SkeletonsName
|   │   │   │   ├── SkeletonsName
|   │   ├── layout
|   |   |   ├── LayoutName
|   |   |   |   ├── hooks (folder constant file logics for components)
|   |   |   |   |   |   ├── useLayoutName.ts (File handle logic for Layout)
|   |   |   |   ├── index.tsx (Layout UI)
│   ├── lib
|   │   ├── context (Define all context used in project)
|   |   |   ├── ContextName.ts
|   │   ├── hooks (Define all custom Hooks)
|   |   |   ├── useHookName.ts
|   │   ├── utils (Define all utils function in project)
|   |   |   ├── group
|   |   |   |   ├── groupFunctionName.ts (Function name)
│   ├── pages
|   |   ├── index.tsx (HomePage)
|   |   ├── group
|   |   |   ├── groupPageName.ts (Define page's name)
│   ├── types
|   |   ├── global.d.ts (Define global type)
│   ├── App.tsx (Custom route)
│   ├── main.tsx (Custom App)
│   ├── index.css (Custom global style)
├── public
├── package.json
├── yarn.json
├── .eslintrc.cjs (Eslint rule setup)
├── .prettierrc
├── vite.config.ts (Config file for Vite App)
├── tailwind.config.cjs (Config file for Tailwind lib)
├── postcss.config.cjs
└── tsconfig.json (Config path, import and export for Next)
```
