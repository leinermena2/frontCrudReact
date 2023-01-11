import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import Swal from 'sweetalert2'


const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {
    const [sku, setSku] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    const store = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {sku:sku, name:name, description: description, price: price, stock: stock })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been edited',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/')
    }

    useEffect( ()=>{
        const getProductoById = async () => {
                 const response = await axios.get( `${endpoint}${id}`)
                 setSku(response.data.sku);
                 setName(response.data.name);
                 setDescription(response.data.description);
                 setPrice(response.data.price);
                 setStock(response.data.stock);
        }
        getProductoById()
    }, [])

    return (

        <div>
            
            <NavBar/>
        <h3>Edit {name}</h3>
        <div className='container border-secondary'>
            
        <form onSubmit={store}>
            <div className='mb-3'>
                <label for='form-label'>Sku</label>
                <input value={sku} onChange={(e) => setSku(e.target.value)} type='text' className='form-control rounded-pill mt-1' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='form-control rounded-pill mt-1' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type='text' className='form-control rounded-pill mt-1' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Stock</label>
                <input value={stock} onChange={(e) => setStock(e.target.value)} type='text' className='form-control rounded-pill mt-1' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type='text' className='form-control rounded-pill mt-1' />
            </div>
            <div className='d-grid gap-2'>
            <button type="submit" className='btn btn-success btn rounded-pill'>Update</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default EditProduct