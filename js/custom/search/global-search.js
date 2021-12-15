import dataObject from './../data-provider/data-object.js';
import { $ } from './../helpers.js';

//todo
//global search implementation
export function global_search() {
    const selectedCat = String(new URLSearchParams(window.location.search).get('query'));
    if (selectedCat) {
        const data_object = dataObject;
        const searchResult = {};
        Object.keys(dataObject).forEach((cat) => {
            if (data_object[cat]['categories']) {
                data_object[cat]['categories'].forEach((type) => {
                    searchResult[data_object[cat]['title'] + '~' + type['title']] = type['products'].filter((product) => {
                        return String(product.title).toLowerCase().includes(searchValue) || String(product.short_desc).toLowerCase().includes(searchValue)
                    });
                })
            }
        });
        console.table(searchResult);
    } else {
        alert('Please enter a valid search query!');
    }
}

export function global_search_handler() {
    const searchValue = String($('search-inpt').value).toLowerCase();
    if (searchValue && String(searchValue).trim().length > 0) {
        window.location.href = `https://wt-ecommerce.netlify.app/global-search.html?query=${searchValue}`
    } else {
        alert('Please enter a product to srarch!');
    }
}