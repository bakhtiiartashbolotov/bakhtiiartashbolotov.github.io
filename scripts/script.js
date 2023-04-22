const techArray = ['laptops', 'headphones', 'phones', 'watches', 'laptop', 'notebook','headphone','phone','watch','clock','computer','pc','computers'];

form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const query = form.elements.query.value.toLowerCase();
    let url;

    if (techArray.includes(query)) {
        url = 'tech.html';
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
