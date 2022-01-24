import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const CartIndicator = (props) => {
  const navigate = useNavigate()

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="ml-2">{props.cartLength}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
