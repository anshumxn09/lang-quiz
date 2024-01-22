import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const wrongRight = (words:WordType[], result:string[]): number[] => {
    let correctAns:number = 0;

    result.forEach((val:string, i:number) => {
        if(words[i].word === val){
          correctAns += 1;
          console.log(correctAns, val);
        }
    })

    return [correctAns, (correctAns / result.length) * 100];
}

const Result = () => {
  const navigate = useNavigate();
  const {words, results} = useSelector((state : {rootReducer : StateType})  => state.rootReducer);
  const [stats, setStats] = useState({rightAns : 0, percentage : 0});

  useEffect(() => {
    const [rightAns, percentage] = wrongRight(words, results);
    setStats({rightAns, percentage});
    console.log(rightAns, percentage);
  }, [words, results]);

  useEffect(() => {
    const val = localStorage.getItem("result-loadding");
    console.log(val);

    if(!val){
      localStorage.setItem("result-loadding", "1");
    }else{
      localStorage.removeItem("result-loadding");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="resultContainer">
      <p className="highlight" style={{"textAlign" : "center"}}>You got <span className="bold">{stats.rightAns}</span> out of <span className="bold">{results.length}</span> Correct</p>

      <div className="resultBlock">
        <div className="words">
          <h4 style={{"textAlign" : "center"}} >Words</h4>
          {
            words.map((val) => (
              <p style={{textAlign: "center", padding : "5px"}}>{val.meaning}</p>
            ))
          }
        </div>

        <div className="results">
          <h4 style={{"textAlign" : "center"}} >Answer</h4>
          {
            results.map((val, i) => {
              let color;
              if(val === "Not Selected") color = "yellow";
              else if(val === words[i].word) color = "green";
              else color = "red";

              return <p style={{textAlign : "center", padding : "5px", color, fontWeight : color === "yellow" ? "bold" : ""}}>{val} {color === "red" ? `(${words[i].word})` : ""}</p>
            })
          }
        </div>
      </div>

      <p className="highlight" style={{"textAlign" : "center"}}  >Percentage : <span className="bold" style={{color : "darkgreen"}}>{stats.percentage}%</span> {stats.percentage >= 35 ? <span className="green">(Pass)</span> : <span className="red">(Fail)</span>}</p>

      <div className="statsColor">
        <p><span className="correct">AA</span> - Correct</p>
        <p><span className="wrong">AA</span> - Wrong</p>
        <p ><span className="notSelected">AA</span> - Not Selected</p>
      </div>
    </div>
  )
}

export default Result