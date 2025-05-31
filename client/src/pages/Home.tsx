import React, { useEffect } from 'react'
import Item from '../components/Item'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productsSlice'
import { RootState } from '../redux'
import { setCarts } from '../redux/cartSlice'
import { shuffle } from '../utils/shuppler'
import { ProductCard } from '../components/Product'
import { hideProduct } from '../redux/ProductSlice'

function Home() {
    let dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://petstore-des0.onrender.com/api/products')

            if (response.ok) {
                let data = await response.json()
                data = shuffle(data.data)

                dispatch(setProducts(data))
                console.log(data);


            }

        }
        fetchData()
    }, [])
    const user = useSelector((state: RootState) => state.userReducer.user)
    const Product = useSelector((state: RootState) => state.productReducer)
    console.log(user);

    useEffect(() => {
        if (user) {
            console.log('top');
            const fetchData = async () => {

                const response = await fetch('https://petstore-des0.onrender.com/api/carts', { method: "GET", credentials: "include" })



                if (response.ok) {
                    const data = await response.json()
                    dispatch(setCarts(data.data))
                    console.log("hey");

                    console.log(data.data);

                }


            }

            fetchData()
        }
    }, [user, dispatch])
    const product = useSelector((state: RootState) => state.productReducer.product)
    const products = useSelector((state: RootState) => state.productsReducer)


    return (
        <div className=' absolute top-24 sm:left-72 grid-cols-2 grid sm:grid-cols-3 place-items-center gap-x-3 sm:gap-x-20 gap-y-3 ml-8'

        >
            {/* id: string | number;
    imageUrl?: string;
    name: string;
    price: number;
    description?: string;
    altText?: string; */}
            {product && <div className=' absolute z-[300]  top-2 left-2'
                onClick={() => {
                    dispatch(hideProduct())

                }}

            >
                <ProductCard product={{
                    imageUrl: product.imageUrl, name: product.name, price: product.price, id: product.id, description: product.description, altText: product.altText
                }} />
            </div>}
            {
                products.map((item) => (
                    <Item _id={item._id} key={item._id} imageUrl={item.imageUrl} name={item.name} price={item.price} category={item.category} animalTYpe={item.animalTYpe} />
                ))
            }
        </div>
    )
}

export default Home