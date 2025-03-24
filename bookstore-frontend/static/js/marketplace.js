// Book listing management
const addBookForm = document.getElementById('addBookForm');
if (addBookForm) {
    addBookForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await fetch('/api/books', {  // Updated to match API endpoint
                method: 'POST',
                body: formData
            });
            if (!response.ok) throw new Error('Failed to add book');
            location.reload();
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Failed to add book. Please try again.');
        }
    });
}

// Search and filter functionality
const searchBooks = async (query, filters) => {
    try {
        const params = new URLSearchParams({ query, ...filters });
        const response = await fetch(`/api/books/search?${params}`);
        const books = await response.json();
        updateBookGrid(books);
    } catch (error) {
        console.error('Error searching books:', error);
    }
};

// Favorite management
const toggleFavorite = async (bookId) => {
    try {
        const response = await fetch(`/api/favorites/${bookId}`, {
            method: 'POST'
        });
        if (response.ok) {
            const button = document.querySelector(`[data-book-id="${bookId}"]`);
            button.classList.toggle('favorited');
        }
    } catch (error) {
        console.error('Error toggling favorite:', error);
    }
};

// Rating submission
const submitRating = async (userId, rating, review) => {
    try {
        const response = await fetch('/api/ratings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, rating, review })
        });
        if (response.ok) {
            location.reload();
        }
    } catch (error) {
        console.error('Error submitting rating:', error);
    }
};

// Admin functions
if (document.querySelector('.admin-dashboard')) {
    const suspendUser = async (userId) => {
        try {
            const response = await fetch(`/api/admin/users/${userId}/suspend`, {
                method: 'POST'
            });
            if (response.ok) {
                location.reload();
            }
        } catch (error) {
            console.error('Error suspending user:', error);
        }
    };

    const deleteUser = async (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                const response = await fetch(`/api/admin/users/${userId}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    location.reload();
                }
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    };
}