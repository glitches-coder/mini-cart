import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cart({token, cart, setCart}) {

    const fetchCart = async() => {
        const res = await axios.get("http://localhost:8080/api/cart", {
            headers: { Authorization: `Bearer ${token}` },
        })
        setCart(res.data)
    }

    useEffect(() => {
        fetchCart();
    }, [])

    const removeItem = async (idx) => {
        await axios.delete(`http://localhost:8080/api/cart/${idx}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        fetchCart();
    }


  return (
    <div className="p-6">
        { cart.map((item) => {
            return (
                <div
            key={item.id}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
            >
                <span>{item.name}</span>
                <button onClick={() => removeItem(item.id)} className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-800'>Remove Item</button>

            </div> 
            )        
        }) }
    </div>
  )
}

export default Cart