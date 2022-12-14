import React from "react";
import {connect } from 'react-redux';
import {def,ghi} from "../store/actions"


function Todolist(props){
    const[newtask, setNewtask] = React.useState('')

    function abc(){
        props.dispatch(def(newtask))
    }
    function deletetask(i){
        props.dispatch(ghi(i))
    }
  
     return <div className="abc">

         <h1>todo list practise</h1>
            <input type ='text' onChange={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={abc}>addtask</button>
            {
            props.todos.todos.map((t,i)=>{
                return(
                <li key={i}>
                    {t} <button onClick={()=>deletetask(i)}>del</button> 
                </li>)
            })
        }
        </div>       
     
}
export default connect(store=>store) (Todolist)

