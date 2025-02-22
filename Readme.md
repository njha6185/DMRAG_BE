## Steps to Create Project From scratch (Backend Application)

### Steps to Start Basic Express TypeScript Server from Scratch
1. `npm init`
2. `npm install express`
3. `npm install dotenv`
4. Create a `.env` file and add the port
5. `npm install --save-dev typescript @types/express @types/node`
6. `npx tsc --init`
7. In `tsconfig.json`, add the `dist` folder in `outDir`
8. Create a server using Express in `index.ts` file (Create `index.ts` file)
9. `npm run build` (add in `package.json` script key `"build": "npx tsc"`)
10. `npm start`

### Steps to Add PostgresDb and Redis
1. Install docker in your machine
2. Create a docker file (`docker-compose.yml`) in root of project
3. Add docker compose image detail for postgresql
4. Also add redis docker compose detail (If you want redis)
5. Open docker desktop
6. In terminal at project root path execute command (`docker-composem up`)

### Steps to create a Db-client and use db pool for performance improvement
1. Install pg library using (`npm install pg`) and (`npm i --save-dev @types/pg`)

### Steps to implement logger
1. Install pino (`npm install pino`), pino-caller (`npm install pino-caller`) and pino-pretty (`npm run pino-pretty`)
2. write logger function code and export it.
3. Now import it and use it based on need

### ESLint setup
1. Install ESLint (`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`)
2. Initialise  (`npx eslint --init`)
3. select required options and add below config in file `eslint.config.mjs`
```typescript
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    ignores: ["node_modules/**", "dist/**", "data/**", "redis-data/**"],
  },
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
```

### Package.json script
```json
{
    "scripts": {
    "start": "node dist/index.js",
    "build": "npx tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "npx eslint ."
    }
  }
```
### Pretieer config
1. `npm install --save-dev prettier`


## To Run this Project Locally
1. Install Node.js
2. Run `npm install`
3. Run `docker-compose up`
4. Run `npm run build`
5. Run `npm start`