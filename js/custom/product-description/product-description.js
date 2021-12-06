import dataObject from '../data-provider/data-object.js';
import { $, create_cart_item, get_local_storage_object, get_product, save_object_to_local_storage } from '../helpers.js';

export function load_product() {
    const selectedCat = String(new URLSearchParams(window.location.search).get('cat'));
    const selectedType = String(new URLSearchParams(window.location.search).get('type'));
    const productId = Number(new URLSearchParams(window.location.search).get('productId'));
    const typeProducts = dataObject[selectedCat].categories.find((cat) => cat.keyword === selectedType);
    const selectedProduct = get_product(selectedCat, selectedType, productId);
    $('product-title').innerHTML = `${selectedProduct.title} - ${selectedProduct.short_desc}`;
    let carosuel_images = '';
    selectedProduct.pictures.forEach((img, index) => {
        carosuel_images += `<div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${String(typeProducts.imagePath) + String(selectedProduct.subImagePath) + String(img)}" class="d-block w-100"
            alt="...">
    </div>`;
    });
    $('carosuel-items').innerHTML = carosuel_images;
    $('product-price').innerHTML = `$${selectedProduct.price}`;
    let product_details = '';
    selectedProduct.details.forEach(detail => {
        product_details += `<div class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
                <h6 class="mb-0">${detail.title}</h6>
                <p class="mb-0 opacity-75 ">${detail.value}</p>
            </div>
        </div>
    </div>`
    });
    $('product-details').innerHTML = product_details;
}

export function manipulate_quantity(action) {
    let quantity = Number($('quantity').value);
    if (action === 'decrease' && Number(quantity) > 1) {
        $('quantity').value = --quantity;
    } else if (action === 'increase') {
        $('quantity').value = ++quantity;
    } else {
        alert('You have to buy atleast one piece!')
    }
}

export function add_to_cart() {
    const master_obj = get_local_storage_object();
    const selectedCat = String(new URLSearchParams(window.location.search).get('cat'));
    const selectedType = String(new URLSearchParams(window.location.search).get('type'));
    const productId = Number(new URLSearchParams(window.location.search).get('productId'));
    const cart_items = master_obj['cart'];
    if (cart_items) {
        cart_items[cart_items.length] =
            create_cart_item(selectedCat, selectedType, productId, $('quantity').value, $('size').value);
    } else {
        master_obj['cart'] = [];
        master_obj['cart'].push(
            create_cart_item(selectedCat, selectedType, productId, $('quantity').value, $('size').value));
    }
    save_object_to_local_storage(master_obj);

}
