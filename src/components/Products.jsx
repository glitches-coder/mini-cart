import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Products({token, setCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products", {
            headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
            setProducts(res.data)
        }) 
    }, [])

    const addToCart = async (id) => {
        const res = await axios.post(`http://localhost:8080/api/cart/${id}`, {},
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        setCart(res.data)
    }



  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        { products.map((p) => (
            <div
                key={p.id}
                className="bg-white shadow-md rounded-xl p-4"
            >
                <h3 className='text-lg font-semibold'>{p.name}</h3>
                <p className="text-gray-600 mb-3">₹{p.price}</p>
                <button
                    className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
                    onClick={() => addToCart(p.id)}
                >Add to cart</button>
            </div>
        )) }
    </div>
  )
}

export default Products