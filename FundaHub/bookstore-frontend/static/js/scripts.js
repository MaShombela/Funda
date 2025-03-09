// This file contains JavaScript functions for interactivity in the bookstore frontend.

// Function to handle the search bar functionality
function searchBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
        const title = card.querySelector('.book-title').textContent.toLowerCase();
        const author = card.querySelector('.book-author').textContent.toLowerCase();

        if (title.includes(searchInput) || author.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener for the search input
document.getElementById('search-input').addEventListener('input', searchBooks);