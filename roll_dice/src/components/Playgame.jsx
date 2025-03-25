import { DiceProvider } from "./ContextDice";
import Numbers from "./Numbers";
import RollDice from "./RollDice";
import Rules from "./Rules";
import Score from "./Score";
import { ToastContainer } from "react-toastify";

export default function Playgame() {
    return (
    <DiceProvider>
      <div className=" w-full bg-amber-500 h-screen flex flex-col items-center justify-center gap-9">
        <ToastContainer />
        <Score />
        <Numbers />
        <RollDice />
        <Rules />
      </div>
    </DiceProvider>
  );
}
