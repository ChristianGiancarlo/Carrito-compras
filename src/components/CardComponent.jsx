import { useContext, useEffect, useState } from "react"
import '../styles/CardComponent.css'
import { CardContext } from '../context/CardContext'

export const CardComponent = ({ id, image, title, description, price, handlerAdd, handlerRemove }) => {

    const { shoppingList } = useContext(CardContext)

    const [added, setAdded] = useState(false)

    const addProduct = () => {
        handlerAdd()
        setAdded(true)
    }

    const removeProduct = () => {
        handlerRemove()
        setAdded(false)
    }

    const checkAdded = ()=>{
        const boolean = shoppingList.some(product => product.id == id)
        setAdded(boolean)
    }

    useEffect(() => {
        checkAdded()
    }, [])


    return (
        <>
            <div className="card">
                <img src={image} alt={title} className="card-img" />

                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                    <p className="card-price">{price}</p>
                    {
                        added ?
                            <button
                                onClick={removeProduct}
                                type="button"
                                className="remove-button"
                            > Quitar del carrito</button>
                            :
                            <button
                                onClick={addProduct}
                                type="button"
                                className="add-button"
                            > Agregar al carrito</button>
                    }
                </div>
            </div>
        </>
    )
}
