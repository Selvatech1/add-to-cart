import React from "react";
import { useCart } from "react-use-cart";
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalIteams,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <button type="button" class="btn btn-success">
        <span className="badge bg-dark text-white ms-1 rounded-pill">
            <i className="bi bi-cart"></i>your cart is Empty
        </span>
    </button>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart({totalUniqueItems})total Items:({totalIteams})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} />
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>{item.price}</td>
                                        <td>Quantity({item.quantity})</td>
                                        <td>
                                            <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className="btn btn-danger ms-2"
                                                onClick={() => removeItem(item.id)}>Remove Iteam</button>

                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total price:{cartTotal}</h2>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger" m-2
                        onClick={() => emptyCart()}>clear cart</button>
                    <button className="btn btn">buy now</button>
                </div>
            </div>
        </section>
    );
};
export default Cart;