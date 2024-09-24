import PropTypes from 'prop-types';
import LogoUpload from '../../assets/icons/logo-small.svg';
import MoonIcon from '../../assets/icons/Moon_fill.svg';
import SunIcon from '../../assets/icons/Sun_fill.svg';
import './Header.css';

const Header = ({ setDarkMode, darkMode}) => {
  const handleToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <nav className='navbar'>
      <div className="container-logo">
        <img src={LogoUpload} alt="Image Upload" />
        <h3>ImageUpload</h3>
      </div>
      <button onClick={handleToggle} className={`btn-mode ${darkMode ? 'dark' : ''}`}>
        <img src={darkMode ? SunIcon :MoonIcon} alt='mode' />
      </button>
    </nav>
  );
};

Header.propTypes = {
  setDarkMode: PropTypes.func
};

export default Header;