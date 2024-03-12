import { useNavigate } from "react-router-dom"
import React from 'react'

interface RoomProps {
    room: {name: string, id: number, capacity: number}
}

const Room : React.FC <RoomProps> = ({room}) => {

  const navigate = useNavigate()

  const handleOnJoin = () => {
    //post to server check capacity  id 
    navigate(`/room/${room.id}`,{state:room})
  }
  return (
    <>
    <div className='row offset-2  bg-primary' style={{width:1000 , padding : 5}}>
      <div className='col-2 m-2 text-white p-4 bg-primary border border-info' style={{marginLeft : 150}}>
          <p style={{textAlign:"center"}}
          >{room.name}</p>
      </div>
      <div className='col-3 m-2 text-white p-4 bg-primary border border-info'>
          <p style={{textAlign:"center"}}
          >{room.capacity}/4</p>
      </div>
      <div className='col-3 m-2 text-white p-4 bg-primary border border-info'>
          <p style={{textAlign:"center"}}
          >Clan</p>
      </div>
     { // if roomcreated == true  && roomowner  ENTER button 
     } 
      <div className='col-3  m-2 bg-primary border border-info p-4'>
          <button className='btn btn-primary' style={{background:'purple',height: 55 , width : 125, marginLeft : 40}}
          onClick={handleOnJoin}
          >
            Join</button>
      </div>
    </div>
    </>
  )
}

export default Room     
