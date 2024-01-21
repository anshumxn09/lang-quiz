import { FaArrowLeft } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { FaVolumeUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import '../styles/Learning.css';
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchAllWords } from "../utils/fetch.words";
import { useDispatch, useSelector } from "react-redux";
import { GetAllWordsError, GetAllWordsLoading, GetAllWordsSuccess } from "../reducers/slice";
import Loader from "./Loader";

const Learning = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(0);
  const params = useSearchParams()[0].get("lang") as LangType;
  const dispatch = useDispatch();
  const {loading, words} = useSelector((state : {rootReducer : StateType})  => state.rootReducer);

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
    dispatch(GetAllWordsLoading());
    
    // let wrongParams:string;

    if(params)

    console.log(typeof params);

    fetchAllWords(params).then((arr) => {
      console.log(arr);
      dispatch(GetAllWordsSuccess(arr));
    }).catch((err) => {
      console.log(err);
      dispatch(GetAllWordsError(err));
    })
  }, [dispatch, params]);
  
  // useEffect(() => {
  //   if(error) 
  // },[error])

  if(loading) return <Loader/>

  return (
    <div className="learningContainer">
      <div className="logoBlock">
      <GrLanguage />
      </div>
      <span className="fs-20" style={{
        color : "darkgreen"
      }}>{`\t\t`}Learning Made Easy</span>

      <div className="wordsBlock">
        <p className="fs-20">{count+1} - {words[count]?.word} : <span style={{
          color : "darkgreen",
          fontWeight: "bold",
          letterSpacing : "2px"
        }}>{words[count]?.meaning}<FaVolumeUp style={{marginBottom : "-5px", marginLeft : "3px" ,cursor : "pointer"}} /></span></p>
      </div>
      <div className="langControls">
      <span><button onClick={prevHandler} className="backBtn"> <FaArrowLeft style={{marginBottom : "-2px"}} /> </button> </span>
      <span><button onClick={nextHandler} className="backBtn"> <FaArrowRight style={{marginBottom : "-2px"}} /> </button> </span>
      </div>
    </div>
  )
}

export default Learning