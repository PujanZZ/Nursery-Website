import React from 'react'
import { CardData } from './CardData'
import './NavCss/Card.css'
import { Link, useNavigate } from 'react-router-dom' 


function Card() {

    const card1 = useNavigate()
    return (
        <>
        <h3 className='h3text'>Value For Money....</h3>
        {/* <h3 className='h3text' onClick={() => card1("/card",{state:"hello"})}>Value For Money....</h3> */}
        <br />
        
            {/* Calling carddata using map */}
            {CardData.map(({ img, title, description, price,id }) => (
                
                <div className='wrapper'>
                   {/* Card component with img and other details*/}
                    
                     <div onClick={() => card1(`/card/${id}`,{state:{img,title,description,price}})} className='card'>
                        <img src={img} className='card_img' />
                        <div className='card_body'>
                            <h2 className='card_title'>{title}</h2>
                            <p className='card_description'>{description}</p>
                            <h3 className='card_price'>{price}</h3>
                            <button className='card_btn'>Add to Cart</button>
                        </div>

                    </div>
                   

                    

                </div>
            )
            )


            }

        </>

    )
}


export default Card