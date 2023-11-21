import './App.css'
import { BrowserRouter, useRoutes } from "react-router-dom";
import Nav from './Components/Nav';
import ModayAccsesorios from './Pages/ModayAccsesorios';
import PerfumeyBelleza from './Pages/PerfumeyBelleza';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registro from './Pages/Registro';

function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home/> },
      { path: "/ModaAccesorios", element: <ModayAccsesorios/> },
      { path: "/PerfumeBelleza", element: <PerfumeyBelleza/> },
      { path: "/Login", element: <Login/> },
      { path: "/Registro", element: <Registro/> },
      // { path: "/UsersPage", element: <h1>Esta es mi pagina de usuarios</h1> },
    ]);
    return routes;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
