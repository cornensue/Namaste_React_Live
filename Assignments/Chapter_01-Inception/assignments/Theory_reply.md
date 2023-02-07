1. **What is Emmet?**
	Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time.

2. **Difference between a Library and Framework?**
	Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
	The technical difference between a framework and library lies in a term called inversion of control.

	When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

3.	**What is CDN? Why do we use it?**
	- A **Content Delivery Network (CDN)** refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
	- The mission of a CDN is to reduce latency. Latency is that annoying delay you experience when trying to access a web page or video stream before it fully loads on your device. Although measured in milliseconds, it can feel like forever, and may even result in a load error or time-out.


4. **Why is React known as React?**
	React is named React because of its ability to react to changes in data. When the data in a React component changes, React will automatically re-render the component so that it reflects the new data. This makes it easy to create performant user interfaces that always look up-to-date.

5. **What is crossorigin in script tag?**
	The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

6. **What is diference between React and ReactDOM**
	In order to work with React in the browsers, we need to include 2 libraries: React and ReactDOM. React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

7. **What is difference between react.development.js and react.production.js files via CDN?**
	The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds. The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

8. **What is async and defer?**
	**async** - The browser will download the script file and continue parsing HTML parallelly until the file is downloaded. The file is executed as soon as it is downloaded.

	**defer** -The browser will download the script and do HTML parsing at the same time. After parsing is done, the script files are executed in the order of their occurrence.