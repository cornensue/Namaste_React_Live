## Assignment

1. ### What is the difference between `Name` export, `Default` export adn `* as` export?
   -  `named exports` are used to export multiple values. During the import, it will be possible to use the same name to refer to the exported value.
   -  `Default exports` are used to export a single value from the file. During the import, the name of the value can be different from the exported one.
   -  `* as export` a module can export dozens of functions at one, like an object.
2. ### What is the importance of config.js file?
   To have fixed data in a single file, and make calls to that data to a single place. For example, we can define our variables that are constants in that file, a call to an API.
3. ### What are React Hooks?
   React Hooks are simple JavaScript functions that we can use to isolate the reusable part of a functional component.
4. ### Why do we need a `useState()` Hook?
   -  It is used to create local state variables and returns an array; where the first element is the local variable, and the second element is the function with which we can update our variable or state.
   -  The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application
