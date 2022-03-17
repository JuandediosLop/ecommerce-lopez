import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../img/caja-de-carton.png'
const NavBar = () => {
  return (
    <>
      <header>
        <a className='brand' href="index.html"> <img src={logo} alt="Logo" className='logo' /></a>
        <nav>
          <a href="index.html">Inicio</a>
          <a href="index.html">Hombres</a>
          <a href="index.html">Mujeres</a>
          <a href="index.html">Niños</a> 
          <a href="index.html"> <ShoppingCartIcon sx={{ fontSize: 20 }}  /></a>
        </nav>
      </header>  
    </>
  );
};
export default NavBar;
