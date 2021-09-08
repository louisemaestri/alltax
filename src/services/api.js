export const categories = [{
    name: "Food",
    id: 1
},{
    name: "Drink",
    id: 2
}];

export const products = [{
    name: "Vegetables",
    categoryId: 1,
    id: 1
},{
    name: "Fruits",
    categoryId: 1,
    id: 2,
},{
    name: "Soda",
    categoryId: 2,
    id: 3
}, {
    name: "Juice",
    categoryId: 2,
    id: 4
}];

export const brands = [{
    name: "Apple",
    id: 1,
    productId: 2
}, {
    name: "Banana",
    id: 2,
    productId: 2
}, {
    name: "Potato",
    id: 3,
    productId: 1
}, {
    name: "Carriot",
    id: 4,
    productId: 1
},{
    name: "Grape Juice",
    id: 5,
    productId: 4
},{
    name: "Orange Juice",
    id: 6,
    productId: 4
},{
    name: "Kuat",
    id: 7,
    productId: 3
}, {
    name: "Pepsi",
    id: 8,
    productId: 3,
}];

export const brandSales = [{
    brandId: 1,
    sales: [0.0, 4.5, 10.0, 7.5, 4.7, 9.5, 4.2, 6.0, 4.0, 3.7, 11.0, 15.0]
},
{
    brandId: 2,
    sales: [1.3, 2.7, 9.8, 4.3, 5.2, 8.2, 3.7, 5.6, 3.0, 4.0, 9.0, 9.0]
},
{
    brandId: 3,
    sales: [2.9, 3.9, 8.8, 7.7, 5.9, 3.5, 9.3, 2.8, 9.0, 12.0, 13.0, 13.5]
},
{
    brandId: 4,
    sales: [4.3, 4.4, 4.7, 5.3, 2.2, 1.6, 4.9, 6.4, 7.4, 10.6, 9.4, 9.2]
},
{
    brandId: 5,
    sales: [3.4, 9.7, 9.4, 9.3, 9.6, 6.3, 6.2, 5.3, 7.2, 8.3, 7.3, 8.9]
},
{
    brandId: 6,
    sales: [7.9, 4.9, 6.3, 5.2, 1.8, 1.9, 1.7, 0.9, 0.5, 0.9, 0.2, 1.3]
},
{
    brandId: 7,
    sales: [1.5, 1.9, 2.8, 2.3, 2.4, 4.5, 4.6, 5.8, 1.8, 1.9, 5.2, 5.3]
},
{
    brandId: 8,
    sales: [8.9, 5.0, 5.9, 4.0, 3.1, 2.8, 7.7, 7.5, 7.3, 5.0, 2.1, 1.9]
}];