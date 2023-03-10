## Assignment

1. ### What is a `Microservice` ?
   -  `Microservices` are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.
   -  Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
2. ### What is Monolith architecture?
   -  A `monolithic architecture` is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. The word “monolith” is often attributed to something large and glacial, which isn’t far from the truth of a monolith architecture for software design.
   -  A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface.
3. ### What is the difference between Monolithic and Microservices Architecture?

   -  With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

   -  With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

4. ### Why do we need a useEffect Hook?
   useEffect is a React Hook that lets you synchronize a component with an external system.
5. ### What is Optional Chaining?
   -  The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
   -  The optional chaining `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns `undefined`.
6. ### What is Shimmer UI?
   A `shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
7. ### What is Conditional Rendering?
   In React, we can create multiple components which encapsulate behavior that we need. After that, we can render them depending on some conditions or the state of our application. In other words, based on one or several conditions, a component decides which elements it will return.
8. ### What is CORS?
   `Cross-Origin Resource Sharing (CORS)` is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
9. ### What is async and await?
   The `async` function declaration declares an async function where the `await` keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
