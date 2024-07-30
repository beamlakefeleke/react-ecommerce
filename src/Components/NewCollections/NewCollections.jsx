import React from 'react'
import new_collection from '../Assets/data'
import './NewCollections.css'
import Item from '../item/item'

const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTION</h1>
       
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} name={item.name} image={item.image} new_price={item.new_pirce} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections