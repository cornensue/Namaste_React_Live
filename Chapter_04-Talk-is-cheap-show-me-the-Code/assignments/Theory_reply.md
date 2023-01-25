## Assignment
1. ### Is JSX mandatory for React?
	No, it is not mandatory, we can create react apps using React.CreateElement. But JSX, always will make our code experience good. 
2. ### Is ES6 mandatory for React?
	No, we can still use the old JS concepts inside react. 
3. ### How can I write comments in JSX?
	In JSX, we can write comments inside braces, like this: 
	`{ // one line comment }`

		`{
			/* multi
				line 
				comments
			*/	
		}` 
4. ### What is <React.Fragment></React.Fragment> and <></>?
	- `<React.Fragment></React.Fragment>` is a syntax, to group multiple elements together. 
	- You can use it to put multiple elements in any place where a single element can go.
	- A component can only return one element, but by using a Fragment you can group multiple elements together and then return them as a group.
	- `<>...</>` is shorthand for `<Fragment></Fragment>`. i
5. ### What is the Virtual DOM?
	- Virtual DOM is a representation of the actual DOM. 
6. ### What is Reconciliation in React?
	The algorithm React uses to diff one tree with another to determine which parts need to be changed.
7. ### What is Reat Fiber?
	- React Fiber is simply a reimplementation of React’s core reconciliation algorithm. It can be said to be the reimplementation of the stack but specialized for react components(where the stack can be interrupted at will and stack frames manipulated manually). 
	- It has been the default reconciler since React 16.
	- The primary goal of the React Fiber reconciliation algorithm is to enable React to take advantage of scheduling(which was not possible with the previous stack reconciler). React is now able to:
		. 	Pause work and come back to it later.
		. 	Split work into chunks and prioritize tasks
		. 	Reuse previously completed work.
		.	Abort work if it’s no longer needed
	8. ### Why we need keys in React? When do we need keys in React?
		- We need the keys so that react knows exactly which component needs to be rerendered, and it is important that the keys to be unique.
		- Keys are needed when we have a list of elements or components, which have to be rendered at the same time, using a map loop, for example. 
		So, when you are going to render each element or component has a unique key.




