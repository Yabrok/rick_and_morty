import { Link, NavLink } from "react-router-dom"
import Logo from '../../assets/images/RM.png'


export const Header = () => {

  return (
    <header className="bg-dark py-2">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link to='/'>
            <img src={Logo} alt='logo' width='250px' />
          </Link>

          <nav className="ms-auto">
            <ul className="d-flex align-items-center list-unstyled m-0 gap-4">
              <li>
                <NavLink className={({ isActive }) => 
                isActive ? 'text-white fw-bold' : 'text-white fw-bold text-decoration-none'} 
                to='/'>
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink 
                className={({ isActive }) => 
                isActive ? 'text-white fw-bold': 'text-white fw-bold text-decoration-none'} 
                to='/episode'>
                  Episode
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => 
                isActive ? 'text-white fw-bold' : 'text-white fw-bold text-decoration-none'} 
                to='/location'>
                  Location
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}