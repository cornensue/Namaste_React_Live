import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

// dynamic import con lazy, si el componente pesa mucho.
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <About />,
            children: [
               {
                  path: "profile",
                  element: <Profile />,
               },
            ],
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/restaurant/:id",
            element: <RestaurantMenu />,
         },
         {
            path: "/instamart",
            element: (
               <Suspense fallback=<Shimmer />>
                  <Instamart />
               </Suspense>
            ),
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
