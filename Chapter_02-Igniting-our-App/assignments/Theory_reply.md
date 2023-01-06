## Theory Assignment:
1. ### What is `NPM`?
	- npm is the world's largest Software Library (Registry)
	- npm is also a software Package Manager and Installer
2. ### What is `Parcel/Webpack`? Why do we need it?
	- A Bundler is a tool that looks at your entire application, which at scale can be composed of sub-projects and rely on many third-party dependencies, and it will bundle everything into a minimal set of files that can be deployed to production, often a single .js file to optimize performance for the client.
3. ### What is `.parcel-cache`
	- Stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch
4. ### What is `npx` ?
	- NPX - A tool for executing Node packages.NPX helps us avoid versioning, dependency issues and installing unnecessary packages that we just want to try out.
5. ### What is difference between `dependencies` vs `devDependencies`.
	- `dependencies` is a library that a project needs to function effectively. The dependencies object specifies the packages that you need to run your code. For example React, Vue, Firebase, etc.
	- `devDependencies` are the packages a developer needs during development. The devDependencies object maps the packages that you will only need during the development of your project. You don’t need them to run your code in production. For example, a testing framework like Jest, or other utilities like ESLint.
6. ### What is Tree Shaking?
	- Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
	- In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination".
7. ### What is Hot Module Replacement?
	- Hot Module Replacement `(HMR)` improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.
8. ### List down your favourite 5 superpowers of Parcel.
	- Image optimization
	- Minification
	- Content hashing
	- Zero configuration

9. ### What is `.gitignore`? What should we add and not add into it?
	- A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.
	- We should not add files that we cannot regenerate. For example: package.json
	- We should add node_modules, because we can still generate it with the npm install command. 
10. ### What is the difference between `package.json` and `package-lock.json`.
	- Both of these files have the same format, and perform similar functions in the root of a project. The difference is that package-lock. json cannot be published, and it will be ignored if found in any place other than the root project.
	- lock. json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package. json.
11. ### Why should I not modify `package-lock.json`?
	- Because it will the remain the exact same version of the packages for our App. 
12. ### What is `node_modules` ? Is it a good idea to push that on git?
	- The node_modules folder contains libraries downloaded from npm. 
	- It's like a DB for our packages.
13. ### What is the `dist` folder?
	- The dist folder, short for distribution folder,its contain files to be deploy on production.  

14. ### What is `browserlists.
	- Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
