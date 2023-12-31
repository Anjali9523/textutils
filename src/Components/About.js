//import React,{useState} from 'react'
import React
 from "react"
export default function About(props) {
    // const [myStyle, setmyStyle] = useState ({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#232151',
        backgroundColor: props.mode === 'dark'? 'rgb(62 59 144)' : 'white',
       
    }

    //const [btntext, setbtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable light Mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable dark Mode")
    //     }
    // }
  return (
    <div className='container'>
        <h1 className='my-3' style = {{color: props.mode === 'dark' ? 'white' : '#232151'}}>About us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong>Analyze Your text</strong> 
                    </button>
                </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                   Textutils is a free character counter tool that provides instant character count and word count statistics for a given 
                   text. Textutils reports the number of words and character. Thus it is suitable for writing text with word/ character limit.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                  This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It 
                  suits to count characters in facebool, blog, books, excel document, pdf document, essays, etc.
               </div>
            </div>
        </div>
    </div>
    {/* <div className="container my-3">
    <button onClick = {toggleStyle} type = "button" className = "btn btn-primary ">{btntext}</button>
    </div> */}
    </div>
  )
}
