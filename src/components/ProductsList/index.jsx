import { useCart } from "../../Providers/Cart"
import { useCatalogue } from "../../Providers/Catalogue"
import Button from "../Button"
import { Ul } from "./style"

const ProductList = ({type}) =>{
    const { catalogue } = useCatalogue()
    const { cartItem } = useCart()

    return(
        <Ul>
            {type === "catalogue" ? (
                catalogue.map((item,index) =>
                <li key={index}>
                    {item.name} <Button type={type} item={item}/>
                </li>
            )
                
            )
                :
                cartItem.map ((item, index) => 
                    <li key={index}>
                        {item.name} <Button type={type} item={item}/>
                    </li>
                )
            }
        </Ul>
    )
}

export default ProductList