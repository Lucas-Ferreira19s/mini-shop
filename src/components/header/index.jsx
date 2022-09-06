import { useState } from "react";
import * as C from "./stylesHeader";
import logo from "../../assets/images/logo.svg"
import cart from "../../assets/images/icon-cart.svg"
import avatar from "../../assets/images/image-avatar.png"
import menuMobile from "../../assets/images/icon-menu.svg"
import closeMobile from "../../assets/images/icon-close.svg"
import clean from "../../assets/images/icon-delete.svg"
import productCart from "../../assets/images/image-product-small.jpg"


export const Header = (props)=>{
    const [menu, setMenu] = useState(100);
    const [visibility, setVisibility] = useState(false)

    const price = 125.00
    const priceAmount = price * props.times

    function openMenu(){
        setMenu(0)
    }
    function closeMenu(){
        setMenu(-100)
    }
    function CartVision(){
        visibility ? setVisibility(false) : setVisibility(true)
    }
    function wape(){
        props.amount(0)
        setTimeout(()=> setVisibility(false), 1000)
    }

    return(
        <C.Header>
            <div className="logoMenu">
                <C.logoIcons>
                    <img className="menuMobile" src={menuMobile} onClick={openMenu}/>
                    <img className="logo" src={logo} alt="logo" />
                </C.logoIcons>
                <C.Menu left={menu}>
                    <ul>
                        {menu == 0 && (
                            <li><img className="closeMobile" src={closeMobile} onClick={closeMenu} /></li>
                        )}
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </C.Menu>
            </div>
            <C.icons>
                <img src={cart} alt="cart" onClick={CartVision} />
                {props.times > 0 && (<span>{props.times}</span>)}
                <img className="avatar" src={avatar} alt="perfil" onClick={CartVision} />
            </C.icons>
            <C.cartMain cart={visibility}>
                <div className="cart">Cart</div>
                {props.times == 0 && (<div className="empty"><p>Your cart is empty</p></div>)}
                
                {props.times > 0 && (
                    <>
                        <div className="cartGrid">
                            <div className='small'>
                                <img src={productCart} alt="" />
                            </div>
                            <div>
                                <p>Fall Limited Edition Sneakers</p>
                                <p>${price} <span>X{props.times}</span> <span className="price">${priceAmount}</span></p>
                            </div>
                            <div><img className="clean" src={clean} alt="" onClick={wape} /></div>
                        </div>
                        <button onClick={wape}>Checkout</button>
                    </>
                )}
            </C.cartMain>
        </C.Header>
    )
}