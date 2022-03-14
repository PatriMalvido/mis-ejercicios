import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <div className='header'>
      <h1 className='header__img'> </h1>
      
      <nav className="header__menu">
        <ul>
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="/AboutFuturama" exact>
              About Futurama
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink className="header__menu-link" to="/Quiz" exact>
              ¿Cuánto sabes de Futurama?
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};
export default Header;
