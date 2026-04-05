import axios from 'axios';
import React, { useRef } from 'react'

function Checkout({token}) {
    const addressRef = useRef();
    const cityRef = useRef();

    const handleCheckout = async () => {
        const res = await axios.post(
            "http://localhost:8080/api/checkout",
            {
                address: addressRef.current.value,
                city: cityRef.current.value
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        )
        alert(`${res.data}`)
    }


  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        <input
            ref={addressRef}
            placeholder='Address'
            className='w-full mb-3 p-2 border rounded'
        />
        <input
            ref={cityRef}
            placeholder='City'
            className='w-full mb-3 p-2 border rounded'
        />
        <button
            onClick={handleCheckout}
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
        >
            Place Order
        </button>
    </div>
  )
}

export default Checkout