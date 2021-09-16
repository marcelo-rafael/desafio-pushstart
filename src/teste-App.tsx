import axios from 'axios'
import React, { useEffect, useState, } from 'react'



const App = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // const history = useHistory()

    // const handleLogin = () => {

    //     axios.post('https://teste.pushstart.com.br/api/login', {
    //         username: username, password: password
    //     }).then(res => {
    //         if (res.status === 200) {
    //             localStorage.setItem('token', JSON.stringify(res.data))
    //             // history('/timeline')
    //         }
    //     })
    // }


    const token: any = localStorage.getItem('token')


    const parsedToken = JSON.parse(token)


    const [dados, setDados] = useState<any>([])

    const [teste, setTeste] = useState(false)
    const [algo, setAlgo] = useState(false)



    useEffect(() => {
        axios.get('https://teste.pushstart.com.br/api/timeline', {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': parsedToken.token
            }
        }).then(res => setDados(res.data))
    }, [])


    console.log('dsados', dados[3])

    return (
        <div>
            <header style={{ background: 'purple', color: 'white' }}>
                <h1>Timeline</h1>
            </header>
            <div>
                {dados.map((dado: any) => (
                    <div style={{ border: '1px solid gray', width: '400px', padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <img src={dado.author.avatar} alt="" style={{ width: '60px', borderRadius: '50%' }} />
                            <h2 style={{ marginLeft: '20px' }}>{dado.author.name}</h2>
                        </div>
                        <p>{dado.data.text}</p>
                        <img src="https://ogimg.infoglobo.com.br/rioshow/24884446-8f3-e73/FT1086A/deadpool-primeiro-filme.jpeg.jpg" alt="" style={{ width: '400px' }} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <AiOutlineHeart size={24} color="purple" /> */}
                            <p style={{ marginLeft: '10px' }}>{dado.likes}</p>
                        </div>
                    </div>
                ))}
            </div>
            {teste === true ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {teste === true ? <div style={{ width: '140px', height: '50px', background: 'purple', color: 'white' }}>Bulbassauro</div> : <div style={{ width: '140px', height: '50px', background: 'gray', color: 'white' }}>Bulbassauro</div>}
                        <p>27%</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '200px', height: '50px', background: 'gray', color: 'white' }}>Charmander</div>
                        <p>43%</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '160px', height: '50px', background: 'gray', color: 'white' }}>Squirtle</div>

                        <p>30%</p>
                    </div>
                    <button style={{ background: 'none', color: "green", border: 'none', width: '200px' }}>votar</button>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} onClick={() => {
                    setAlgo(true)
                }}>
                    {algo ? <button style={{ background: 'purple', border: '1px solid purple', width: '400px', height: '50px', padding: '10px', color: 'white' }}>Bulbasauro</button> : <button style={{ background: 'none', border: '1px solid purple', width: '400px', height: '50px', padding: '10px' }}>Bulbasauro</button>}
                    <button style={{ background: 'none', border: '1px solid purple', width: '400px', height: '50px', padding: '10px' }}>Charmander</button>
                    <button style={{ background: 'none', border: '1px solid purple', width: '400px', height: '50px', padding: '10px' }}>Squirtle</button>
                    <button style={{ color: 'gray', width: '400px', border: 'none', background: 'none', margin: '20px', cursor: 'pointer' }} onClick={() => setTeste(true)}>votar</button>
                </div>
            )}

        </div >
    )
}


export default App