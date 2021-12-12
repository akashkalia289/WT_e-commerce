import dataObject from '../data-provider/data-object.js';
import {$} from './../helpers.js';

export function loadCategory() {
    const selectedCat = String(new URLSearchParams(window.location.search).get('cat'));
    const categoryObject = dataObject[selectedCat]['categories'];
    loadCarosuel(dataObject[selectedCat]['carosuel']);
    let htmlElement = $("categories");
    let htmlString = '';
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


    htmlElement.innerHTML = htmlString;
}

function loadCarosuel(carItems) {
    const {path} = carItems;
    const {pictures} = carItems;
    let htmlString = '';
    pictures.forEach((element, index) => {
        htmlString += `<div class="carousel-item${index === 0 ? " active" : ""}">
                <img src="${path + element}" class="d-block w-100" alt="...">
            </div>`
    });
    $('carousel-items').innerHTML = htmlString;
}