import React, { useEffect } from "react";
import Heading from "../common/Heading";
import { menu } from "../data/Item";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeItem,
  updateQuantity,
} from "../../redux/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export default function Cart() {
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliverCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };
  const emptyCartMsg = (
    <h1 className="container text-center p-4">Ваша корзина пуста :(</h1>
  );
  const emptyCartMsgtwo = (
   <p className="container text-center p-4">Ваша корзина пуста :( <br></br> Исправить это просто: выберите в каталоге интересующий вас товар и нажмите на кнопку "В корзину" </p>
  );

  const publishableKey =
    "pk_test_51OcmIbCxCPSowgrvLVfa9jUamXTHsITT2UNGG7Ojx60KkvMcQakUBVZtKgzE5TmXMJAlarNwxuzFQ4e0r7ZNcGrW00dnVF5R6o";

  const onToken = (token) => {
    // Handle the token (send it to your server for further processing)
    console.log(token);
  };
  return (
    <>
      <Heading title="Корзина" subtitle="Главная" heading="Корзина" />

      {cartProducts.length === 0 ? (
        emptyCartMsg ??
        emptyCartMsgtwo
      ) : (
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Товар</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Сумма</th>
                    <th scope="col">Удалить</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={cartProduct.img}
                            alt={cartProduct.img}
                            style={{ width: 100 }}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.name}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.price}</p>
                      </td>
                      <td>
                        <div
                          className="input-group quantity mt-4"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                decreaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-minus rounded-circle bg-light border"
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <span className="form-control form-control-sm text-center border-0">
                            {cartProduct.quantity || 1}
                          </span>
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                increaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-plus rounded-circle bg-light border"
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.totalPrice} ₽</p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(cartProduct.id)}
                          className="btn btn-md rounded-circle bg-light border mt-4"
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8"></div>
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      Корзина <span className="fw-normal">Товаров</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4 me-4">
    <h5 className="mb-0">Сумма:</h5>
    <p className="mb-0">₽&nbsp;{totalAmount}</p>
</div>
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0 me-4">Доставка</h5>
                      <div>
                        <p className="mb-0">₽{deliverCharge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4">Сумма</h5>
                    <p className="mb-0 pe-4">₽ {totalAmount + deliverCharge}</p>
                  </div>
                  {/*  <button
                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button> */}
                  <StripeCheckout
                    token={onToken}
                    stripeKey={publishableKey}
                    amount={100 * totalAmount} // Amount in cents
                    name="MD"
                    currency="₽"
                    label="Заказать"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
