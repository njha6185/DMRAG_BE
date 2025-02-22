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


## To Run this Project Locally
1. Install Node.js
2. Run `npm install`
3. Run `npm run build`
4. Run `docker-compose up`
4. Run `npm start`