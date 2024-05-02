import { useRouteError } from "react-router-dom";

const Error = () => {
   const err = useRouteError();
   return (
      <div className="text-center p-4 bg-fuchsia-100">
         <h1>Something goes wrong</h1>
         <h2>{err.status + " " + err.statusText}</h2>
      </div>
   );
};

export default Error;
