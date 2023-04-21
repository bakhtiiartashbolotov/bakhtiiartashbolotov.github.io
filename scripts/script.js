const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const query = form.elements.query.value;
    const url = `${query}.html`;
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