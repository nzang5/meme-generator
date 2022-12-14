import data from './memesData'
import React from 'react'

// console.log(data.data.memes[0])
//Random number: Math.floor(Math.random() * max)

function Meme(){

    const [ memeImage, setMemeImage ] = React.useState("")


    function generateMeme(){
        const memeArray = data.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length)
        const imageUrl = memeArray[randomIndex].url
        // console.log(imageUrl)
        setMemeImage(imageUrl)

    }


    return(
        <main>
            <div className="form">
                <div className='inputs'>
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                </div>
                <button
                    onClick={generateMeme}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <img src={memeImage} className="meme--image" alt="meme"></img>
        </main>
    )
}
export default Meme;