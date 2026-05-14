//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://panstakan.com.ua/sites/default/files/styles/1920x1080m/public/product_images/%D1%87%D0%B0%D0%B9%20%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F%20%D0%BC%D1%8F%D1%82%D0%B0.jpg?itok=ia5Y_dNH'
    }
    ];

for (let product of products) {
    document.write(`<div class="product-card">

        <h3 class="product-title">${product.title}. Price – ${product.price}</h3>

        <img src="${product.image}" alt="" class="product-image">
    </div>`);
}
