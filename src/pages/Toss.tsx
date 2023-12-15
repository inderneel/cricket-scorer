import React, {useState} from "react";
import { TextField, Input, Button, Modal } from "@mui/material";
const Toss :React.FC<{team1Name:string | undefined}> = ({team1Name}) =>{
    const [sideSelected, setSideSelected] = useState<string>('');

return (
    <>
        <div>{team1Name} Please select Heads/ Tails</div>
        <div>
            <Button onClick={() => setSideSelected('Heads')}>Heads</Button>
            <Button onClick={() => setSideSelected('Tails')}>Tails</Button>
        </div>
    </>
);
}
export default Toss;