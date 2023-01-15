import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../../components/NavBar'
import Swal from 'sweetalert2'


const endpoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {
    const [sku, setSku] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {sku:sku, name:name, description: description, price: price, stock: stock })
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your item has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/items')
    }
    return (

        <div>
            
            <NavBar/>
        <h3>Create Product</h3>
        <div className='container border-secondary'>
            
        <form onSubmit={store}>
            <div className='mb-3'>
                <label for='form-label'>Sku</label>
                <input value={sku} onChange={(e) => setSku(e.target.value)} type='text' className='form-control rounded-pill mt-1 needs-validation' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='form-control rounded-pill mt-1 needs-validation' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type='text' className='form-control rounded-pill mt-1 needs-validation' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Stock</label>
                <input value={stock} onChange={(e) => setStock(e.target.value)} type='text' className='form-control rounded-pill mt-1 needs-validation' />
            </div>
            <div className='mb-3'>
                <label for='form-label'>Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type='text' className='form-control rounded-pill mt-1 needs-validation' />
            </div>
            <div className='d-grid gap-2'>
            <button type="submit" className='btn btn-primary btn rounded-pill'>Create</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default CreateProduct