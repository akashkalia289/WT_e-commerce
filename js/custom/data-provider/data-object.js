//raw json data
const dataObject = {
    men: {
        title: 'Men',
        carosuel: {
            path: './images/categories/men\'s/\carosuel/',
            pictures: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'] // 5 photos Dimesions: 720 * 500(Dekh laeo Multiple)
        },
        categories: [
            {
                title: 'Jeans',
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
                        title: 'Guys Graphic Print Ripped Jeans',
                        short_desc: 'Liuhond Mens Fashion Ripped Straight Holes Hip Hop Biker Stretchy Slim Jeans Pants',
                        price: '49',
                        showcase: 'showcase.png',
                        subImagePath: 'product3/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Light Wash'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 4,
                        title: 'Men Scarf Print Letter Embroidery Jeans',
                        short_desc: 'LONGBIDA Men ripped Straight Holes Hip Hop Biker Stretchy Slim Fashion Jeans',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product4/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
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
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 5,
                        title: 'Men Slant Pocket Solid Jeans',
                        short_desc: 'Dickies Men Relaxed Straight-fit Lightweight Duck Carpenter Jean comfort with fine line',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product5/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Khaki'
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
                                value: '95% Cotton, 5% Elastane'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Jackets',
                keyword: 'jackets',
                imagePath: './images/categories/men\'s/jackets/',
                products: [
                    {
                        productId: 6,
                        title: 'SHEIN Patched Striped Trim Wool-Mix Jacket',
                        short_desc: ' Mens Long Sleeve Quilted Lined Flannel Shirt Jacket W/ Hood Soft And Comfortable ',
                        price: '108',
                        showcase: 'showcase1.png',
                        subImagePath: 'product6/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 7,
                        title: 'Men Flap Pocket Zip Up Drawstring PU Jacket',
                        short_desc: ' Cotrasen Mens Winter Jacket Casual Thicken Bomber  with Zipper  ',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product7/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '65% Polyester, 35% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 8,
                        title: 'Men Letter & Graphic Print Zip-up Bomber Jacket',
                        short_desc: ' Fashion style Harley Davidson Motorcycle Goldberg  Biker Real Jacket',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product8/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 9,
                        title: 'Men Zip Up Pocket Patched Bomber Jacket',
                        short_desc: ' EKLENTSON Mens Cotton Lightweight Multi Pockets Zip Front Stand   ',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product9/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Army Green'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 10,
                        title: 'Men Buffalo Print Drop Shoulder Drawstring  Jacket',
                        short_desc: ' Mens Button Down Shawl Irish Pattern Knit Cardigan Jacquard Print  ',
                        price: '30',
                        showcase: 'showcase.png',
                        subImagePath: 'product10/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Shearling'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    
                ]
                

            },
            {
                title: 'Shirts',
                keyword: 'shirts',
                imagePath: './images/categories/men\'s/shirts/',
                products: [
                    {
                        productId: 11,
                        title: 'Men Tartan Flap Pocket Shirt',
                        short_desc: 'Wrangler Mens Authentics Long Sleeve Quilted Lined Fine',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product11/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
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
                                value: '100% Cotton, 2% polyester'
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
                        productId: 12,
                        title: 'Corduroy Shirt Without Tee',
                        short_desc: 'Wrangler Mens Authentics Long Sleeve Sherpa Lined Flannel Shirt',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product12/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 13,
                        title: 'Men Plaid Button Through Shirt Without Tee',
                        short_desc: 'Liuhond Mens Fashion Ripped Straight Holes Hip Hop Biker Stretchy Shirt',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product13/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Khaki'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 14,
                        title: 'Men Striped Button Up Shirt',
                        short_desc: 'Wrangler Mens Authentics Long Sleeve Quilted Lined',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product14/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Blue'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 15,
                        title: 'Men Floral Button Up Shirt Without Tee',
                        short_desc: 'Wrangler Mens Authentics Long Sleeve Quilted Lined Fine',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product15/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black and White'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Tees',
                keyword: 't-shirts',
                imagePath: './images/categories/men\'s/t-shirts/',
                products: [
                    {
                        productId: 16,
                        title: 'Trim Polo Shirt',
                        short_desc: 'Wrangler Mens Authentics Long Sleeve Quilted Lined Fine',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product16/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton, 2% polyester'
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
                        productId: 17,
                        title: 'Men Contrast Piping ',
                        short_desc: 'Hanes Mens Short Sleeve X-Temp W/FreshIQ Polo ',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product17/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'red'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 18,
                        title: 'Men Graphic Print',
                        short_desc: 'KUYIGO Mens Classic Dry Fit Long Sleeve Golf Polo Shirts Casual Basic Designed with Cotton Shirts',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product18/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'white'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 19,
                        title: 'HEIN Men Floral Print Raglan Sleeve  ',
                        short_desc: 'Wrangler Mens Authentics Long Sleeve Quilted Lined',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product19/',
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
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 20,
                        title: 'Men Contrast Piping ',
                        short_desc: 'anes Mens Short Sleeve X-Temp W/FreshIQ Polo',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product20/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black and White'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },

        

        ]
    },
    women: {
        title: 'Women',
        carosuel: {
            path: './images/categories/women\'s/\carosuel/',
            pictures: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'] // 5 photos Dimesions: 720 * 500(Dekh laeo Multiple)
        },
        categories: [
            {
                title: 'Dresses',
                keyword: 'dresses',
                imagePath: './images/categories/women\'s/dresses/',
                products: [
                    {
                        productId: 21,
                        title: 'Floral Mesh Belted Surplice Front Dress',
                        short_desc: 'WNEEDU Womens 3/4 Sleeve Loose Casual Long Maxi Dresses',
                        price: '38',
                        showcase: 'showcase.png',
                        subImagePath: 'product21/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'grey'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
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
                        productId: 22,
                        title: 'equin Halter Fringe Front Bodycon Dress',
                        short_desc: 'Women Summer Boho Wrap Dress V Neck High Split Casual Dresses with lace',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product22/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'golden'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Skinny'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
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
                        productId: 23,
                        title: 'Guipure Lace Insert Lantern Sleeve Chiffon Dress',
                        short_desc: 'Evenings Womens Short Shift Dress with Embellished Illu',
                        price: '49',
                        showcase: 'showcase.png',
                        subImagePath: 'product23/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Light plain'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 24,
                        title: 'Gingham Scoop Neck Belted Fit & Flare Dress',
                        short_desc: 'Women Casual V Neck Ruched Long Sleeve 2021 Shirt Short Mini Dresses， S-2XL',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product24/',
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
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Denim'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 25,
                        title: 'Tropical Print Halter Neck Maxi Dress',
                        short_desc: 'womens Comfortable And Plus Size Evening Party Maxi Dress',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product25/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Khaki'
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
                                value: '95% Cotton, 5% Elastane'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Jackets',
                keyword: 'jackets',
                imagePath: './images/categories/women\'s/jackets/',
                products: [
                    {
                        productId: 26,
                        title: 'SHEIN Patched Striped Trim Wool-Mix Jacket',
                        short_desc: ' Mens Long Sleeve Quilted Lined Flannel Shirt Jacket W/ Hood Soft And Comfortable ',
                        price: '108',
                        showcase: 'showcase.png',
                        subImagePath: 'product26/',
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
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 27,
                        title: 'woMen Flap Pocket Zip Up Drawstring PU Jacket',
                        short_desc: ' Cotrasen woens Winter Jacket Casual Thicken Bomber  with Zipper  ',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product27/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'pink'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '65% Polyester, 35% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 28,
                        title: 'woMen Letter & Graphic Print Zip-up Bomber Jacket',
                        short_desc: ' Fashion style Harley Davidson Motorcycle Goldberg  Biker Real Jacket',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product28/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 29,
                        title: 'Women Zip Up Pocket Patched Bomber Jacket',
                        short_desc: ' EKLENTSON woMens Cotton Lightweight Multi Pockets Zip Front Stand   ',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product29/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 30,
                        title: 'Women Buffalo Print Drop Shoulder Drawstring Jacket',
                        short_desc: ' woMens Button Down Shawl Irish Pattern Knit Cardigan Jacquard Print  ',
                        price: '30',
                        showcase: 'showcase.png',
                        subImagePath: 'product30/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Shearling'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    
                ]
                

            },
            {
                title: 'Tops',
                keyword: 'tops',
                imagePath: './images/categories/women\'s/tops/',
                products: [
                    {
                        productId: 31,
                        title: 'woMen Tartan Flap Pocket Shirt',
                        short_desc: 'Wrangler woMens Authentics Long Sleeve Quilted Lined Fine',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product31/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
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
                                value: '100% Cotton, 2% polyester'
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
                        productId: 32,
                        title: 'Corduroy Shirt Without Tee',
                        short_desc: 'Wrangler woMens Authentics Long Sleeve Sherpa Lined Flannel Shirt',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product32/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 33,
                        title: 'woMen Plaid Button Through Shirt Without Tee',
                        short_desc: 'Liuhond woMens Fashion Ripped Straight Holes Hip Hop Biker Stretchy Shirt',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product33/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 34,
                        title: 'woMen Striped Button Up Shirt',
                        short_desc: 'Wrangler woMens Authentics Long Sleeve Quilted Lined',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product34/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 35,
                        title: 'woMen Floral Button Up Shirt Without Tee',
                        short_desc: 'Wrangler woMens Authentics Long Sleeve Quilted Lined Fine',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product35/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Jeans',
                keyword: 'jeans',
                imagePath: './images/categories/women\'s/jeans/',
                products: [
                    {
                        productId: 36,
                        title: 'High Waisted Straight Leg Jeans',
                        short_desc: 'Gloria Vanderbilt Womens Amanda Classic High Rise Taper',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product36/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'grey'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton, 2% polyester'
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
                        productId: 37,
                        title: ' Slant Pocket Straight Leg Jeans',
                        short_desc: ' Gloria Vanderbilt Womens Classic Fit Amanda Straight Leg Denim Jea',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product37/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'blue'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 38,
                        title: 'High Waist Straight Leg Ripped Jeans',
                        short_desc: 'Vony Womens Fashion High Waisted Ripped Jeans Boyfriend Casual Baggy Straight Wide Leg Jeans Y2K Denim Pants for Women Girl ',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product38/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'blue'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 39,
                        title: ' High Waist Mom Jeans',
                        short_desc: 'Signature by Strauss & Co. Gold Label Womens Modern Straight Jeans',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product39/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Blue'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 40,
                        title: 'High Waisted Solid Jeans',
                        short_desc: 'Gloria Vanderbilt Womens Classic Tapered Amanda Jean',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product40/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'red'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },

        

        ]

    },
    boys: {
        title: 'Boys',
        carosuel: {
            path: './images/categories/boys\'s/\carosuel/',
            pictures: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'] // 5 photos Dimesions: 720 * 500(Dekh laeo Multiple)
        },
        categories: [
            {
                title: 'Jeans',
                keyword: 'jeans',
                imagePath: './images/categories/boys\'s/jeans/',
                products: [
                    {
                        productId: 46,
                        title: 'Slant Pocket Jeans',
                        short_desc: 'Wrangler boys Relaxed Fit Comfort Flex Waist Jean with signature details',
                        price: '38',
                        showcase: 'showcase.png',
                        subImagePath: 'product46/',
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
                        productId: 47,
                        title: 'Guys Solid Cargo Jeans',
                        short_desc: 'Signature by Levi Strauss & Co. Gold Label boys Regular Fit Jeans Jeans',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product47/',
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
                        productId: 48,
                        title: 'Guys Graphic Print Ripped Jeans',
                        short_desc: 'Liuhond boys Fashion Ripped Straight Holes Hip Hop Biker Stretchy Slim Jeans Pants',
                        price: '49',
                        showcase: 'showcase.png',
                        subImagePath: 'product48/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Light Wash'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 49,
                        title: 'boys Scarf Print Letter Embroidery Jeans',
                        short_desc: 'LONGBIDA boys ripped Straight Holes Hip Hop Biker Stretchy Slim Fashion Jeans',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product49/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
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
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 50,
                        title: 'Boys Slant Pocket Solid Jeans',
                        short_desc: 'Dickies boys Relaxed Straight-fit Lightweight Duck Carpenter Jean comfort with fine line',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product50/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Khaki'
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
                                value: '95% Cotton, 5% Elastane'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Jackets',
                keyword: 'jackets',
                imagePath: './images/categories/boys\'s/jackets/',
                products: [
                    {
                        productId: 41,
                        title: 'SHEIN Patched Striped Trim Wool-Mix Jacket',
                        short_desc: ' Boys Long Sleeve Quilted Lined Flannel Shirt Jacket W/ Hood Soft And Comfortable ',
                        price: '108',
                        showcase: 'showcase1.png',
                        subImagePath: 'product41/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 42,
                        title: 'BoysFlap Pocket Zip Up Drawstring PU Jacket',
                        short_desc: ' Cotrasen boys Winter Jacket Casual Thicken Bomber  with Zipper  ',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product42/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '65% Polyester, 35% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 43,
                        title: 'BoysLetter & Graphic Print Zip-up Bomber Jacket',
                        short_desc: ' Fashion style Harley Davidson Motorcycle Goldberg  Biker Real Jacket',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product43/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 44,
                        title: 'boys Zip Up Pocket Patched Bomber Jacket',
                        short_desc: ' EKLENTSON boys Cotton Lightweight Multi Pockets Zip Front Stand   ',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product44/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Army Green'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 45,
                        title: 'Boys Buffalo Print Drop Shoulder Drawstring  Jacket',
                        short_desc: ' Boys Button Down Shawl Irish Pattern Knit Cardigan Jacquard Print  ',
                        price: '30',
                        showcase: 'showcase.png',
                        subImagePath: 'product45/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Shearling'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    
                ]
                

            },
            {
                title: 'Shirts',
                keyword: 'shirts',
                imagePath: './images/categories/boys\'s/shirts/',
                products: [
                    {
                        productId: 51,
                        title: 'boys Tartan Flap Pocket Shirt',
                        short_desc: 'Wrangler boys Authentics Long Sleeve Quilted Lined Fine',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product51/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
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
                                value: '100% Cotton, 2% polyester'
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
                        productId: 52,
                        title: 'Corduroy Shirt Without Tee',
                        short_desc: 'Wrangler Boys Authentics Long Sleeve Sherpa Lined Flannel Shirt',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product52/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 53,
                        title: 'Boys Plaid Button Through Shirt Without Tee',
                        short_desc: 'Liuhond Boys Fashion Ripped Straight Holes Hip Hop Biker Stretchy Shirt',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product53/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Khaki'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 54,
                        title: 'Boys Striped Button Up Shirt',
                        short_desc: 'Wrangler boys Authentics Long Sleeve Quilted Lined',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product54/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Blue'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 55,
                        title: 'Boys Floral Button Up Shirt Without Tee',
                        short_desc: 'Wrangler Boys Authentics Long Sleeve Quilted Lined Fine',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product55/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black and White'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Suits',
                keyword: 'suits',
                imagePath: './images/categories/boys\'s/suits/',
                products: [
                    {
                        productId: 56,
                        title: 'Trim Polo Suit',
                        short_desc: 'Wrangler BOYS Authentics Long Sleeve Quilted Lined Fine',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product56/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton, 2% polyester'
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
                        productId: 57,
                        title: 'Boys Contrast Piping ',
                        short_desc: 'Hanes Boys Short Sleeve X-Temp W/FreshIQ Polo ',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product57/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'red'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 58,
                        title: 'Boys Graphic Print',
                        short_desc: 'KUYIGO Boys Classic Dry Fit Long Sleeve Golf Polo Suits Casual Basic Designed with Cotton Shirts',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product58/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'white'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 59,
                        title: 'HEIN boys Floral Print Raglan Sleeve  ',
                        short_desc: 'Wrangler boys Authentics Long Sleeve Quilted Lined',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product59/',
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
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 60,
                        title: 'Boys Contrast Piping ',
                        short_desc: 'anes Boys Short Sleeve X-Temp W/FreshIQ Polo',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product60/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black and White'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },

        

        ]

    },
    girls: {
        title: 'Girls',
        carosuel: {
            path: './images/categories/girls\'s/\carosuel/',
            pictures: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'] // 5 photos Dimesions: 720 * 500(Dekh laeo Multiple)
        },
        categories: [
            {
                title: 'Jeans',
                keyword: 'jean',
                imagePath: './images/categories/girls\'s/jeans/',
                products: [
                    {
                        productId: 61,
                        title: 'Slant Pocket Jeans',
                        short_desc: 'Wrangler girls Relaxed Fit Comfort Flex Waist Jean with signature details',
                        price: '38',
                        showcase: 'showcase.png',
                        subImagePath: 'product61/',
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
                        productId: 62,
                        title: 'Girlss Solid Cargo Jeans',
                        short_desc: 'Signature by Levi Strauss & Co. Gold Label girls Regular Fit Jeans Jeans',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product62/',
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
                        productId: 63,
                        title: 'Girls Graphic Print Ripped Jeans',
                        short_desc: 'Liuhond girls Fashion Ripped Straight Holes Hip Hop Biker Stretchy Slim Jeans Pants',
                        price: '49',
                        showcase: 'showcase.png',
                        subImagePath: 'product63/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Light Wash'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 64,
                        title: 'Scarf Print Letter Embroidery Jeans',
                        short_desc: 'LONGBIDA ripped Straight Holes Hip Hop Biker Stretchy Slim Fashion Jeans',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product64/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
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
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 65,
                        title: 'Slant Pocket Solid Jeans',
                        short_desc: 'Dickies Relaxed Straight-fit Lightweight Duck Carpenter Jean comfort with fine line',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product65/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Khaki'
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
                                value: '95% Cotton, 5% Elastane'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Jackets',
                keyword: 'jackets',
                imagePath: './images/categories/girls\'s/jackets/',
                products: [
                    {
                        productId: 66,
                        title: 'SHEIN Patched Striped Trim Wool-Mix Jacket',
                        short_desc: ' Long Sleeve Quilted Lined Flannel Shirt Jacket W/ Hood Soft And Comfortable ',
                        price: '108',
                        showcase: 'showcase.png',
                        subImagePath: 'product66/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 67,
                        title: 'Flap Pocket Zip Up Drawstring PU Jacket',
                        short_desc: ' Cotrasen Winter Jacket Casual Thicken Bomber  with Zipper  ',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product67/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '65% Polyester, 35% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 68,
                        title: 'Letter & Graphic Print Zip-up Bomber Jacket',
                        short_desc: ' Fashion style Harley Davidson Motorcycle Goldberg  Biker Real Jacket',
                        price: '69',
                        showcase: 'showcase.png',
                        subImagePath: 'product68/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 69,
                        title: ' Zip Up Pocket Patched Bomber Jacket',
                        short_desc: ' EKLENTSON Cotton Lightweight Multi Pockets Zip Front Stand   ',
                        price: '29',
                        showcase: 'showcase.png',
                        subImagePath: 'product69/',
                        pictures: [
                            '1.png', '2.png','3.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Army Green'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 70,
                        title: 'Buffalo Print Drop Shoulder Drawstring  Jacket',
                        short_desc: '  Button Down Shawl Irish Pattern Knit Cardigan Jacquard Print  ',
                        price: '30',
                        showcase: 'showcase.png',
                        subImagePath: 'product70/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Shearling'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non-Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    
                ]
                

            },
            {
                title: 'Tops',
                keyword: 'tops',
                imagePath: './images/categories/girls\'s/tops/',
                products: [
                    {
                        productId: 71,
                        title: 'Tartan Flap Pocket Shirt',
                        short_desc: 'Wrangler Authentics Long Sleeve Quilted Lined Fine',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product71/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
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
                                value: '100% Cotton, 2% polyester'
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
                        productId: 72,
                        title: 'Corduroy Shirt Without Tee',
                        short_desc: 'Wrangler girls Authentics Long Sleeve Sherpa Lined Flannel Shirt',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product72/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Multicolor'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 73,
                        title: 'Plaid Button Through Shirt Without Tee',
                        short_desc: 'Liuhond girlsFashion Ripped Straight Holes Hip Hop Biker Stretchy Shirt',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product73/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Khaki'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 74,
                        title: 'triped Button Up Shirt',
                        short_desc: 'Wrangler girlsAuthentics Long Sleeve Quilted Lined',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product74/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Blue'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 75,
                        title: 'Floral Button Up Shirt Without Tee',
                        short_desc: 'Wrangler Authentics Long Sleeve Quilted Lined Fine',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product75/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black and White'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'Polyester'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Dresses',
                keyword: 'dresses',
                imagePath: './images/categories/girls\'s/dresses/',
                products: [
                    {
                        productId: 76,
                        title: 'Trim Polo Shirt',
                        short_desc: 'Wrangler  Authentics Long Sleeve Quilted Lined Fine',
                        price: '18',
                        showcase: 'showcase.png',
                        subImagePath: 'product76/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'black'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '100% Cotton, 2% polyester'
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
                        productId: 77,
                        title: 'Contrast Piping ',
                        short_desc: 'Hanes Short Sleeve X-Temp W/FreshIQ Polo ',
                        price: '39',
                        showcase: 'showcase.png',
                        subImagePath: 'product77/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'red'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular fit'
                            },
                            {
                                title: 'Material',
                                value: 'Corduroy'
                            },
                            {
                                title: 'Composition',
                                value: '100% Polyester'
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
                        productId: 78,
                        title: 'Girls Graphic Print',
                        short_desc: 'KUYIGO Classic Dry Fit Long Sleeve Golf Polo Shirts Casual Basic Designed with Cotton Shirts',
                        price: '20',
                        showcase: 'showcase.png',
                        subImagePath: 'product78/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'white'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '50% Cotton'
                            },
                            {
                                title: 'Fabric',
                                value: 'Medium Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 79,
                        title: 'HEIN Girls Floral Print Raglan Sleeve  ',
                        short_desc: 'Wrangler Authentics Long Sleeve Quilted Lined',
                        price: '25',
                        showcase: 'showcase.png',
                        subImagePath: 'product79/',
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
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '80% Cotton , 20% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                    {
                        productId: 80,
                        title: 'Girls Contrast Piping ',
                        short_desc: 'Hanes Girls Short Sleeve X-Temp W/FreshIQ Polo',
                        price: '40',
                        showcase: 'showcase.png',
                        subImagePath: 'product80/',
                        pictures: [
                            '1.png', '2.png'
                        ],
                        details: [
                            {
                                title: 'Color',
                                value: 'Black and White'
                            },
                            {
                                title: 'Fit Type',
                                value: 'Regular Fit'
                            },
                            {
                                title: 'Material',
                                value: 'cotton'
                            },
                            {
                                title: 'Composition',
                                value: '35% Cotton, 65% Polyester'
                            },
                            {
                                title: 'Fabric',
                                value: 'Non- Stretch'
                            },
                            {
                                title: 'Waist Line',
                                value: 'Natural'
                            }
                        ]
                    },
                ]
            },

        

        ]

    }
};

export default dataObject;
