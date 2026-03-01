import { Link, useLocation } from "react-router-dom"; //O React Router intercepta a navegação e troca apenas o componente que está no ecrã, sem recarregar
import "../sidebar/Sidebar.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import { House, CirclePlus, Calendar, ChartPie, CircleUserRound  } from "lucide-react";
import ProfileIcon  from "../icons/profileIcon";

function Sidebar() {
  const location = useLocation();
  return (
    <>
      <aside className="sidebar">
        <div className="logoContainer">
          <span className="logo">
            <Logo />
          </span>
          <span className="logoText">MyCycle</span>
        </div>

        <nav className="nav">
          <Link to={"/home"}>
            <Button
              variant="primary"
              isActive={location.pathname === "/home" ? true : false}
            >
              <House />
              <span>Home</span>
            </Button>
          </Link>

          <Link to={"/calendar"}>
            <Button
              variant="primary"
              isActive={location.pathname === "/calendar" ? true : false}
            ><Calendar />
              <span>Calendar</span>
            </Button>
          </Link>

          <Link to={"/register"}>
            <Button
              variant="primary"
              isActive={location.pathname === "/register" ? true : false}
            ><CirclePlus />
              <span>Register</span>
            </Button>
          </Link>

           <Link to={"/analyse"}>
            <Button
              variant="primary"
              isActive={location.pathname === "/analyse" ? true : false}
            ><ChartPie />
              <span>Analyse</span>
            </Button>
          </Link>


        </nav>
        <div className="user">
          {/* Container para o avatar e a info do user */}
          <div className="avatar">
            <Link to={"/profile"}>
            <button><ProfileIcon/></button>

          </Link>

          </div>
          <div>
            {/* Sub-container para nome e o email */}
            <p className="userName">Carla</p>
            <p className="userEmail">carla@email.com</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
