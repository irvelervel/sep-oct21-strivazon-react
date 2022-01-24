import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

// we need to create a state variable for keeping track of the cart
// and we need to store it here in App.js because App.js is the common
// parent of all affected components, which are: Cart, CartIndicator and BookDetail

// how to create a state variable in App?
// 1) convert it to a class and create a state object
// 2) leveraging useState to create a state variable <-- let's use this one!

// RULES OF HOOKS!
// 1) just use hooks into React functional component
// 2) use hooks only at the TOP LEVEL of your component,
// without loops, functions, etc. because they need to always be executed
// in the same order!

const App = () => {
  // now the function body is opened
  // and I can use the hooks!

  const [cart, setCart] = useState([])

  const addToCart = (bookToAdd) => {
    // bookToAdd is the book we clicked Add To Cart from!
    let newCart = [...cart]
    newCart.push(bookToAdd)
    setCart(newCart)
  }

  const wrongAddToCart = (bookToAdd) => {
    // bookToAdd is an object
    // I cannot set immediately cart to hold an object :(
    setCart(bookToAdd)
  }

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className='text-center background-div'>
            <Link to='/'>
              <h1>Strivazon Book Store</h1>
            </Link>
          </Col>
          <CartIndicator cartLength={cart.length} />
        </Row>
        <hr />
        <Routes>
          <Route path='/' element={<BookStore addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
