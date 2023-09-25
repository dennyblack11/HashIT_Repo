import {RouterProvider} from "react-router-dom";
import { MainRouter } from "./Router/MainRoute";

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRouter}/>
    </div>
  );
}

export default App;
