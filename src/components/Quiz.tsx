// import { useState } from "react";
import '../styles/Quiz.css';

const Quiz = () => {
  // const [radioAns, setAnswer] = useState<string>("");

  return (
    <div className="quizContainer">
      <span className='color-dg' >Quizzes</span>
      <p className='color-dg' style={{
        fontWeight : "bolder",
        fontSize : "40px"
      }}>1 - Randoms Words</p>
      <p className='color-dg'>Meaning</p>

      <div className="radioControls">
      <input type="radio" name="radio" value="Option"/>
      <span className='color-dg'>Value</span>
      </div>

      <button className="lang" style={{marginTop : "10px", cursor : "pointer"}}>Next</button>
    </div>
  )
}

export default Quiz