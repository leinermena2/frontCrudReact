import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../../components/NavBar'
import Swal from 'sweetalert2'



import { Link } from 'react-router-dom'



const endpoint = 'http://localhost:8000/api'
const ShowProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])
    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`);
        setProducts(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been delete',
            showConfirmButton: false,
            timer: 1500
          })
           getAllProducts();
       }
   

  
    return (
        <div>
            <NavBar/>
            <div className='d-grid gap-2 container'>
                <Link to="/create" className='btn btn-primary btn-sm mt-2 mb-2 text-white rounded-pill'>Create Product</Link>
            </div>
            <div className='container'>
            <table className='table table-bordered'>
                <thead className='bg-dark text-light'>
                    <th>SKU</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </thead>
                <tbody className='bg-light'>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <div className='btn-group'>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning btn-sm'>
                                  
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    </Link>
                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger btn-sm'>
                                
                                <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ShowProducts