import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux'
import AdminItem from './adminItem'

function AdminHome() {
    const products = useSelector((state: RootState) => state.productsReducer)

    return (
        <div>
            {
                products && Array.isArray(products) && products.map((product) => (<AdminItem name={product.name} price={product.price} category={product.category} imageUrl={product.imageUrl} _id={product._id} />))
            }
        </div>
    )
}

export default AdminHome