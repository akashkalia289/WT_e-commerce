import dataObject from '../data-provider/data-object.js';
import {$} from './../helpers.js';

// to display categories
export function loadCategory() {
    // getting category from URL query param
    const selectedCat = String(new URLSearchParams(window.location.search).get('cat'));
    // getting categories of the type
    const categoryObject = dataObject[selectedCat]['categories'];
    // loading carosuel
    loadCarosuel(dataObject[selectedCat]['carosuel']);

    // accessing HTML Node from the document
    let htmlElement = $("categories");

    // initializing a local variable
    let htmlString = '';

    // Iterating over all the categories of the selected type and appending to the HTML string
    for (let j = 0; j < categoryObject.length; j++) {
        htmlString += `
        <div class="container my-3">
                <div class="row text-center">
                    <div class="col-6">
                        <h3>${categoryObject[j]['title']}</h3>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-outline-dark">Show More</button>
                    </div>
                </div>
            </div>
            `;
        for (let i = 0; i < Math.ceil(categoryObject[j]['products'].length / 3); i++) {
            htmlString += `<div class="container my-3">
                    <div class="row justify-content-center text-center">`;
            for (let k = 3 * i; k < (3 * i) + 3; k++) {
                if (categoryObject[j]['products'][k]) {
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
    }

    // Setting innerHTML of the HTML Node to the HTML string
    htmlElement.innerHTML = htmlString;
}

//show carosuel
function loadCarosuel(carItems) {
    // getting image path by destructring
    const {path} = carItems;
    // getting pictures by destructring
    const {pictures} = carItems;
    // local variable for HTML string
    let htmlString = '';
    // looping over the pictures to show to the user
    pictures.forEach((element, index) => {
        htmlString += `<div class="carousel-item${index === 0 ? " active" : ""}">
                <img src="${path + element}" class="d-block w-100" alt="...">
            </div>`
    });
    // setting the string to the Node
    $('carousel-items').innerHTML = htmlString;
}