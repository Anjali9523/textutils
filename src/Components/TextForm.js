import React, {useState} from 'react'


export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    if(newText.length > 0)
    {
      props.showAlert("Converted to UpperCase!", "success");
    }
    else{
      props.showAlert("Please enter some text!", "warning");
    }
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    if(newText.length > 0)
    {
      props.showAlert("Converted to LowerCase!", "success");
    }
    else{
      props.showAlert("Please enter some text!", "warning");
    }
  }

  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    if(newText.length === 0)
    {
      props.showAlert("Text Cleared!", "success");
    }
    else{
      props.showAlert("Please enter some text!", "warning");
    }
  }

  const handlesenClick = ()=>{
    let newText = text.toLowerCase();
    // let newText = text[0].toUpperCase() + text.substring(1,text.length);
    setText(newText.charAt(0).toUpperCase() + newText.slice(1));
    if(newText.length > 0)
    {
      props.showAlert("Converted to SentenceCase!", "success");
    }
    else{
      props.showAlert("Please enter some text!", "warning");
    }
  }

  const handleinvClick = ()=>{
    let newText = text[0].toLowerCase() + text.substring(1,text.length).toUpperCase();
    setText(newText);
    if(newText.length > 0)
    {
      props.showAlert("Converted to InverseCase!", "success");
    }
    else{
      props.showAlert("Please enter some text!", "warning");
    }
  }

  const handleCopy = ()=> {
   
    navigator.clipboard.writeText(text);
    
    props.showAlert("Text Copied!", "success");
    
  }

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    if(newText.length > 0)
    {
      props.showAlert("Extra space removed!", "success");
    }
    else{
      props.showAlert("Please enter some text!", "warning");
    }
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text = "new text";  //wrong way to change the state
 // setText("new text");  //Correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#232151'}}>
        <h1 className='mb-2'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? '#2a3874' : 'white', color: props.mode === 'dark' ? 'white' : '#232151' }} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleLoClick}>Convert to Lowercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleClearClick}>Clear Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handlesenClick}>Sentence Case Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleinvClick}>Inverse Case</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}>Handle Extra Spaces</button>
        
    </div>
    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#232151'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
