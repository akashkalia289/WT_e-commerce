import dataObject from '../data-provider/data-object.js';
import { $, create_cart_item, get_local_storage_object, get_product, save_object_to_local_storage } from '../helpers.js';

// to show profuct in the product details page
export function load_product() {
    // Getting all the params from the URL
    const selectedCat = String(new URLSearchParams(window.location.search).get('cat'));
    const selectedType = String(new URLSearchParams(window.location.search).get('type'));
    const productId = Number(new URLSearchParams(window.location.search).get('productId'));

    // getting categories of the selected type
    const typeProducts = dataObject[selectedCat].categories.find((cat) => cat.keyword === selectedType);

    // getting product using the helper method
    const selectedProduct = get_product(selectedCat, selectedType, productId);

    // Setting the Title of the product onto the screen by concatenating the title and short description of the Product
    $('product-title').innerHTML = `${selectedProduct.title} - ${selectedProduct.short_desc}`;
    let carosuel_images = '';

    // Appending the carosuel of the Product Images to the HTML string
    selectedProduct.pictures.forEach((img, index) => {
        carosuel_images += `<div class="carousel-item ${index === 0 ? 'active' : ''}">
        <img src="${String(typeProducts.imagePath) + String(selectedProduct.subImagePath) + String(img)}" class="d-block w-100"
            alt="...">
    </div>`;
    });

    // Setting the HTML String for carosuel to the HTML Node
    $('carosuel-items').innerHTML = carosuel_images;

    // Setting the Product price to the HTML Node
    $('product-price').innerHTML = `$${selectedProduct.price}`;

    // Initializing a variable for showing product details
    let product_details = '';

    // Preparing the variable to concat the product details
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

    // Setting the prepared String to the screen
    $('product-details').innerHTML = product_details;
}

//increase-decrease items in the cart
export function manipulate_quantity(action) {
    // getting the value from the document
    let quantity = Number($('quantity').value);
    // if decrease button is clicked the quantity will be dropped
    // if increase button is clicked the quantity will be raised
    // if decrease button is clicked at the value of 1, a message will be shown to the user
    if (action === 'decrease' && Number(quantity) > 1) {
        $('quantity').value = --quantity;
    } else if (action === 'increase') {
        $('quantity').value = ++quantity;
    } else {
        alert('You have to buy atleast one piece!')
    }
}

//adding items to the cart 
export function add_to_cart() {
    // getting master object from the local storage
    const master_obj = get_local_storage_object();

    // accessing URL query params
    const selectedCat = String(new URLSearchParams(window.location.search).get('cat'));
    const selectedType = String(new URLSearchParams(window.location.search).get('type'));
    const productId = Number(new URLSearchParams(window.location.search).get('productId'));

    // looking for cart items in the array
    const cart_items = master_obj['cart'];

    // in case cart items present, the cart item is pushed at the last
    // else a new array is initialized and item is added to the array and array is stored in master object
    if (cart_items) {
        cart_items[cart_items.length] =
            create_cart_item(selectedCat, selectedType, productId, $('quantity').value, $('size').value);
    } else {
        master_obj['cart'] = [];
        master_obj['cart'].push(
            create_cart_item(selectedCat, selectedType, productId, $('quantity').value, $('size').value));
    }
    // save master object to the local storage
    save_object_to_local_storage(master_obj);
    // show confirmation message to the user
    $('modal-btn').click();

}
