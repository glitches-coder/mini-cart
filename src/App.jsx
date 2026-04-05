import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Products from './components/Products'
import Checkout from './components/Checkout'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([])

  if (!token) return <Login setToken={setToken} />

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold p-4 text-center">
        MiniKart.com
      </h1>
      <Products token={token} setCart={setCart} />
      <Cart token={token} cart={cart} setCart={setCart} />
      <Checkout token={token}  />
    </div>
  )
}

export default App
