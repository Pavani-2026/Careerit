import api from "./api/api";
import { useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
const App=()=>{
  const ref1=useRef(null);
  const ref2=useRef(null);
  const ref3=useRef(null);
  const dispatch=useDispatch()
  const post_ex=()=>{
    dispatch(api({"userId":parseInt(ref1.current.value),
      "title":ref2.current.value,
      "body":ref3.current.value
    }))
  };
  const res=useSelector(state=>state)
  return(
    <>
    <fieldset>
      <legend>POST_EX</legend>
      <input type="number" ref={ref1} placeholder="enter userId"></input>
      <br></br><br></br>
      <input type="text" ref={ref2} placeholder="enter title"></input>
      <br></br><br></br>
      <input type="text" ref={ref3} placeholder="enter body"></input>
      <br></br><br></br>
      <button onClick={post_ex}>postEx</button>
    </fieldset>
    </>
  )
}
export default App;