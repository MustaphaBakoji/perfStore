

import { useSelector } from 'react-redux'
import './App.css'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Login from './pages/Login'
import { RootState } from './redux'
import SignUp from './pages/SignUp'

import Carts from './pages/Carts'
import AddNewProduct from './admin/AddNewProduct'
import Error from './pages/Error'
import UpdateProduct from './admin/UpdateItem'
import AdminHome from './admin/AdminHome'
import Loader from './components/Loader'
import { ProductCard } from './components/Product'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contactc'
import About from './pages/About'

function App() {
  const showLogin = useSelector((state: RootState) => state.popUpReducer.Login)
  const showSignUp = useSelector((state: RootState) => state.popUpReducer.SignUp)
  const showCArt = useSelector((state: RootState) => state.popUpReducer.Cart)
  const showError = useSelector((state: RootState) => state.errorReducer.showError)
  const { error } = useSelector((state: RootState) => state.errorReducer)

  const { user } = useSelector((state: RootState) => state.userReducer)
  const {
    update,
    productToUpdate,
    addProduct,
    home,
    admin
  } = useSelector((state: RootState) => state.adminReducer);
  const { isLoading } = useSelector((state: RootState) => state.loadinReducer)



  console.log(update);
  console.log(productToUpdate);



  return (
    <Routes>
      <Route path="/" element={
        <div>

          {showError && <Error statusCode={error ? error.statusCode : 500} message={error ? error.message : "ann erro occured "} />}
          <Nav />

          {!admin && <Sidebar />}
          {home ? <AdminHome /> : <Home />}
          {showCArt && <Carts />}
          {isLoading && <Loader />}
          {showLogin && <Login />}
          {showSignUp && <SignUp />}
          {addProduct &&
            <AddNewProduct />
          }

          {productToUpdate &&

            <UpdateProduct name={productToUpdate.name} imageUrl={productToUpdate.imageUrl} price={productToUpdate.price} _id={productToUpdate._id} category={productToUpdate.category} />
          }
        </div>}
      />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />


    </Routes>
  )
}

export default App
