import { Box } from "@mui/material";
import { userInfo } from "os";
import { SetStateAction, useState } from "react";

interface PlayerProps {
    name: string;
    symbol: string;
    isActive: boolean;
}

export function Players({ name, symbol, isActive }: PlayerProps) {
    const [isEdition, setisEdition] = useState(false);
    const [newName, setNewName] = useState(name);


    function handleEditClick() {
        setisEdition((editing) => !editing);
    }

    function handleOnChange(event: { target: { value: SetStateAction<string>; }; }) {
        setNewName(event.target.value);
    }
    let playerName = <span>{newName}</span>;
    let buttonText = 'Edit';
    if (isEdition) {
        playerName = <input type="text" value={newName} required onChange={handleOnChange} />;
        buttonText = 'Save';
    }

    return (
        <div>
            <span>
                {playerName}
                <span>{symbol}</span>
            </span>
            <button onClick={handleEditClick} >{buttonText}</button>
        </div>
    );
}