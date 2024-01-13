// import { languages } from "../constants/data"
import { GiBirdClaw } from "react-icons/gi";
import './../styles/Home.css';
import { languages } from "../constants/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const languagesHandler = (lang : string):void => {
    navigate(`/learning?lang=${lang}`)
  }
  return (
    <div className="homeContainer">
        <p style={{fontSize : "17px", fontWeight : "bold"}} className="welcomeMsg">Welcome To Learningo <GiBirdClaw  style={{fontSize : "25px", marginBottom : "-8px"}}  /></p>

        <div className="languagesBlock">
          {
            languages.map((lang) => {
              return <div>
                <button style={{
                  cursor : "pointer"
                }} onClick={() => languagesHandler(lang.code)} key={lang.code} className="lang">
                {lang.name}
              </button>
              </div>
            })
          }
        </div>

        <span className="randomMsg">Select the above languages to start your learning journey</span>
    </div>
  )
}

export default Home