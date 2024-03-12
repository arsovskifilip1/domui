import { useNavigate } from "react-router-dom"
import React from 'react'
import { useState, useEffect } from "react"
import lobbyService from "../repository/lobbyRepository"
const Home : React.FC = () => {
  
  class Player{
    private playerName: string
    private password: string 
    public constructor(name: string, password: string){
      this.playerName = name
      this.password = password
    }
    public getName():string {
      return this.playerName
    }
  }
  
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [login,setLogin] = useState(false)
  const navigate = useNavigate()
  console.log(login)
  const player = new Player('sosa','123')

  const  handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await lobbyService.login(username, password);
    if(response.data.flag == true){
      setLogin(true)
      localStorage.setItem('isLoggedIn', 'true');
    }
    console.log(login)
  }
  const fetchLogin = async () => {
    try {
      const response = await lobbyService.fetchId();
      if(response.data.player === player.getName()){
        setLogin(true)
      }

    }catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchLogin();
  }, []);
  return (
    <>
    <div className='container-fluid' style={{ backgroundColor: 'darkblue', height : 1200 }}>
      <div className='row'>
        <div className='col-7 offset-5 p-4'>
        {login?(
          <div className='col-3 m-2 text-white p-4 bg-primary border border-info'>
          <p style={{textAlign:"center"}}
          >Hello {username}</p>
      </div>
        ):(
          <div>
          <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ backgroundColor: 'purple', marginLeft: 20 }}
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
        </div>
        )
      }

        </div>
      </div>
    </div>
</>
  )
}
export default Home
