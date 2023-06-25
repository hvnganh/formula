# Getting Started with Create React App

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
│   │   ├── pages (Define components used in specific page)
|   │   │   ├── PageName
|   │   │   │   ├── **/*.css (Additional style)
|   │   |   |   ├── hook (Custom hook to handle logic for components)
|   |   |   |   |   ├── useComponents.ts (File handle logic for components)
|   |   |   |   |   ├── constant.ts (Define constant which is used for this component)
|   |   |   |   |   ├── helpers.ts (Define helper functions which is used for this component)
|   │   |   |   ├── *.tsx (Component only contain UI state)
|   │   |   |   ├── index.tsx
│   ├── layout
|   |   ├── LayoutName
|   |   |   ├── hooks (folder constant file logics for components)
|   |   |   |   |   ├── useLayoutName.ts (File handle logic for Layout)
|   |   |   ├── index.tsx (Layout UI)
|   |   ├── components (General component for all layouts)
|   |   |   ├── ComponentName
|   |   |   |   ├── index.tsx (Define export components)
|   |   |   |   ├── hooks (folder constant file logics for components)
|   |   |   |   |   ├── useComponents.ts (File handle logic for components)
|   |   |   |   |   ├── constant.ts (Define constant which is used for this component)
|   |   |   |   |   ├── helpers.ts (Define helper functions which is used for this component)
|   |   |   |   ├── ComponentName.tsx (Define UI of component)
│   ├── lib
|   │   ├── context (Define all context used in project)
|   |   |   ├── ContextName.ts
|   │   ├── hooks (Define all custom Hooks)
|   |   |   ├── useHookName.ts
|   │   ├── utils (Define all utils function in project)
|   |   |   ├── group
|   |   |   |   ├── groupFunctionName.ts (File name should have to prefix(group) + Function name)
|   │   ├── pages
|   |   ├── _app.tsx (Custom App)
|   |   ├── index.tsx (homepage)
|   |   ├── 404.tsx (404 error page)
|   |   ├── _document.tsx (Custom Document for SEO)
|   |   ├── _document.tsx (Custom Document for SEO)
│   ├── styles
|   |   ├── globals.css (Declare global css here)
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
