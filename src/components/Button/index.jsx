import { useCart } from "../../Providers/Cart"
import { useCatalogue } from "../../Providers/Catalogue"
import { ButtonStyle } from "./style"

const Button = ({type, item}) =>{

    const {cart, addToCart,removeFromCart} = useCart()
    const {catalogue, addToCatalogue, removeFromCatalogue} = useCatalogue()
    
    const text = type === "catalogue" ? "Add to cart" : "Remove From Cart"

    const handleClick = () =>{
        if(type === "catalogue"){
            removeFromCatalogue(item)
            addToCart(item)
        }else{
            removeFromCart(item)
            addToCatalogue(item)
        }
    }

    return (
        <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>
    )
}

export default Button