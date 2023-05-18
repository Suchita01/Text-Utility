import React, {useState} from 'react'

export default function TextForm(props) {
    //convert to uppercase
        const handleUpClick = () =>{
        //console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    //convert to lowercase
    const handleLoClick = () =>{
        //console.log("Uppercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    //all text clear action
    const handleClearClick = () =>{
        let newText ='';
        setText(newText);
        props.showAlert("Cleared text","success");
    }

   //copied to clipboard action
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        console.log("Copied to clipboard");
        alert("Text Copied");
        props.showAlert("Copied to Clipboard","success");
     }

     //remove extra spaces
     const handleExtraSpaces = () =>{
        let newText = text.split(/[  ] + /);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success");

     }

    //copy text 
    const handleCopy = () =>{
         navigator.clipboard.writeText(text);
         document.getSelection().removeAllRanges();
         props.showAlert("Text Copied","success");
        }

    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    //text="new text"; //wrong way to change the state
    //setText("new text")//correct way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
   <h3 className='mb-4'>{props.heading}</h3>
    <div className="mb-3">
    <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
    <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
    
    </div>

    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h4>Your text summary</h4>
        <p>{text.split(/\s+/).filter((element) =>{return element.length!== 0}).length} words | {text.length} characters | {text.split(/\r\n|\r|\n/).filter((element) =>{return element.length!== 0}).length} lines count</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!== 0}).length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
} 
