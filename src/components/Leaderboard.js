import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Ldata } from './LeaderboardData'


function Leaderboard() {

    const lead = useNavigate()
    return (
     
        <>
            <h1 className='test1'>LEADERBOARD</h1>
            {Ldata.map(({ name, msg }) => (

                
                <div className="card_container">
                    <img className="card_imag" src="https://i.imgur.com/3bEhMWX.png" alt="Avatar" />
                   
                    <p><span>{name}</span></p>
                    <p>{msg}</p>
                </div>


            )
            )
            }
        </>
    )
}

export default Leaderboard