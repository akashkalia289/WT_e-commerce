import { $, get_image_path_for_a_type, get_local_storage_object, get_product, save_object_to_local_storage } from './../helpers.js';

// to display the shopping cart 
export function load_shopping_cart() {
    const master_obj = get_local_storage_object();
    const shopping_cart_items = {}
    if (master_obj['cart']) {
        let totalPrice = 0;
        const cart_items = master_obj['cart'];
        if (cart_items.length > 0) {
            let cartItemsHTML = '';
            //rendering each cart item using info in cart_items object
            cart_items.forEach((item, index) => {
                shopping_cart_items[item.productId] = {
                    quantity: item.quantity,
                    size: item.size,
                    product: get_product(item.cat, item.type, item.productId)
                };
                const itemPrice = Number(item.quantity) * Number(shopping_cart_items[item.productId].product.price);
                totalPrice += itemPrice;
                cartItemsHTML +=
                    `<div class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <img src=${String(get_image_path_for_a_type(item.cat, item.type)) + String(shopping_cart_items[item.productId].product.subImagePath) + shopping_cart_items[item.productId].product.showcase} alt="twbs" width="100" height="100"
                        class="flex-shrink-0 mx-5">
                    <div class="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 class="mb-0">${shopping_cart_items[item.productId].product.title}</h6>
                            <p class="mb-0 opacity-75">${shopping_cart_items[item.productId].product.short_desc}</p>
                        </div>
                        <div>
                            <h6 class="mb-0">${item.quantity}</h6>
                            <small class="opacity-50 text-nowrap">Quantity</small>
                        </div>
                        <div>
                            <h6 class="mb-0">${item.size.toUpperCase()}</h6>
                            <small class="opacity-50 text-nowrap">Size</small>
                        </div>
                        <div>
                            <h6 class="mb-0">${itemPrice}</h6>
                            <small class="opacity-50 text-nowrap">Price</small>
                        </div>
                        <div>
                            <button class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>`;
            });
            $('total-price').hidden = false;
            $('cart-items').innerHTML = cartItemsHTML;
            $('total-price').innerHTML = `Total Price: <strong>${totalPrice}</strong>`;
            $('checkout-btn').hidden = false;
        } else {
            $('cart-items').innerHTML = 'No Items in Cart, Please continue shopping!';
            $('total-price').hidden = true;
            $('checkout-btn').hidden = true;
        }

    } else {
        $('cart-items').innerHTML = 'No Items in Cart, Please continue shopping!';
        $('total-price').hidden = true;
        $('checkout-btn').hidden = true;
    }
}

// to remove the items from the cart
export function removeCartItem(index) {
    const master_obj = get_local_storage_object();
    const cart_items = master_obj['cart'];
    cart_items.splice(index, 1);
    save_object_to_local_storage(master_obj);
    location.reload();
}

export function proceed_to_checkout() {
    const master_obj = get_local_storage_object();
    const {loggedIn} = master_obj;
    if (loggedIn) {
        window.location.href="./checkout.html";
    } else {
        window.location.href="./sign-in.html";
    }
}