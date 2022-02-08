import React from "react";

export default function Body(){
    function saySomething(){
        console.log('I was clicked')
    }

    function handleClick() {
        console.log("I was clicked!")
    }


    return(
        <div className="container">
            <form>
                <div className="inputHolder">
                    <input placeholder="Upper text" id="txtUpper"/>
                    <input placeholder="Lower text" id="txtLower"/>
                </div>
                <button onClick={handleClick()} type="button">Click me</button>
                {/*<button onClick={saySomething()} type="button">Get a new meme Image</button>*/}
            </form>

            <div className="imageContainer">
                <article>Hello</article>
                <article>Hi, i'm down here</article>
            </div>
        </div>
    )
}