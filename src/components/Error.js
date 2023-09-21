import { useRouteError } from "react-router-dom";

const Error = () => {
   const err = useRouteError();
   return (
      <>
         <h1>No vengas por aqui, porque eso no existe</h1>
         <h2>Something goes wrong</h2>
         <h2>{err.status + " " + err.statusText}</h2>
      </>
   );
};

export default Error;
