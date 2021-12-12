import dataObject from './data-provider/data-object.js';

//shorthand
export function $(id) {
    return document.getElementById(id);
}

export function create_cart_item(cat, type, productId, quantity, size) {
    return {
        cat,
        type,
        productId,
        quantity,
        size
    };
}

export function get_product(category, type, productId) {
    return dataObject[category].categories
        .find(cat => cat.keyword === type).products.find(prod => prod.productId === productId);
}

//getting object from localstorage
export function get_local_storage_object() {
    let master_obj = localStorage.getItem('ecommerce_obj');
    return master_obj ? JSON.parse(master_obj) : {};
}

//to save inputs from website to localstorage
export function save_object_to_local_storage(master_obj) {
    localStorage.setItem('ecommerce_obj', JSON.stringify(master_obj))
}

export function get_image_path_for_a_type(cat, type) {
    return dataObject[cat].categories.find((cat) => cat.keyword === type).imagePath;
}


//Akash
export const pwd_salt = "!@#$%^&*&^%$#@!@#$%^1234";