import {useState} from 'react'

export default function Textform(props) {
  const handleonclick=()=>{
    // console.log("UpperCase was clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!", "success");
  }

  const handleonlowercase=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!", "success");
  }

  const handlecleartext=()=>{
    setText('');
    props.showAlert("TextCleared!", "success");
  }

  const handleonchange=(event)=>{
   
    setText(event.target.value);
  }

  const handleOnSpaces=()=>{
       let newtext=text.split(/[ ]+/);
       setText(newtext.join(" "));
       props.showAlert("Extra Spaces Removed!", "success");
  }

  const handleOnCopy=()=>{
   
    navigator.clipboard.writeText(text);
    
    props.showAlert("Copied to ClipBoard!", "success");
  }
  const [text,setText]=useState(''); 
  return (
    <>
     <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
     <h2>{props.heading}</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
        <textarea className="form-control " onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#013762':'white',color: props.mode==='dark'?'white':'black'}}  id="my-box" value={text} rows="8"></textarea>
     </div><br></br>
         <button disabled ={text.length===0} className="btn btn-primary" onClick={handleonclick}>Convert To UpperCase</button>
         <button disabled ={text.length===0} className="btn btn-primary" onClick={handleonlowercase}>Convert To LowerCase</button>
         <button disabled ={text.length===0} className="btn btn-primary" onClick={handlecleartext}>Clear Text</button>
         <button disabled ={text.length===0} className="btn btn-primary" onClick={handleOnCopy}>Copy Text</button>
         <button disabled ={text.length===0} className="btn btn-primary" onClick={handleOnSpaces}>Remove Extra Space</button>
    </div>
     <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p> Words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Characters {text.length}</p>
      <p> Minutes Read {0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} </p>
      <h2>Preview</h2>
       <p>{text.length>0?text:"enter something above to preview here"}</p>
     </div>
  

    </>
  )
}
