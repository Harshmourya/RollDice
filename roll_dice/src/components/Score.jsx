import { useDice } from "./ContextDice";

function Score() {
    const { score } = useDice();
    return ( 
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 rounded-xl shadow-lg w-64 text-center">
            <h2 className="text-4xl font-bold">{score}</h2>
            <h4 className="text-lg font-medium">Total Score</h4>
        </div>
    );
}

export default Score;
