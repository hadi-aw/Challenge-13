//U51313007
document.addEventListener('DOMContentLoaded', () => { 
   const apiUrl = 'https://course-api.com/react-store-products';
   const loadingDiv = documrnt.getElementById('loading');
   const errorDiv = document.getElementById('error');
    const productsDiv = document.getElementById('products');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let products = [];
    let currentIndex = 0;

    const fetchProducts = async () => {
        try{
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok')
                products = await response.json();
                displayProduct(currentIndex);
                showElements([productsDiv, prevButton, nextButton]);
} catch (error) {
    errorDiv.textContent = 'Failed to load products. Please try again later.';
    showElements([errorDiv]);
        } finally {
            hideElements([loadingDiv]);
        }
    };

    const displayProduct = (index) => {
        productsDiv.innerHTML = `
        <div class="product">
        <img src="${products[index].image}" alt="${products[index].name}" >
        <h2>${products[index].name}</h2>
        <p>$${products[index].price}</p>
        <p>${products[index].description}</p>
        </div>
        `;
    };

    const showElements = (elements) => {
        elements.forEach(el => el.classList.remove('hidden'));
    };

    const hideElements = (element) => {
        element.classList.add('hidden');
    };

    const navigateProducts = (direction) => {
        currentIndex = (currentIndex + direction + products.length) % products.length;
        displayProduct(currentIndex);
    };

    prevButton.addEventListener('click', () => navigateProducts(-1));
    nextButton.addEventListener('click', () => navigateProducts(1));

    fetchProducts();
});