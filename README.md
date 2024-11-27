[![Deploy Next.js site to Pages](https://github.com/ozgurozbek/teothe/actions/workflows/nextjs.yml/badge.svg)](https://github.com/ozgurozbek/teothe/actions/workflows/nextjs.yml)

# Starting up locally

- Install Node.js
- run `npm install` on root of `package.json` file.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Next.JS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## UI

This project uses Ant Design (AntD) for UI components and styling. 

[Ant Design Documentation](https://ant.design/) - learn about Antd features.

Also this project integrates AntD Drawer component for mobile, if you are new to AntD, you can refer to the documentation about is usage. 

[Drawer Documentation](https://ant.design/components/drawer)

Tip with AntD, if you encounter layout or styling issues, ensure that the CSS is properly imported in globals.css or your component-specific styles.

If the styling does not work as intended, check if there are conflicting styles in globals.css or other global overrides that might be blocking or overriding the AntD styles. 

## CodeQL

CodeQL is disabled because it is a hassle to go check them for every PR and Merge. If it is enabled, get MS-SarifVSCode.sarif-viewer extension for VSCode to see SARIF files.

## Prettier for VSCODE

Install Prettier, F1 > settings.json > User Settings and paste the following:

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.inlineSuggest.enabled": true,
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[jsonc]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
```

After that, F1 again and type `Format` in the search area. Then, tick `Editor: Format on Save`.

## Tests

Testing can be done by running `npm run test` and results could be checked in terminal. Automatically, these tests are also being run and will prevent builds from passing if tests fail. You are encouraged to write more tests under `/src/__tests__`.
