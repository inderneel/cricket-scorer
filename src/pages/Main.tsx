import React from "react";
import './Main.scss';
import { useState } from "react";
//import Modal from '../components/Modal/Modal';
import { TextField, Input, Button, Modal } from "@mui/material";
import GameStarted from './GameStarted';
import Toss from "./Toss";

interface Game {
    team1Name: string | undefined,
    team2Name: string | undefined,

}

const GameStates = {
    Initialize: 'I',
    InProgress: 'P'
} 

function Main() {

    const [gameState, setGameState] = useState<string>(GameStates.Initialize);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [game, setGame] = useState<Game>({team1Name:undefined, team2Name: undefined});


    function closeModal(){
        setShowModal(false);
    }

    function showAddGame(){
        setShowModal(true);
    }

    function StartGame(){
        setGameState(GameStates.InProgress);
    }

    function AddGameBody() {
        switch (gameState)
        {
            case GameStates.Initialize:                
                return ( 
                    <>
                        <div>New Game</div>
                        <div>
                            <TextField id="team1" label="team1" variant="standard" value={game.team1Name} onChange={(event:any) =>  {setGame({...game, team1Name: event.target.value })}}  />
                            <TextField id="team2" label="team2" variant="standard" value={game.team2Name} onChange={(event:any) =>  {setGame({...game, team2Name: event.target.value })}}  />                            
                            <br />
                            <br />
                            <div>Toss</div>
                            <Toss team1Name={game.team1Name}></Toss>
                            <Button onClick={() => StartGame()}>Start Game</Button>
                        </div>
                    </>);
                break;
            case GameStates.InProgress:
                return <GameStarted></GameStarted>
            break;       
            default:
                return <></>;     
        };
    }

    return <>
        {/* <Modal onClose={closeModal} open={showModal}>
            {AddGameBody()}
        </Modal> */}
        <Modal
  open={showModal}
  onClose={closeModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
    <div className="gameBody">
        {AddGameBody()}
    </div>
    {/* <div>Test</div> */}
  {/* <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box> */}
</Modal>
        <button type="button" onClick={showAddGame} >Add Game</button>
    </>
}

export default Main;