export default function Start() {
    return (
        <div className="startComponent">
            <div 
            className="congratsImg"
            style={{backgroundImage: `url("/congrats.png")`}}
            ></div>

            <h2 className="font1">Congrats! You completed <br />the quiz</h2>
            <span className="font3">You answer na/10 correctly</span>
            <button className="playAgainBtn font3">Play again</button>
        </div>
    )
}