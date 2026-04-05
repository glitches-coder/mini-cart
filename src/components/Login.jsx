import React, { useState } from 'react'
import axios from 'axios'

function Login({ setToken }) {
    const [form, setForm] = useState({username: "", password: ""})

    const handleSubmit = async () => {
        const res = await axios.post("http://localhost:8080/auth/login", form)
        setToken(res.data.token)
    }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow-md w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <input
                className='w-full mb-3 p-2 border rounded'
                placeholder='Username'
                onChange={(e) => 
                    setForm({...form, username: e.target.value})
                }
            />

            <input
                type="password"
                className="w-full mb-4 p-2 border rounded"
                placeholder="Password"
                onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                }
            />
            <button 
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Login
            </button>
        </div>
    </div>
  )
}

export default Login