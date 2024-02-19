import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import { Provider } from "react-redux";
import store from "./utils/redux/appStore";
import Home from './Pages/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    
  );
}

export default App;
