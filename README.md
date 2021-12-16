# Server Testing Module Project

## Instructions

### Minimum Viable Product

For this project you will create a RESTful API using Node and Express, containing endpoints to perform some CRUD operations on a resource of your choosing. Two or three endpoints are enough. Data should be persisted in a SQLite database.

## Requirements

- Write a minimum of ten tests using supertest.

## Checklist

Here is a checklist of tasks to help you put your project together:

- ✅ Generate a `.gitignore` file.
  You should run: npx gitignore node

- ✅ Install express, knex, sqlite3 as plain dependencies.
  you should run : npm i express knex sqlite3 dotenv

- ✅ Install jest✔️, eslint✔️, nodemon✔️, supertest✔️, cross-env✔️ as dev-dependencies.

npm i -D nodemon jest @types/jest supertest cross-env

You should run:

npx eslint --init
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · node
✔ What format do you want your config file to be in? · JSON

npx jest --init
Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances and results before every test? … no

- ✅ Configure jest and eslint using `npx <libname> --init`.
- ✅ Create a `knexfile.js` with "development" and "testing" configurations.
  You should run:
  touch knexfile.js

- ✅ Create a `db-config.js` file that selects the correct configuration using the value of `process.env.NODE_ENV`.
- Create migration and seed files.

run:
npx knex migrate:make students-table
npx knex seed:make students-table

- ✅ Put together "start", "server", "rollback", "migrate" and "seed" scripts in your `package.json`.
- ✅ Create a "test" script in your `package.json` using cross-env to inject a `NODE_ENV` of "testing".
- Create a basic express application with a few database access functions and a few endpoints.
- Test your endpoints manually using Postman, HTTPie or similar.
- Test your endpoints with supertest.
