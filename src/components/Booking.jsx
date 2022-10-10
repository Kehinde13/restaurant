import React from 'react'

function Booking(props) {
 let badgeText
   if(props.item.openSpots === 0){
     badgeText = "SOLD OUT"
   } else {
    badgeText = "AVAILABLE"
   }

  return (
    <div>
         <div className='bookings'>
             <div className='badge'>{badgeText}</div>
            <img src={`../images/${props.item.img}`} alt="family" />
            <div>
               <p className='title'>{props.item.title}</p>
               <p className='reservation'>{props.item.reservation}</p> 
               <p className='price'>{props.item.price}</p>
            </div>
         </div>
    </div>
  )
}

export default Booking