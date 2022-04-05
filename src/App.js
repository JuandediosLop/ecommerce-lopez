import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  const links = [
    { name: "Inicio", tag: "index.html", id: 1 },
    { name: "Hombres", tag: "hombres.html", id: 2 },
    { name: "Mujeres", tag: "mujeres.html", id: 3 },
    { name: "Niños", tag: "ninios.html", id: 4 },
  ];

  const saludo = "Hola mi segunda entrega de React";

  return (
    <>
      <NavBar links={links}></NavBar>
      <ItemListContainer greeting={saludo}></ItemListContainer>
    </>
  );
}

export default App;
