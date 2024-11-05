import { Input, styled, SvgIcon } from "@mui/material";
import { KeyboardEvent, SetStateAction, useState } from "react";
import { red } from "@mui/material/colors";
import { Edit as EditIcon, SaveAsOutlined as SaveAsOutlinedIcon } from '@mui/icons-material';

// Create a base styled component for all icons
const IconBase = styled(SvgIcon)(({ theme }) => ({
    color: red[300],
    cursor: 'pointer',
}));

interface PlayerProps {
    name: string;
    symbol: string;
    isActive: boolean;
    onPlayerNameChange(newName: string, symbol: string): void
}

const InputElement = styled(Input)(({ theme }) => ({
    color: red[100],
    padding: '10px',
    borderRadius: '5px',
    width: 'auto'
}));

const EditIconElement = styled(EditIcon)(({ theme }) => ({
    color: red[300],
    cursor: 'pointer',
}));

const SaveAsOutlinedIconnElement = styled(SaveAsOutlinedIcon)(({ theme }) => ({
    color: red[300],
    cursor: 'pointer',
}));


export function Players({ name, symbol, onPlayerNameChange }: PlayerProps) {
    const [isEdition, setisEdition] = useState(false);
    const [playerName, setPlayerName] = useState(name);


    function handleEditClick() {
        setisEdition((editing) => !editing);
    }

    function handleOnSavePlayerName(playerName: string, symbol: string) {
        onPlayerNameChange(playerName, symbol);
        setisEdition((editing) => !editing);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter') handleOnSavePlayerName(playerName, symbol);
        else if (e.key === 'Escape') handleEditClick();
    };

    let playerNameLable = <><span>{playerName}</span> <EditIconElement onClick={handleEditClick} /> </>;


    if (isEdition) {
        playerNameLable = <> <InputElement
            aria-label="Name"
            placeholder="Type your name..."
            onChange={(e) => setPlayerName(e.target.value)}
            value={playerName}
            required
            onKeyDown={(e) => handleKeyDown(e)}
        />
            <SaveAsOutlinedIconnElement onClick={() => handleOnSavePlayerName(playerName, symbol)} /> </>;
    }

    return (
        <>
            {symbol}:  {playerNameLable}
        </>
    );
}