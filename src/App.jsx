import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const welcomeMessage = "¡Bienvenido a GamingStore! Encuentra todos los videojuegos Aqui";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={welcomeMessage} />
    </>
  );
}

export default App;