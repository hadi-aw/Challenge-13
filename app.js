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
            if (!response.ok) throw new error('Network response was not ok')
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

    