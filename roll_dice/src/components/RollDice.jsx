import { useDice } from "./ContextDice";

function RollDice() {
  const { imgsArray, rollDice, currentDiceVal, resetAll  , setIsRuleOpen} = useDice();

  return (
    <>
    <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-s p-6 rounded-xl shadow-lg w-72">
      <img
        src={`src/assets/dices/${imgsArray[currentDiceVal - 1]}`}
        onClick={rollDice}
        className="w-32 h-32 cursor-pointer transition-transform transform hover:scale-110 rounded-xl"
        alt="Dice"
      />
      <h1 className="mt-4 text-xl font-semibold text-white">Click on Dice</h1>

      <div className="mt-6 flex gap-4">
        <button
          onClick={resetAll}
          className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-400 transition font-semibold">
          Reset Score
        </button>
        <button 
        onClick={()=>setIsRuleOpen(true)}
        className="px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-400 transition font-semibold"
        >
          Rule Guide
        </button>
      </div>
    </div>
    </>
  );
}

export default RollDice;
