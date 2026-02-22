import Sidebar from "./Sidebar";
import "./styles/Layout.css"
// Se tens um ficheiro _document.tsx ou layout.tsx (Next.js)

interface LayoutProps {
  //Esta interface tem um nome de LayoutProps,
  children: React.ReactNode; // em que tem uma prop chamada children do tipo React.ReactNode.
}

const Layout = ({ children }: LayoutProps) => {
  // sempre que chamar o layout, ele contém uma children que é do tipo da interface, e que retorna sempre uma div que contém esse mesmo children
  return (
    <div className="wrapper"> 
      <Sidebar />
      <main className="main">{children}</main>
    </div>
    //Dentro desta div, temos a sidebar e a main, onde vai conter cada página.
    //Esta div terá um css associado para que seja uma sidebar à esquerda
    //A main terá um css associado para que esteja ao lado da sidebar.
  );
};

export default Layout;

//O Layout é um molde fixo — importa a Sidebar e o CSS, recebe children (as páginas),
// e retorna sempre a mesma estrutura:
// Sidebar à esquerda + conteúdo da página à direita.
//O {children} muda por page. <main>{children}</main> Mas a sidebar é fixa. (<Sidebar />)
