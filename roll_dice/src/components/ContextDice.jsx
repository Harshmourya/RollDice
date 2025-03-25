import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContextDice = createContext();

export const DiceProvider = ({ children }) => {
    const imgsArray = ["dice_1.png", "dice_2.png", "dice_3.png", "dice_4.png", "dice_5.png", "dice_6.png"];

    const [currentDiceVal, setCurrentDiceVal] = useState(1);
    const [numberSelect, setNumberSelect] = useState(null);
    const [isOpened , setIsRuleOpen] = useState(false)
    const [score, setScore] = useState(0);


    const resetAll = () => {
        setCurrentDiceVal(1);
        setNumberSelect(0);
        setScore(0);
    };

    const rollDice = () => {
        // console.log("Selected Number:", numberSelect);

        if (!numberSelect) {
            toast.error("Please select a number before rolling the dice!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            return;
        }

        const cryptoObj = window.crypto;
        const diceArray = new Uint32Array(1);
        const dice = (cryptoObj.getRandomValues(diceArray)[0] % 6) + 1;

        // console.log("Rolled Dice Value:", dice);

        setCurrentDiceVal(dice);
        
        if (numberSelect === dice) {
            setScore((prev) => (prev === 0 ? dice : prev + dice));
            toast.success("You guessed it right! 🎉", { autoClose: 2000,
                position : "top-center"
            });
        } else {
            setScore((prev) => prev - 1);
        }
        setNumberSelect(0);
    };

    return (
        <ContextDice.Provider value={{ imgsArray, currentDiceVal, rollDice, numberSelect, setNumberSelect, score , resetAll , isOpened , setIsRuleOpen }}>
            {children}
        </ContextDice.Provider>
    );
};

export const useDice = () => {
    return useContext(ContextDice);
};
