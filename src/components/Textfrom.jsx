import React, { useState } from 'react'
import Button from './Button';

export default function Textfrom(props) {
    let count=0;

    const handleUpClick = ()=>{
       
        console.log("Clicked"+text)
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLowClick = ()=>{
       
        console.log("Clicked"+text)
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = ()=>{
       
        console.log("Clicked"+text)
        let newText ='';
        setText(newText);
        document.querySelector('#textAreain').value=''
        props.showAlert("Text cleared", "success")

    }
    const handleCopyClick = ()=>{
        var copyText = document.querySelector('#textArea')
        // copyText.focus();
        copyText.select();

        navigator.clipboard.writeText(copyText.value);

        props.showAlert("Text Copied!", "info")


    }

    const handleOnchange = (e)=>{
        // if(e.target.value === ' '){
        //     count++;
        // }
        setText(e.target.value)
        console.log(count)
    }

    const handleExSpaceClick = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra space has been removed!", "success")

    }
    
    const [text,setText] = useState('');
  return (
    <>
    <div className='container mx-3 'style={{color:props.mode==='dark'?'white':'#091417'}}>
        
        <div className="row mb-3">
        <div className="col">
        <h1 style={{height:"100px"}}>{props.heading}</h1>
                <textarea className="form-control" id="textAreain" rows="8"  onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#091417':'white',color:props.mode==='dark'?'white':'#091417'}}></textarea>
        </div>
        <div className="col">
        <h1 style={{height:"100px"}}>Preview</h1>
                <textarea className="form-control" id="textArea" rows="8"  value={text} style={{backgroundColor:props.mode==='dark'?'#091417':'white',color:props.mode==='dark'?'white':'#091417'}}></textarea>
        </div>
        </div>
        
       {/* <div className="row text-center mx-6 p-6">
        <div className="col p-1"> */}
        <Button onClick={handleUpClick} disabled={text.length===0}>
            <span>Uppercase</span>
        </Button>
        {/* </div>
        <div className="col p-1"> */}
        <Button onClick={handleLowClick} disabled={text.length===0}>
            <span>Lowercase</span>
        </Button>
        {/* </div>
        <div className="col p-1"> */}
        <Button onClick={handleClearClick} disabled={text.length===0}>
            <span>Clear Text</span>
        </Button>
       {/* </div>
       <div className="col p-1"> */}
        <Button onClick={handleCopyClick} disabled={text.length===0}>
            <span>Copy Text</span>
        </Button>
       {/* </div>
       <div className="col p-1"> */}
        <Button onClick={handleExSpaceClick} disabled={text.length===0}>
            <span>Remove Extra space</span>
        </Button>
       {/* </div>
       </div> */}
       
    </div>
    <div className="container my-3 mx-3" style={{color:props.mode==='dark'?'white':'#091417'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words && {text.length} characters</p>
        <p>Approximately {(1/125)*60*text.split(" ").filter((element)=>{return element.length!==0}).length} seconds is needed to read.</p>
    </div>
    </>
  )
}
