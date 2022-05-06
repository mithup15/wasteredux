import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { change } from './userslice';

function Content(){
const [name,setName]=useState("");
console.log(name);
const  dispatch=useDispatch();  
    const handleSubmit =(event)=>{
        event.preventDefault();
        dispatch(change({name}));
        console.log(document.getElementById('name').value);
        
        //alert("Hey! Bot");
      
    }
    return(
        <div id="content">
        <form onSubmit={handleSubmit}>

               <input id='name' type="text" placeholder="ENTER YOUR NAME" onChange={(e) =>setName(e.target.value)}/><br/><br/>
         <button id="submit" type="submit" >submit</button>

         </form>
         </div>

    )
}
export default Content;