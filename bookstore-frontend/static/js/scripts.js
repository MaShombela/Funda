// This file contains JavaScript functions for interactivity in the bookstore frontend.

// Theme Management
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    
    // Initialize Bootstrap components
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    // Initialize dropdowns
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    
    // Save theme preference
    fetch('/api/theme', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theme: newTheme })
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    let isValid = true;
    form.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Flash message auto-dismiss
document.addEventListener('DOMContentLoaded', () => {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000);
    });
});

// Book search functionality
async function searchBooks(query, filters = {}) {
    try {
        showLoader();
        const params = new URLSearchParams({ query, ...filters });
        const response = await fetch(`/api/books/search?${params}`);
        const books = await response.json();
        updateBookGrid(books);
    } catch (error) {
        showError('Error searching books');
        console.error('Error:', error);
    } finally {
        hideLoader();
    }
}

function updateBookGrid(books) {
    const grid = document.querySelector('.books-grid');
    if (!grid) return;
    
    grid.innerHTML = books.map(book => `
        <div class="book-card" data-category="${book.category}" data-condition="${book.condition}">
            <div class="book-image-wrapper">
                <img src="${book.image_url || '/static/images/default-book.png'}" alt="${book.title}" class="book-image">
                <div class="book-overlay">
                    <button class="btn btn-light" onclick="window.location.href='/books/${book.id}'">
                        View Details
                    </button>
                </div>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="book-price">R${book.price}</span>
                    <span class="book-condition">${book.condition}</span>
                </div>
                <button class="btn btn-sm btn-outline-primary favorite-btn" 
                        onclick="toggleFavorite(${book.id})"
                        data-favorite="${book.is_favorite}">
                    <i class="fas ${book.is_favorite ? 'fa-heart' : 'fa-heart-o'}"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Utility functions
function showLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'block';
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
}

function showError(message) {
    const alertHtml = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', alertHtml);
}
