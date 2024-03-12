import axios from '../custom-axios/axios'

const lobbyService = {
    fetchRooms:() =>{
        return axios.get('/rooms')
    },
    login: (username: string, password: string) => {
        return axios.post('/login',{
            'username':username,
            'password':password
        })
    },
    joinRoom: (roomId: number, playerName: string) => {
        return axios.put(`/joinRoom/${roomId}`,{
            "roomId": roomId,
            'playerName': playerName
        });
    },
    getRoomId: (roomId: number) =>{
        return axios.get(`/rooms/${roomId}`)
    },
    createRoom: (name: string, id: number, capacity: number) => {
        return axios.post('/createRoom',{
            'name': name,
            'id': id,
            'capacity': capacity
        })
    },
    fetchId : () =>{
        return axios.get('/loginId')
    }
}
export default lobbyService