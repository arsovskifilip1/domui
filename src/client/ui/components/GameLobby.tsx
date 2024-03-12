import { useLocation } from 'react-router-dom';
import Player from './Player';
import {useState} from 'react'

const GameLobby : React.FC = () => {

  const location = useLocation();
  const player = location.state; //CL1 CL2 CL3 CL4 (userId,userName,RoomId,Color,Clan)
  //CL1 FROM CLIENT CL2CL3CL4 FROM SERVER
  //const [players, setPLayers] = useState([]); //CL2CL3CL4

  return (
    <Player player={player} />
  );
};

export default GameLobby;
