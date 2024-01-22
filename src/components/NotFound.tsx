import { FaEarlybirds } from "react-icons/fa";

const NotFound = () => {
  return (
    <div style={{display : "flex", justifyContent :"center", alignItems : "center", flexDirection : "column", marginTop : "30px"}}>
        <FaEarlybirds style={{fontSize : "200px", color : "lime"}} />
        <span style={{color : "lime", fontWeight : "bold", fontSize: "30px", letterSpacing : "3px"}}>Oops</span>
    </div>
  )
}

export default NotFound;