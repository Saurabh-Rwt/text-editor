import React, { useState, useRef } from 'react';
import leftIcon from '../assets/images/icons/left-align.png';
import rightIcon from '../assets/images/icons/right-align.png';
import centerIcon from '../assets/images/icons/center-align.png';

const TextEditor = () => {

    const [textValue, setTextValue] = useState('');
    const divRef = useRef(null);
    const handleInput = () => {
        const newTextValue = divRef.current.innerText;
        setTextValue(newTextValue);
        // console.log(newTextValue);
    }

    const handleBold = () => {
        const selectedTxt = window.getSelection().toString();
        const boldText = `<b>${selectedTxt}</b>`;
        const newText = textValue.replace(selectedTxt, boldText);
        divRef.current.innerHTML = newText;
    }

    const handleItalic = () => {
        const selectedTxt = window.getSelection().toString();
        const newText = textValue.replace(selectedTxt, `<em>${selectedTxt}</em>`);
        divRef.current.innerHTML = newText;
    }    

    const handleUnderline = () => {
        const selectedTxt = window.getSelection().toString();
        const newText = textValue.replace(selectedTxt, `<u>${selectedTxt}</u>`);
        divRef.current.innerHTML = newText;
    }    

    const handleLeft = () => {
        const currentTxt = divRef.current;
        currentTxt.style.textAlign = 'left';
    }

    const handleCenter = () => {
        const currentTxt = divRef.current;
        currentTxt.style.textAlign = 'center';
    }

    const handleRight = () => {
        const currentTxt = divRef.current;
        currentTxt.style.textAlign = 'right';
    }

    return (
        <>
            <div className='text-editor'>
                <div className="header">
                    <button className='bold' onClick={handleBold}>B</button>
                    <button className="italic" onClick={handleItalic}>I</button>
                    <button className="underline" onClick={handleUnderline}>U</button>
                    <button className="text-left" onClick={handleLeft}>
                        <img src={leftIcon} alt="" />
                    </button>
                    <button className="text-center" onClick={handleCenter}>
                        <img src={centerIcon} alt="" />
                    </button>
                    <button className="text-right" onClick={handleRight}>
                        <img src={rightIcon} alt="" />
                    </button>
                </div>
                <div className="body">
                    <div className='text-area' ref={divRef} onBlur={handleInput} contentEditable></div>
                </div>
            </div>
        </>
    );
}

export default TextEditor;