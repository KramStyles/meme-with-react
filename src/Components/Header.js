import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <div>
                <h1><i class="fab fa-pied-piper-alt"></i> Meme Generator</h1>
            </div>
            <div>
                <h3>React Course - Project 3</h3>
                {/* <Link to='/test'>Test</Link> */}
            </div>
        </header>
    )
}

export default Header