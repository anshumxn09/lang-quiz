import { useDispatch, useSelector } from 'react-redux';
import '../styles/Quiz.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SaveResult } from '../reducers/slice';

const Quiz = () => {
  const  navigate = useNavigate();
  const {words} = useSelector((state : {rootReducer : StateType})  => state.rootReducer);
  const [radioAns, setAnswer] = useState<string>("");
  const [result, setResults] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();

  const nextHandler = () => {
    const radioVal = document.getElementById(`radio-${radioAns}`)! as HTMLInputElement;

    setResults((prev) => [...prev, radioAns === "" ? "Not Selected" : radioAns]);
    setCount((prev) => prev + 1);
    setAnswer("");

    if(radioVal) radioVal.checked = false;

  }

  useEffect(() => {
    if (count + 1 > words.length) navigate("/result");
    dispatch(SaveResult(result));
  }, [result]);

  if(!words || words.length === 0) navigate("/");

  return (
    <div className="quizContainer">
      <span className='color-dg' >Quizzes</span>
      <p className='color-dg' style={{
        fontWeight : "bolder",
        fontSize : "40px"
      }}>{count+1} - {words[count]?.meaning}</p>
      <p className='color-dg'>Meaning</p>

      <div className="radioControls">
      {
        count < words.length && words[count].options.map((i) => {
          return (
            <>
              <input type="radio" id={`radio-${i}`} name={"radio"} value={i} onChange={(e) => setAnswer(e.target.value)} />
              <span style={{
                fontSize : "20px"
              }} className='color-dg'>{i}</span> <br />
            </>
          )
        })
      }
      </div>

      <button onClick={nextHandler} className="lang" style={{marginTop : "10px", cursor : "pointer"}}>Next</button>
    </div>
  )
}

export default Quiz