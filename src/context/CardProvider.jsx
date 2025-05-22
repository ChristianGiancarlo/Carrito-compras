import { useReducer } from "react"
import { CardContext } from "./CardContext"

export const CardProvider = ({ children }) => {

    const initialState = []

    

    const cardReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARD] Add Product':
                return [...state, action.payload]
            case '[CARD] Remove Product':
                return state.filter(product => product.id !== action.payload)
            case '[CARD] Increment Quantity':
                return state.map(product => {
                    const cant = product.quantity + 1 
                    if(product.id === action.payload) return {...product, quantity: cant}
                    return product
                })
            case '[CARD] Decrement Quantity':
                return state.map(product => {
                    const cant = product.quantity - 1 
                    if(product.id === action.payload && product.quantity > 1 ) return {...product, quantity: cant}
                    return product
                })
            default:
                break;
        }
    }

    const [shoppingList, dispatch] = useReducer(cardReducer, initialState)

    const addProduct = (product) => {
        product.quantity = 1
        const action = {
            type: '[CARD] Add Product',
            payload: product
        }
        dispatch(action)
    }
    const removeProduct = (id) => {
        const action = {
            type: '[CARD] Remove Product',
            payload: id
        }
        dispatch(action)
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CARD] Increment Quantity',
            payload: id
        }
        dispatch(action)
    }
    const decrementQuantity = (id) => {
        const action = {
            type: '[CARD] Decrement Quantity',
            payload: id
        }
        dispatch(action)
    }



    return (
        <CardContext.Provider value={{ shoppingList, cardReducer, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
            {children}
        </CardContext.Provider>

    )
}
