import { FaArrowLeft } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { FaVolumeUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import '../styles/Learning.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllWords } from "../utils/fetch.words";

const Learning = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);

  const prevHandler = () => {
    if(count === 0) {
      navigate('/');
      return;
    }

    setCount((prev) => prev - 1);
  }

  const nextHandler = () => {
    if(count === 7){
      navigate('/quiz');
      return;
    }

    setCount((prev) => prev + 1);
  }
  
  useEffect(() => {
    fetchAllWords("hi").then(() => {
      console.log("worked");
    })
  }, []);
  
  return (
    <div className="learningContainer">
      <div className="logoBlock">
      <GrLanguage />
      </div>
      <span className="fs-20" style={{
        color : "darkgreen"
      }}>{`\t\t`}Learning Made Easy</span>

      <div className="wordsBlock">
        <p className="fs-20">{count+1} - Sample : <span style={{
          color : "darkgreen",
          fontWeight: "bold",
          letterSpacing : "2px"
        }}>Meaning <FaVolumeUp style={{marginBottom : "-5px", cursor : "pointer"}} /></span></p>
      </div>
      <div className="langControls">
      <span><button onClick={prevHandler} className="backBtn"> <FaArrowLeft style={{marginBottom : "-2px"}} /> </button> </span>
      <span><button onClick={nextHandler} className="backBtn"> <FaArrowRight style={{marginBottom : "-2px"}} /> </button> </span>
      </div>
    </div>
  )
}

export default Learning