import { useSelector } from "react-redux";

const Result = () => {
  const {words, results} = useSelector((state : {rootReducer : StateType})  => state.rootReducer);

  return (
    <div className="resultContainer">
      <span>You got 5 out of 6 Right</span>

      <div className="resultBlock">
        <div className="words">
          <h4 style={{"textAlign" : "center"}} >Words</h4>
          {
            words.map((val) => (
              <p style={{textAlign: "center", padding : "5px"}}>{val.word}</p>
            ))
          }
        </div>

        <div className="results">
          <h4 style={{"textAlign" : "center"}} >Answer</h4>
          {
            results.map((val) => (
              <p style={{textAlign : "center", padding : "5px"}}>{val}</p>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Result