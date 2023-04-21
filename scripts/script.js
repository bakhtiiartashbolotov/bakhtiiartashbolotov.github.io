const techArray = ['laptops', 'headphones', 'phones', 'watches', 'laptop', 'notebooke','headphone','phone','watch','clock'];

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