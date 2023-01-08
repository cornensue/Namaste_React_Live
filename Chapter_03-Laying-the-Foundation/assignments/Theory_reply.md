# Topics
- JSX
- React.createElement vs JSX
- Benefits for JSX
- Behind the Scenes of JSX
- Babel & Parcel role in JSX 
- Components 
- Function Components 
	- Composing Components
## Assignment
1. ### What is JSX?
	JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.
2. ### Superpowers of JSX
	- JSX is stricter and has a few more rules than HTML.
	- React components group rendering logic together with markup because they are related.
	- JSX is similar to HTML, with a few differences. You can use a converter if you need to.
	- Error messages will often point you in the right direction to fixing your markup.
	- JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.
3. ### Role of `type` attribute in script tag? What options can I use there?
	- This attribute indicates the type of script represented by the element. 
	- It can use these options: text/javascript (this is default), module, importmap or data block. 

4. ### `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent><TitleComponent/>}` in JSX.
	- {TitleComponent}: renders a react element. 
	- {<TitleComponent/>}: renders a react function component. 
	- {<TitleComponent><TitleComponent/>}: it's a function components and inside we can have another componets. For example: 
		{<TitleComponent>
			<Header />
			<HeroSection />
		<TitleComponent/>}