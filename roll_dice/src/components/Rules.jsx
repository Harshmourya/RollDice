import { useDice } from "./ContextDice";

function Rules() {
  const { isOpened, setIsRuleOpen } = useDice();
  if (!isOpened) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-gray-900 relative">
        <button
          onClick={() => setIsRuleOpen(false)}
          className="absolute top-3 right-3 text-xl font-bold text-red-500 hover:text-red-700"
        >
          ❌
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎲 How to Play Dice Game
        </h2>
        <ul className="text-lg space-y-3 text-left">
          <li>✅ Select any number</li>
          <li>🎲 Click on the dice image</li>
          <li>
            🏆 If your selected number matches the dice roll, you get points
            equal to the dice number!
          </li>
          <li>❌ If you guess wrong, 1 points will be deducted.</li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
