import * as c from "./stylesLayout"
import next from "../../assets/images/icon-next.svg"
import previous from "../../assets/images/icon-previous.svg"
import { items } from '../data/index'
import { useState } from "react"


export const LayoutMain = (props) => {

    const [cont, setCont] = useState(0);
    const [quantity, setQuantity] = useState(0)

    function more() {
        quantity > 0 && setQuantity(quantity - 1)
    }
    function less() {
        setQuantity(quantity + 1)
    }
    function portion() {
        props.amount(quantity)
    }
    function nextBig() {
        cont < 3 && setCont(cont + 1)
    }
    function previousBig() {
        cont > 0 && setCont(cont - 1)
    }
    return (
        <c.container>
            <c.right>
                <div className="product">
                    {items[0].map((item, index) => index == cont && <div key={index} className="slide">
                            <img src={next} className="pass" onClick={nextBig}/>
                            <img src={item.img} />
                            <img src={previous} className="pass" onClick={previousBig} />
                        </div>
                    )}
                </div>
                <div className="small">
                    {items[1].map((item, index) => <img src={item.img} key={index} onClick={() => setCont(index)} />)}
                </div>
            </c.right>
            <c.left>
                <div>
                    <h5>Sneaker Company</h5>
                    <h1>Fall Limited Edition Sneakers</h1>
                </div>
                <div>
                    <p>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they`ll withstand everything the weather can offer.
                    </p>
                </div>
                <div className="prices">
                    <p className="price">$125.00 <span>50%</span></p>
                    <p className="priceAgo">$250.00</p>
                </div>
                <div className="qtPrice">
                    <div className="controlPrice">
                        <span onClick={more}>-</span>
                        <span className="quatidade">{quantity}</span>
                        <span onClick={less}>+</span>
                    </div>
                    <button onClick={portion}>
                        <i className="ri-shopping-cart-2-line"></i>
                        Add to cart
                    </button>
                </div>
            </c.left>
        </c.container>
    )
}