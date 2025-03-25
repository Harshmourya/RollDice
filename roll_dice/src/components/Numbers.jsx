import { useDice } from "./ContextDice";

function Numbers() {
    const { imgsArray, numberSelect, setNumberSelect } = useDice();

    return (
        <div className="flex gap-3 p-4 bg-white/20 backdrop-blur-lg rounded-xl shadow-md">
            {imgsArray.map((img, ind) => (
                <img 
                    key={ind}
                    onClick={() => setNumberSelect(ind + 1)}
                    src={`src/assets/dices/${img}`}
                    alt="Dice"
                    className={`w-12 h-12 cursor-pointer transition-transform transform hover:scale-110 rounded-lg shadow-md ${
                        ind + 1 === numberSelect ? "border-2 border-cyan-400 shadow-lg scale-110" : "opacity-75"
                    }`}
                />
            ))}
        </div>
    );
}

export default Numbers;
