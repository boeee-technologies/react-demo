import { Input, styled, SvgIcon } from "@mui/material";
import { SetStateAction, useState } from "react";
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


export function Players({ name, symbol, isActive, onPlayerNameChange }: PlayerProps) {
    const [isEdition, setisEdition] = useState(false);
    const [playerName, setNewName] = useState(name);

    function handleEditClick() {
        setisEdition((editing) => !editing);
        if (isEdition) {
            onPlayerNameChange(name, symbol);
        }
    }

    function handleOnChange(event: { target: { value: SetStateAction<string>; }; }) {
        setNewName(event.target.value);
    }
    let playerNameLable = <><span>{playerName}</span> <EditIconElement onClick={handleEditClick} /> </>;


    if (isEdition) {
        playerNameLable = <> <InputElement aria-label="Name" placeholder="Type your name..." value={playerName} required onChange={handleOnChange} /> <SaveAsOutlinedIconnElement onClick={handleEditClick} /> </>;
    }

    return (
        <>
            {symbol}:  {playerNameLable}
        </>
    );
}