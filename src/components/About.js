import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    
    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    return (
        <div className="container" style={myStyle}>
            <h1>About Us </h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyze your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
