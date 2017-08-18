# dsa.js
Implementations of common data structures and algorithms in JavaScript with modern ES6 and plus.

## Run Code

This project depends on [babel](https://babeljs.io/) to compile ES6 into more compatible JavaScript, and [jest](https://facebook.github.io/jest/) to run tests.

Clone this repo and run

```bash
$ npm install
```

to install dependencies.

Then run

```bash
$ npm test path/to/test/file
```

to execute a test file. So for example,

```bash
$ npm test ./src/stack.test.js
```

will execute the test files for stack.

Tests can also be run in watch mode, type

```bash
$ npm test -- --watch
```

will watch all the tests.

Test coverage can be found in `./coverage/lcov-report/index.html` (not committed to version control) after running the tests.

## ESLint

This project also has [ESLint](http://eslint.org/) set up. The configuration mainly uses eslint recommended rules, along with the [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) rules to better support ES6 import statements. The config file can be found under root directory: [.eslintrc](./.eslintrc).

To run the linter:

```bash
$ npx eslint path/to/file
```

with the path to a file or a directory. For example,

```bash
$ npx eslint ./src
```

will lint everything in the `src` folder under root directory.

```bash
$ npx eslint .
```

will lint everything. Be careful not to lint files in `lib`.

## Project Structure

All files are located in [`./src`](./src). If you run

```bash
npm run build
```

locally, these files will be compiled into `./lib`.

## References

- [Data Structures and Algorithms with JavaScript](http://shop.oreilly.com/product/0636920029557.do)

- [algorithms.js](https://github.com/felipernb/algorithms.js)

- [UBC CPSC 221: Basic Algorithms and Data Structures - Handouts](https://www.ugrad.cs.ubc.ca/~cs221/2015W1/handouts.shtml)
