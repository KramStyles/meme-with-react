import React, {useState} from 'react'
import memesdata from "../memesdata";

export default function Body(){
    const [btmText, setBtmText] = useState('Hi, i\'m down here');

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

    const changeBtmTxt = (e) => {
        e.target.value ? setBtmText(e.target.value) : setBtmText('Hi I\'m down here');
    }


    return(
        <div className="container">
            <form>
                <div className="inputHolder">
                    <input placeholder="Provide Upper Text" id="txtUpper"/>
                    <input placeholder="Provide Lower Text" id="txtLower" onChange={changeBtmTxt}/>
                </div>
                <button onClick={handleClick} type="button">Click me</button>
            </form>

            <div className="imageContainer">
                <article id="txtTop">Hello</article>
                <article id="txtBottom">{btmText}</article>
            </div>
        </div>
    )
}