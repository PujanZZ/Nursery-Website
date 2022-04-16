import React from 'react'
import { CardDescriptionData } from './CardDescriptionData'
import { useLocation, useParams } from 'react-router-dom'


function CardDes() {



  const params = useParams()
  const element = CardDescriptionData.find((lel) => lel.id.toString() === params.id)
  //console.log(params)

  return (

    <>

      <div className='allp'>
        <div className='product'>
          <div className='product_photo'>
            <div className='photo_container'>

              <div className='photo_main'>

                <img className="imgDesc" src={element?.img} alt="green" />

              </div>
            </div>
          </div>

          <div className='product_info'>
            <div className='title'>
              <h1>{element?.title}</h1>
            </div>
            <div className='price'>
              <span>{element?.price}</span>
            </div>
            <div className='description'>
              <h3 className='ch3'>ABOUT</h3>
              <ul>
                <li>{element?.b1}</li>
                <li>{element?.b2}</li>
                <li>{element?.b3}</li>
                <li>{element?.b4}</li>


              </ul>
            </div>
            <button className='buy_btn'>ADD TO CART</button>
          </div>

        </div>
      </div>



    </>
  )
}




export default CardDes

