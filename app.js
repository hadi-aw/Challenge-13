document.addEventListener('DOMContentLoaded', () => { 
   const apiUrl = 'https://course-api.com/react-store-products';
   const loadingDiv = documrnt.getElementById('loading');
   const errorDiv = document.getElementById('error');
    const productsDiv = document.getElementById('products');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let products = [];
    let currentIndex = 0;
    