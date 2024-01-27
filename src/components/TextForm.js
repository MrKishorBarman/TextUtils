import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClear = () => {
        setText("")
        props.showAlert("Text cleared", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success")
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }

    return (
        <>
            <div
                className='container'
                style={{color: props.mode === "dark" ? 'white':'black'}}>
                <h1>
                    {props.heading}
                </h1>

                <div
                    className="mb-3">
                    <textarea
                        placeholder='Enter text here'
                        className="form-control"
                        id="myBox"
                        rows="9"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white':'black'}}>
                    </textarea>
                </div>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUpClick}>
                    Convert to Uppercase
                </button>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handleLowClick}>
                    Convert to Lowercase
                </button>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handleSpace}>
                    Remove Extra Spaces
                </button>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handleCopy}>
                    Copy Text
                </button>

                <button
                    className="btn btn-primary mx-1"
                    onClick={handleClear}>
                    Clear Text
                </button>
            </div>

            <div
                className="container my-3"
                style={{color: props.mode === "dark" ? 'white':'black'}}>

                <h2>
                    Your text summary
                </h2>

                <p>
                    {/* text.split(" ") provides an array */}
                    {text.split(" ").length} words and {text.length} characters
                </p>

                <p>
                    {/* from google 0.008/words */}
                    {0.008 * text.split(" ").length} Minutes read
                </p>

                <h2>Preview</h2>

                <p>{text.length>0 ? text:"Enter something in the Textbox above to preview it here"}</p>

            </div>

        </>
    )
}
