import dataObject from './../data-provider/data-object.js';
import { $ } from './../helpers.js';

//todo
//global search implementation
export function global_search() {
    const searchValue = String(new URLSearchParams(window.location.search).get('query'));
    if (searchValue) {
        const data_object = dataObject;
        const searchResult = {};
        let minPrice = 1000000;
        let maxPrice = 0;
        const finalSeggrigation = new Map();
        Object.keys(dataObject).forEach((cat) => {
            if (data_object[cat]['categories']) {
                data_object[cat]['categories'].forEach((type) => {
                    searchResult[data_object[cat]['title'] + '~' + type['title']] = type['products'].filter((product) => {
                        return String(product.title).toLowerCase().includes(searchValue) || String(product.short_desc).toLowerCase().includes(searchValue)
                    });
                })
            }
        });
        Object.keys(searchResult).forEach((key) => {
            if (searchResult[key].length > 0) {
                if (finalSeggrigation.has(key.split("~")[0])) {
                    finalSeggrigation.get(key.split("~")[0]).set(key.split("~")[1], searchResult[key])
                } else {
                    const cat = new Map();
                    cat.set(key.split("~")[1], searchResult[key]);
                    finalSeggrigation.set(key.split("~")[0], cat);
                }
            }
        });
        console.log(finalSeggrigation)
    } else {
        alert('Please enter a valid search query!');
    }
}

export function global_search_handler() {
    const searchValue = String($('search-inpt').value).toLowerCase();
    if (searchValue && String(searchValue).trim().length > 0) {
        window.location.href = `https://wt-ecommerce.netlify.app/global-search.html?query=${searchValue}`
    } else {
        alert('Please enter a product to search!');
    }
}