# Getting Started with Create React App

In the project directory, you can run:

### `npm install`

### `npm dev`

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
