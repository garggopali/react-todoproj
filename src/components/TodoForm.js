import React, {useState,useEffect,useRef} from 'react';
import './TodoCss.css';

function TodoForm(props) {
  const [input,setInput] =useState(props.edit ? props.edit.value : '');

  const inputRef=useRef(null);
   useEffect(() => {
inputRef.current.focus();
    });
  
  // 1 add items to the list
  // 2 delete items from the list
  // add items in the list, tere is 2 methods - 1st handleinput mathod and 2nd handlesubmit methos
const handleInput =e => {
    setInput(e.target.value);
  };

  // 2nd method handlesubmit method
  const handleSubmit = e => {
    e.preventDefault();  // when button clicked then stop page load
    
    props.onSubmit({
     // id:Date.now(),
     id:Math.floor(Math.random() * 10000),
      text:input
    });
    setInput('');
  };
  
  return (
    <form id="to-do-form" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input 
          type="text" 
          placeholder='Update item'
          value={input}
          onChange={handleInput}
          ref={inputRef}
          />
          <button type="submit">Update</button> 
            </>
        ) : 
        (
            <>
            <input 
          type="text" 
          placeholder="Enter item"
          value={input}
          onChange={handleInput}
          ref={inputRef}
          /> 
          <button type="submit">Add</button> 
          </>
        )}
          </form>     
      )
    }
    
    export default TodoForm;