import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../context/ProductContext"
import { CardContext } from "../context/CardContext"

export const ProductsPage = () => {

    const {products} = useContext(ProductContext)
    const {addProduct, removeProduct} = useContext(CardContext)

    return (
        <>
            <h1>Productos</h1>
            <hr />
            {products.map(product =>(
                <CardComponent 
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                handlerAdd = {() => addProduct(product)}
                handlerRemove = {() => removeProduct(product.id)}
                />
            ))}
        </>
    )
}
