import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import MainCantainer from "./components/MainCantainer"
import { Provider } from "react-redux";
import store from "./utlis/store";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
    {
      path: "/",
      element: <MainCantainer />,
    }, 
    {
      path: "Watch",
      element: <WatchPage />
    }
  ]
  }]);

const App = () => {
  return(
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router = {appRouter} />
    </div>
    </Provider>
  )
}

export default App;
