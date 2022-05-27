import React from 'react'
import memesdata from "../memesdata";

export default function Body(){
    function handleClick() {
        const memes = memesdata.data.memes;
        const randNum = Math.floor(Math.random() * memes.length);
        const url = memes[randNum]['url'];
        const {name} = memes[randNum];

        let upper = document.getElementById('txtUpper').value.trim();
        let lower = document.getElementById('txtLower').value.trim();
        if(upper === '') upper = name;
        if(lower === '') lower = name;

        document.getElementsByClassName('imageContainer')[0].style.backgroundImage = `url(${url})`;
        document.getElementById('txtTop').textContent = upper;
        document.getElementById('txtBottom').textContent = lower;
    }


    return(
        <div className="container">
            <form>
                <div className="inputHolder">
                    <input placeholder="Provide Upper Text" id="txtUpper"/>
                    <input placeholder="Provide Lower Text" id="txtLower"/>
                </div>
                <button onClick={handleClick} type="button">Click me</button>
                {/*<button onClick={saySomething()} type="button">Get a new meme Image</button>*/}
            </form>

            <div className="imageContainer">
                <article id="txtTop">Hello</article>
                <article id="txtBottom">Hi, i'm down here</article>
            </div>
        </div>
    )
}