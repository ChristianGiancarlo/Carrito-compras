import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CardContext } from "../context/CardContext"
import '../styles/NavbarComponent.css'

export const NavbarComponent = () => {

    const {shoppingList} = useContext(CardContext)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand" href="#">LogoCompras</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to='/' className="nav-link" aria-current="page">Productos</NavLink>
                        </div>
                        <div className="navbar-nav">
                            <NavLink to='/carrito' className="nav-link" aria-current="page">Carrito</NavLink>
                        </div>
                        <NavLink className='cart-icon' to='/carrito'>
                            <Badge badgeContent={shoppingList.length} color="primary">
                                <ShoppingCart />
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
