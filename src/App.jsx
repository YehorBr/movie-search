import { RouterProvider } from "react-router-dom";
import { routing } from "./router";



export const App = () => {
  return (
    <>
        <RouterProvider router={routing} />
    </>
  );
};
