import React from "react";
import { TextField, Input, Button, Modal } from "@mui/material";

const GameStarted: any = (setGoBack: any) => {
    
    const GoBack = () =>{
        //setGoBack(prev => {prev = !prev});
    }

    return (
    <>
        <div>Game started</div>
        <Button onClick={() => GoBack()}>Back</Button>
    </>
    );
}
export default GameStarted;