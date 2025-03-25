import { Link } from "react-router-dom"

function Startgame() {
    return(
        <>
            <div className="flex w-full h-screen p-3  bg-black  text-white">
                <div className="w-1/2 flex items-center justify-center">
                    <img src="src/assets/dices.png" alt="Loading" className="w-3/4 h-auto object-contain" />
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <h1 className="w-3/4 text-5xl">Try Your Luck </h1>
                    <Link to="playgame"  className="bg-white text-black text-2xl m-6 px-7 py-2 rounded-2xl  shadow-blue-400 hover:bg-black hover:text-white hover:shadow-lg "> Let's Play</Link>
                </div>
            </div>
        </>
    )
}

export default Startgame