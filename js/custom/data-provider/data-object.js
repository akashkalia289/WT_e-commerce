const dataObject = {
    men: {
        title: 'Men',
        carosuel: {
            pictures: [] // 5 photos Dimesions: 720 * 500(Dekh laeo Multiple)
        },
        categories: [
            {
                title: 'Jean',
                keyword: 'jean',
                imagePath: './images/categories/men\'s/jeans/',
                products: [
                    {
                        productId: 1,
                        title: 'Slant Pocket Jeans',
                        short_desc: 'Wrangler Mens Relaxed Fit Comfort Flex Waist Jean with signature details',
                        price: '38',
                        showcase: 'showcase.png',
                        subImagePath: 'product1/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Dark Wash'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Denim'
                            },
                            {
                                title: 'Composition',
                                value: '98% Cotton, 2% Spandex'
                            },
                            {
                                title: 'Fabric',
                                value: 'Slight Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 2,
                        title: 'Guys Solid Cargo Jeans',
                        short_desc: 'Signature by Levi Strauss & Co. Gold Label Mens Regular Fit Jeans Jeans',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product2/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Skinny'
                            },
                            {
                                title: 'Material',
                                value: 'Denim'
                            },
                            {
                                title: 'Composition',
                                value: '90% Cotton, 10% Spandex'
                            },
                            {
                                title: 'Fabric',
                                value: 'Slight Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 3,
                        name: 'Silky Denim',
                        price: '$30',
                        picture: 'silky_denim_price_$30.jpg'
                    },
                    {
                        productId: 4,
                        name: 'Stretch Slim',
                        price: '$40',
                        picture: 'stretch_slim_price_$40.jpg'
                    },
                    {
                        productId: 5,
                        name: 'The Strategist',
                        price: '$22',
                        picture: 'the_strategist_price_$22.jpg'
                    }
                ]
            },
            {
                title: 'Jackets',
                imagePath: './images/categories/men\'s/jeans/',
                products: [
                    {
                        productId: 1,
                        name: 'Blue-Bootcut',
                        price: '$38',
                        picture: 'blue-bootcut_price_$38.jpg'
                    },
                    {
                        productId: 2,
                        name: 'Light Blue',
                        price: '$35',
                        picture: 'light_blue_price_$35.jpg'
                    },
                    {
                        productId: 3,
                        name: 'Silky Denim',
                        price: '$30',
                        picture: 'silky_denim_price_$30.jpg'
                    },
                    {
                        productId: 4,
                        name: 'Stretch Slim',
                        price: '$40',
                        picture: 'stretch_slim_price_$40.jpg'
                    },
                    {
                        productId: 5,
                        name: 'The Strategist',
                        price: '$22',
                        picture: 'the_strategist_price_$22.jpg'
                    }
                ]
            }
        ]
    },
    women: {

    },
    boys: {

    },
    girls: {

    }
};

export default dataObject;
