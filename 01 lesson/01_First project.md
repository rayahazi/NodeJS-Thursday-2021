# First project

1. Create new folder `my-app`
2. In terminal:

```
cd my-app
npm init
```

- `npm init` - will initialize new project. It will create new file `package.json`, and we can define all the metadata for our project
  If we want to keep the same settings - press `Enter`.
- We can change the settings later directly in the file.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "This is our first project in NodeJS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Raaya Klein",
  "license": "ISC"
}
```

- name - name of the project
- version - the current version of the project
- description - תיאור הפרויקט
- main - the starting point of our app.
- scripts - we can define default scripts to run.
- author - מחבר הפרויקט
- license - רשיון התוכנה.

3. Create new file inside `my-app`: `01_hello.js`

```js
// With nodeJS we can run this file outside the browser - in our terminal.
console.log(`hello students!`);
```

4. run in terminal:

```
node 01_Hello.js
```

### Add new NPM package:

- We install random package from NPM: https://www.npmjs.com/package/uuid

```
npm install uuid

or:
npm i uuid
```

##### When we add a new package:

- In `package.json` - the package name + version will be added to `dependencies`
- `package-lock.json` - will be added (with dependencies details). We do not touch and change this file.
- `node_modules` folder will be added (if already exists - only the package will be added inside). We do not touch and change this folder.

#### nodemon

- Nodemon is a live server!

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```
npm install nodemon
```

#### NPM install

Sometimes we will want to delete `node_modules` (for uploads - it can be too heavy).

Delete:

- node_modules folder
- package-lock.json file

Restore these 2 items - using the metadata from `package.json`

```
npm install
```
