import dataObject from './../data-provider/data-object.js';
import { $, get_product_details_by_product_id } from './../helpers.js';

//global search implementation
export function global_search() {
    // get query param from the URL
    const searchValue = String(new URLSearchParams(window.location.search).get('query')).toLowerCase();
    // if present then the search will be executed
    // else message will be shown
    if (searchValue) {
        // declaring local variables
        const data_object = dataObject;
        const searchResult = {};
        const finalSeggrigation = new Map();
        // search product from the JS object
        Object.keys(dataObject).forEach((cat) => {
            if (data_object[cat]['categories']) {
                data_object[cat]['categories'].forEach((type) => {
                    searchResult[data_object[cat]['title'] + '~' + type['title']] = type['products'].filter((product) => {
                        return String(type.keyword).toLowerCase() === searchValue || String(product.title).toLowerCase().includes(searchValue) || String(product.short_desc).toLowerCase().includes(searchValue)
                    });
                })
            }
        });

        // Seggregate the search items based on type and category
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
        // show searched items on the screen
        load_search_items_on_screen(finalSeggrigation)
    } else {
        alert('Please enter a valid search query!');
    }
}

export function global_search_handler() {
    // getting the input on the index page
    const searchValue = String($('search-inpt').value).toLowerCase();
    // if there is an input in the text field
    // User will be navigated to global-search page
    // else message will be shown
    if (searchValue && String(searchValue).trim().length > 0) {
        // window.location.href = `https://wt-ecommerce.netlify.app/global-search.html?query=${searchValue}`
        window.location.href = `http://localhost/e-commerce_WT/v2/global-search.html?query=${searchValue}`
    } else {
        alert('Please enter a product to search!');
    }
}

function load_search_items_on_screen(searchedItems) {
    // getting HTML node from the DOM
    let htmlElement = $("search-results");
    // initializing the HTML string
    let htmlString = '';
    // traversing array to show searched items on the screen
    Array.from(searchedItems.keys()).forEach((typeKey) => {
        Array.from(searchedItems.get(typeKey).keys()).forEach((catKey) => {
            searchedItems.get(typeKey).get(catKey).forEach((product) => {
                console.log(get_product_details_by_product_id(product.productId));
            })

            return;
            htmlString += `
            <div class="container my-3">
                    <div class="row text-center">
                        <div class="col-6">
                            <h3>${catKey}</h3>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-outline-dark">Show More</button>
                        </div>
                    </div>
                </div>
                `;
            for (let i = 0; i < Math.ceil(searchedItems[typeKey][catKey].length / 3); i++) {
                htmlString += `<div class="container my-3">
                                <div class="row justify-content-center text-center">`;
                for (let k = 3 * i; k < (3 * i) + 3; k++) {
                    if (searchedItems[typeKey][catKey][k]) {
                        htmlString += `
                            <div class="col-md-3 col-sm-12 ml-1">
                                    <div class="card" style="width: 16rem;">
                                        <img src=${String(categoryObject[j]['imagePath']) + String(categoryObject[j]['products'][k]['subImagePath']) + String(categoryObject[j]['products'][k]['showcase'])} class="card-img-top"
                                            height="200px" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                            <a href="./product-description.html?cat=${selectedCat}&type=${String(categoryObject[j]['keyword'])}&productId=${categoryObject[j]['products'][k]['productId']}" class="link-info">
                                                ${categoryObject[j]['products'][k]['title']}
                                            </a>
                                            </h5>
                                            <p class="card-text">
                                            ${String(categoryObject[j]['products'][k]['short_desc'])}
                                            </p>
                                            <a href="./product-description.html?cat=${selectedCat}&type=${String(categoryObject[j]['keyword'])}&productId=${categoryObject[j]['products'][k]['productId']}" class="btn btn-primary">More</a>
                                        </div>
                                    </div>
                                </div>`;
                    }
                }
                htmlString += `
                            </div>
                            </div>
                                    `;
            }
            htmlString += `<div class="container">
                    <hr />
                </div>
                <div class="container">
                    <hr />
                </div>`;
        });
    });
    // showing the prepared string onto the screen
    htmlElement.innerHTML = htmlString;
}