import React, { useState, useRef } from 'react';
import leftIcon from '../assets/images/icons/left-align.png';
import rightIcon from '../assets/images/icons/right-align.png';
import centerIcon from '../assets/images/icons/center-align.png';

const TextEditor = () => {

    const [textValue, setTextValue] = useState('');
    const [alignment, setAlignment] = useState('');
    const divRef = useRef(null);

    const handleInput = () => {
        const newTextValue = divRef.current.innerText;
        setTextValue(newTextValue);
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

    const handleAlignment = (alignment) => {
        setAlignment(alignment);
    }

    return (
        <>
            <div className='text-editor'>
                <div className="header">
                    <button className='bold' onClick={handleBold}>B</button>
                    <button className="italic" onClick={handleItalic}>I</button>
                    <button className="underline" onClick={handleUnderline}>U</button>
                    <button className="text-left" onClick={()=>handleAlignment('left')}>
                        <img src={leftIcon} alt="" />
                    </button>
                    <button className="text-center" onClick={()=>handleAlignment('center')}>
                        <img src={centerIcon} alt="" />
                    </button>
                    <button className="text-right" onClick={()=>handleAlignment('right')}>
                        <img src={rightIcon} alt="" />
                    </button>
                </div>
                <div className="body">
                    <div className='text-area' ref={divRef} onBlur={handleInput}  style={{ textAlign: alignment }} contentEditable></div>
                </div>
            </div>
        </>
    );
}

export default TextEditor;