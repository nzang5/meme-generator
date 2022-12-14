import troll from "../images/Troll Face.png"

function Header(){


    return(
        <div className="header">
            <div className="header-logo">
                <img src={troll} alt="troll-face"></img>
                <h1>Meme Generator</h1>
            </div>
            

            <p className="header-project">React Course - Project 3</p>
        </div>
    )
}

export default Header;