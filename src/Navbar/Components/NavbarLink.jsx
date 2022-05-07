import { Link } from 'react-router-dom';
import {
  style,
  img,
  left,
  selectcity,
  search,
  mic,
  searchbutton,
  getbestprice,
  right,
  link,
  icons,
  additional,
} from './NavbarLink.style';
export const NavbarLink = () => {
  return (
    <nav style={style}>
      <Link to='/'>
        <img src='indiamart.jpeg' alt='logo' style={img} />
      </Link>
      <div style={left}>
        <select style={selectcity}>
          <option>All India</option>
          <option>Bilaspur</option>
          <option>Pune</option>
        </select>
        <input
          placeholder='Enter products/service to search'
          style={search}></input>
        <i className='fa-solid fa-microphone' style={mic}></i>
        <button style={searchbutton}>
          <i className='fa-solid fa-magnifying-glass'></i> Search
        </button>
      </div>
      <Link style={getbestprice} to='/getbestprice'>
        Get Best Price
      </Link>
      <div style={right}>
        <Link style={link} to='/imshpping'>
          <div style={{ margin: '0', padding: '0' }}>
            <i className='fa-solid fa-tags' style={icons}></i>
            <p style={additional}>IM Shopping</p>
          </div>
        </Link>
        <Link style={link} to='/covidsupplies'>
          <div>
            <i className='fa-solid fa-briefcase-medical' style={icons}></i>
            <p style={additional}>Covid Supplies</p>
          </div>
        </Link>
        <Link style={link} to='/sell'>
          <div>
            <i className='fa-solid fa-shop' style={icons}></i>
            <p style={additional}>Sell</p>
          </div>
        </Link>
        <Link style={link} to='/help'>
          <div>
            <i className='fa-solid fa-circle-question' style={icons}></i>
            <p style={additional}>Help</p>
          </div>
        </Link>
        <Link style={link} to='/messages'>
          <div>
            <i className='fa-solid fa-message' style={icons}></i>
            <p style={additional}>Messages</p>
          </div>
        </Link>
        <Link style={link} to='/login'>
          <div>
            <i className='fa-solid fa-user' style={icons}></i>
            <p style={additional}>Login</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
