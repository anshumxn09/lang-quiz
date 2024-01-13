import { useNavigate } from 'react-router-dom';
import './../styles/Header.css';
import { LuBird } from "react-icons/lu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerContainer">
        <div className="appTitleContainer">
        <LuBird style={{fontSize : "25px", marginBottom : "-5px"}} /> 
        <span onClick={() => navigate('/')} className="appTitle">Learningo</span>
        </div>

        <div className="appControls">
            <span className="homeTitle ml-5">Home</span>
            <span className='ml-5'>Login</span>
        </div>
    </div>
  )
}

export default Header;