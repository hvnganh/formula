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
- Fetch server's data: react-query ( Cache data response, loading state )
- Chart: chart.js, react-chartjs-2
- UI lib: ant design
- State routing: react-router-dom
- Utility CSS: Tailwind


![image](https://github.com/hvnganh/vrillar-test/assets/102368559/656b8bf5-2365-4e5c-aaaf-5e8932de2b72)

## 5. Implement coding

1. Result Page
- Call 'https://formula-1-api.onrender.com/result/${year}' GET Method will receive ALL RESULT from that ${year}
- Data type: 
```
type ResultOfTheYearType = {
        grandprix: string;
        date: string;
        winner: string;
        car: string;
        laps: string;
        time: string;
    }
```
- UI: Display data on Table and Chart
- Feature: Sort time asc and desc
- Skeleton loading when waiting for response from server

![1](https://github.com/hvnganh/vrillar-test/assets/102368559/42e338ce-8bf8-4311-8973-feddbd2d905c)
![2](https://github.com/hvnganh/vrillar-test/assets/102368559/0e413851-a952-437a-bdee-cc2eb43a6b29)
![4](https://github.com/hvnganh/vrillar-test/assets/102368559/f2eb7487-1f00-48db-9238-3347410c2875)
![3](https://github.com/hvnganh/vrillar-test/assets/102368559/683dff97-41a8-4367-8d27-b3df7f1b1b88)


2. Team Page
- Call 'https://formula-1-api.onrender.com/teams' GET Method will receive ALL TEAMS
- Call 'https://formula-1-api.onrender.com/team/${teamName}' GET Method will receive THE ${teamName}'s details
- Data type: 
```
type TeamCardType = {
        rank: string;
        points: string;
        teamName: string;
        teamImg: string;
        drivers: Array<{
            firstName: string;
            lastName: string;
            imgDriver: string;
        }>
        carSlug: string;
    }

type TeamDetailType = {
        teamDetail: {
            fullteamname: string;
            base: string;
            teamchief: string;
            technicalchief: string;
            chassis: string;
            powerunit: string;
            firstteamentry: string;
            worldchampionships: string;
            highestracefinish: string;
            polepositions: string;
            fastestlaps: string;
        };
        teamMember: Array<{
            avatar: string;
            number: string;
            name: string;
            team: string;
        }>;
        listParagraph: Array<string>;
        listYear: Array<string>;
    }
```
- UI: Display data on the card components
- Feature: Search Team by name
- Skeleton loading when waiting for response from server!
![team-1](https://github.com/hvnganh/vrillar-test/assets/102368559/11c68c66-09df-4a8c-a3c6-e82085e04847)
![team-2](https://github.com/hvnganh/vrillar-test/assets/102368559/09493ea3-3493-46a3-9d7b-ee4eafcce835)
![team-3](https://github.com/hvnganh/vrillar-test/assets/102368559/646df0ca-cb57-4c1a-a3ef-74920437c8b8)
![team-4](https://github.com/hvnganh/vrillar-test/assets/102368559/ce14fd15-9f99-4f75-b9eb-2382014178bb)

3. Driver Page
- Call 'https://formula-1-api.onrender.com/drivers' GET Method will receive ALL DRIVERS
- Call 'https://formula-1-api.onrender.com/driver/${driverName}' GET Method will receive THE ${driverName}'s details
- Data type: 
```
    type DriverCardType = {
        rank: string;
        points: string;
        firstName: string;
        lastName: string;
        nameSlug: string;
        team: string;
        flagImg: string;
        driverImg: string;
        numberImg: string;
    }

    type DriverDetailType = {
        driverImg: string;
        driverNumber: string;
        driverFullName: string;
        driverDetail: {
            team: string;
            country: string;
            podiums: string;
            points: string;
            grandsprixentered: string;
            worldchampionships: string;
            highestracefinish: string;
            highestgridposition: string;
            dateofbirth: string;
            placeofbirth: string;
        };
        listParagraph: Array<string>;
    }
```
- UI: Display data on the card components
- Feature: Search Driver by name
- Skeleton loading when waiting for response from server!

![driver-1](https://github.com/hvnganh/vrillar-test/assets/102368559/fe871333-f18f-41d2-92e2-156e4f97d16d)
![driver-2](https://github.com/hvnganh/vrillar-test/assets/102368559/554cddb5-9e3b-4735-8061-50b6b38b385d)
![driver-3](https://github.com/hvnganh/vrillar-test/assets/102368559/ba6e79b4-0d91-4df4-a725-ebf37e09c0ab)
![driver-4](https://github.com/hvnganh/vrillar-test/assets/102368559/1e592463-028e-4c8c-9b2d-f2e841f4147c)


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
