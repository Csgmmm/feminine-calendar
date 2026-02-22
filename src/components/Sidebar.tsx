import { NavLink } from "react-router-dom"; //O React Router intercepta a navegação e troca apenas o componente que está no ecrã, sem recarregar
import "./styles/Sidebar.css"; //Importar o css do sidebar.tsx
import logo from "../assets/logo.svg"
import avatar from "../assets/avatar.svg"


const links = [
  //como quero ter links no meu menu, eu preciso de ir declarar o path de cada um. No caso, é um array de objects, sendo que cada um tem key e value
  { path: "/", label: "Home", icon: "fa-solid fa-house" },
  { path: "/calendar", label: "Calendar", icon: "fa-solid fa-calendar" },
  { path: "/register", label: "Register", icon: "fa-solid fa-plus" },
  { path: "/analyse", label: "Analyse", icon: "fa-solid fa-chart-line" },
  { path: "/profile", label: "Profile", icon: "fa-solid fa-user" },
];

function Sidebar() {
  return (
    <>
      <aside className="sidebar">{/* Tenho de criar um aside que é onde estará o meu menu */}
        <div className="logoContainer"> {/* Container para o logo e o nome do logo */}
            <span className="logo">
                <img src={logo} alt="logo" width="42" height="42" />
            </span>
            <span className="logoText">MyCycle</span>
        </div>

        <nav className="nav"> {/* Aqui abro um container nav*/} 
        {links.map((link) => ( //Dentro do universo JS, crio um map para que ele percorra cada link do array const links, e dê uma ação a cada item:
          <NavLink
            key={link.path} //Key: ID único para o React identificar cada link. Cada link tem o path dado
            to={link.path} //To: Rota para onde o link navega, ou seja, navegam todos entre si
            end={link.path === "/"} //Com end, o link "/" só fica ativo se a rota for exatamente "/", ou seja, se nao usar, e se estiver em "/about" → Home fica laranja e a bold 
            className={({ isActive }) => isActive ? "link active" : "link"} //Aqui, usei uma class boolean em que retorna: "A página está ativa?" então ativar o css .link.active senão, ativa o css .link 
          >
            <i className={link.icon} /> {/* Aqui dou a cada link o seu icon respetivo*/} 
            <span>{link.label}</span>{/* Aqui dou a cada link a sua label respetiva*/}
          </NavLink>
        ))}
      </nav>
      <div className="user"> {/* Container para o avatar e a info do user */}
        <div className="avatar">
            <img src={avatar} alt="logo" width="42" height="42" />
        </div>
        <div> {/* Sub-container para nome e o email */}
            <p className="userName">Carla</p>
            <p className="userEmail">carla@email.com</p>
        </div>
      </div>

      </aside>
    </>
  );
}

export default Sidebar;
