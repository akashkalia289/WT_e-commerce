import dataObject from './../data-provider/data-object.js';
import { $ } from './../helpers.js';

//todo
//global search implementation
export function global_search() {
    const data_object = dataObject;
    const searchValue = String($('search-inpt').value).toLowerCase();
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
}