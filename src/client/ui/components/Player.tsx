interface PlayerProps {
    player: {name: string, id: number, roomId: number}
}
const Player : React.FC <PlayerProps> = ({player}) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: 'darkblue', height: 1200 }}>
      <div className='row offset-2  bg-primary' style={{ width: 1000, padding: 5 }}>
        <div className='col-2 m-2 text-white p-4 bg-primary border border-info' style={{ marginLeft: 150 }}>
          <p>{player.name}</p>
        </div>
        <div className='col-3 m-2 text-white p-4 bg-primary border border-info'>
          <p>
            color
            </p>
        </div>
        <div className='col-3 m-2 bg-primary border border-info p-4'>
          <button className='btn btn-primary bg-danger' style={{ height: 55, width: 125, marginLeft: 40 }}>
            Ready
          </button>
        </div>
      </div>
    </div>
  )
}

export default Player
