const techArray = ['laptops', 'headphones', 'phones', 'watches', 'laptop', 'notebook', 'headphone', 'phone', 'watch', 'clock', 'computer', 'pc', 'computers'];
const fashionArray = ['fashion','mens clothing', 'womens clothing', 'clothing', 'clothes', 'pants', 'shirt', 'leggins', 'polo', 'cardigan'];
const autoArray = ['oil', 'car', 'auto', 'wheel', 'oil', 'wheels', 'for auto', 'for car', 'all-terrain', 'castrol', 'valvoline', 'shell rotella']
const jewelryArray = ['jewelry','necklaces', 'necklace', 'ring', 'rings', 'gold', 'silver', 'diamond', 'golden']
const foodArray = ['food', 'meat', 'fruit', 'fruits', 'seafood', 'fresh', 'vegetables', 'beef', 'salmon', 'chicken', 'banana', 'strawberries', 'strawberry', 'bananas', 'apple', 'apples']

form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const query = form.elements.query.value.toLowerCase();
    let url;

    if (techArray.includes(query)) {
        url = 'tech.html';
    } else if (fashionArray.includes(query)) {
        url = 'fashion.html';
    } else if (autoArray.includes(query)) {
        url = 'auto.html';
    } else if (jewelryArray.includes(query)){
        url = 'jewelry.html'
    } else if (foodArray.includes(query)){
        url = 'food.html'
    } else {
        url = `${query}.html`;
    }

    fetch(url)
        .then(response => {
            if (response.ok) {
                window.location.href = url;
            } else {
                const encodedQuery = encodeURIComponent(query);
                window.location.href = `error.html?query=${encodedQuery}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const encodedQuery = encodeURIComponent(query);
            window.location.href = `error.html?query=${encodedQuery}`;
        });
});
