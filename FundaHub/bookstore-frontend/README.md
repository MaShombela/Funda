# Bookstore Frontend

This project is a modern bookstore frontend built using Flask, Jinja2 templates, Bootstrap 5 (or Tailwind CSS), HTML, and JavaScript. It provides a user-friendly interface for browsing and purchasing books.

## Project Structure

```
bookstore-frontend
├── static
│   ├── css
│   │   └── styles.css        # Custom styles for the application
│   ├── js
│   │   └── scripts.js        # JavaScript functions for interactivity
│   └── images                # Directory for image assets
├── templates
│   ├── base.html             # Base template with common structure
│   ├── index.html            # Welcome page with hero section
│   ├── signup.html           # Signup form
│   ├── login.html            # Login form
│   ├── home.html             # Home page with navbar and book grid
│   ├── book_list.html        # List of book cards
│   ├── book_detail.html       # Details of a selected book
│   ├── checkout.html         # Checkout form
│   ├── payment.html          # Payment details form
│   └── order_summary.html     # Order summary page
├── app.py                    # Main application file
└── README.md                 # Project documentation
```

## Features

- **Responsive Design**: Utilizes Bootstrap 5 or Tailwind CSS for a fully responsive UI.
- **User Authentication**: Pages for user signup and login.
- **Book Browsing**: Home page with a grid layout for displaying books.
- **Search Functionality**: Search bar to filter books by title or author.
- **Book Details**: Detailed view of each book with an "Add to Cart" option.
- **Checkout Process**: Forms for entering address and payment details.
- **Order Summary**: Displays the total cost of the order.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd bookstore-frontend
   ```
3. Install the required dependencies (if any).
4. Run the application:
   ```
   python app.py
   ```
5. Open your browser and go to `http://127.0.0.1:5000` to view the application.

## Contributing

Feel free to submit issues or pull requests to improve the project. Your contributions are welcome!