import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      background: '#333', 
      padding: '1rem', 
      marginBottom: '2rem' 
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem', 
        justifyContent: 'center', 
        margin: 0, 
        padding: 0 
      }}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ 
              color: isActive ? '#4CAF50' : 'white', 
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({ 
              color: isActive ? '#4CAF50' : 'white', 
              textDecoration: 'none' 
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            style={({ isActive }) => ({ 
              color: isActive ? '#4CAF50' : 'white', 
              textDecoration: 'none' 
            })}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            style={({ isActive }) => ({ 
              color: isActive ? '#4CAF50' : 'white', 
              textDecoration: 'none' 
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;