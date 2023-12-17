import React from "react";
import { TextField, Input, Button, Modal } from "@mui/material";

const GameStarted: any = () => {

    const startScoring= () =>{
        
    }
    
    return (
    <>
        <div>Game started</div>
        <div>
            <TextField label="Batsman"></TextField>
            <Button onClick={() => startScoring()}>+ Add Batnsman</Button>
        </div>
    </>
    );
}
export default GameStarted;