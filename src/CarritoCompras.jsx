import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarComponent } from "./components/NavbarComponent"
import { ProductsPage } from "./pages/ProductsPage"
import { ShoppingCar } from "./pages/ShoppingCar"
import { ProductProvider } from "./context/ProductProvider"
import { CardProvider } from "./context/CardProvider"

export const CarritoCompras = () => {
    return (
        <ProductProvider>
            <CardProvider>
                <NavbarComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ProductsPage />}></Route>
                        <Route path="/carrito" element={<ShoppingCar />}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CardProvider>
        </ProductProvider>
    )
}
