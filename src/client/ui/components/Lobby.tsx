import React, { useState , useEffect} from 'react';
import Room from './Room';
import lobbyService from '../repository/lobbyRepository'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Lobby : React.FC = () => {
  const [rooms, setRooms] = useState<{ name: string; id: number, capacity: number }[]>([]);
  const [roomName, setRoomName] = useState('');
  const [roomCapacity, setRoomCapacity] = useState(1);
  const [roomId, setId] = useState(0);
  const [showForm, setShowForm] = useState(false); 
  const [currentRoomId, setCurrentRoomId] = useState(0);
  const [roomCreated, setRoomCreated] = useState(false); 


  const navigate = useNavigate()

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await lobbyService.createRoom(roomName,roomId, roomCapacity);
      const newRoom = response.data.room;
      console.log(newRoom.id)
      setCurrentRoomId(newRoom.id)
      console.log(currentRoomId)
      setRooms([...rooms, newRoom]); 
      navigate(`/room/${newRoom.id}`,{state:newRoom})
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };
  const handleRefresh = () => {
    fetchRooms();
  };

  const fetchRooms = async () => {
    setShowForm(false)
    try {
      const response = await lobbyService.fetchRooms();
      setRooms (response.data)
    }catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: 'darkblue', height: 800 }}>
        <div className="col-8 offset-4" style={{ height: 100 }}>
          <div className="row">
            <div className="col-2">
              <button
                className="btn btn-primary btn-lg p-4"
                style={{ backgroundColor: 'purple' }}
                onClick={fetchRooms}
              >
                Rooms
              </button>
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary btn-lg"
                style={{ backgroundColor: 'purple' }}
                onClick={() => setShowForm(true)}
              >
                Create Room
              </button>
            </div>
            {currentRoomId !== null && ( 
            <div className="col-2">
              <Link
                to={`/room/${currentRoomId}`}
                className="btn btn-primary btn-lg p-4"
                style={{ backgroundColor: 'purple', marginLeft: 35 }}
              >
                CurrentRoom
              </Link>
            </div>
          )}
          <div className="col-2">
        <button
          className="btn btn-primary btn-lg p-4"
          style={{ backgroundColor: 'purple', marginLeft: 85 }}
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
        </div>
        </div>
        {showForm ? (
          <div className="row">
            <div className="col-4 offset-4 mt-4">
              <form onSubmit={handleCreateRoom}>
                <input
                  type="text"
                  placeholder="Room Name"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Room ID"
                  value={roomId}
                  onChange={(e) => setId(parseInt(e.target.value))}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ backgroundColor: 'purple', marginLeft: 20 }}
                  onClick={handleCreateRoom}
                >
                  Create Room
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="container-fluid" style={{ height: '80vh', overflowY: 'auto' }}>
            <ul style={{ width: '1400px', height: '100%' }}>
              {
              // if rooms.find id roomcreated == true 
              }
              {rooms.map((room, index) => (
                <li key={index}>
                  <Room room={room} />
                </li>
              ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );  
}

export default Lobby;
