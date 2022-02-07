import React from "react";

export default function Body(){
    return(
        <div className="container">
            <form>
                <div className="inputHolder">
                    <input placeholder="Upper text" id="txtUpper"/>
                    <input placeholder="Lower text" id="txtLower"/>
                </div>
                <button>Get a new meme Image</button>
            </form>
        </div>
    )
}