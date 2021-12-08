import React from 'react'

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="Img/img6.jpg"/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" id="textInput" placeholder="Title" className="writeInput" autoFocus="true" />
                </div>
                <div className="writeFormGroup">
                <div className="writeForm">
                    <textarea placeholder="Write your story..." type="text" className="writeInput writeText">

                    </textarea>
                </div>
                </div>
                <button className="writeSubmit" type="submit">Post</button>
            </form>
        </div>
    )
}
