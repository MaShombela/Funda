# FundaHub Bookstore - Setup and User Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation Guide](#installation-guide)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [User Guide](#user-guide)
7. [Administrator Guide](#administrator-guide)
8. [Troubleshooting](#troubleshooting)
9. [FAQ](#faq)

## Introduction

FundaHub is a web-based marketplace designed for university students to buy and sell textbooks. This platform makes textbook access more affordable and creates a sustainable academic community.

### Key Features
- User authentication (signup/login)
- Book listing and searching
- Secure payment processing
- User ratings and reviews
- Administrative dashboard

## Prerequisites

Before starting, ensure you have the following installed on your computer:

1. **Python** (Version 3.8 or higher)
   - Windows: Download from [Python.org](https://www.python.org/downloads/)
   - Mac: Use Homebrew: `brew install python`
   - Linux: Usually pre-installed

2. **Git** (for version control)
   - Windows: Download from [Git-scm.com](https://git-scm.com/downloads)
   - Mac: Use Homebrew: `brew install git`
   - Linux: `sudo apt-get install git`

3. **PostgreSQL** (database)
   - Download from [PostgreSQL.org](https://www.postgresql.org/download/)

## Installation Guide

### Step 1: Download the Project

**For Non-Developers:**
1. Go to the project's GitHub page
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location

**For Developers:**
```bash
git clone <repository-url>
cd bookstore-frontend
```

### Step 2: Set Up Python Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

## Configuration

### Step 1: Environment Setup

1. Create a new file named `.env` in the project root
2. Copy the content below and replace the values:

```env
# Flask Configuration
SECRET_KEY=your-secret-key-here
FLASK_ENV=development
FLASK_DEBUG=1

# Database Configuration
DATABASE_URL=postgresql://username:password@localhost/dbname

# Email Configuration
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=True
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-email-password
```

### Step 2: Database Setup

1. Open PostgreSQL
2. Create a new database:
   ```sql
   CREATE DATABASE fundahub;
   ```
3. Update the DATABASE_URL in `.env` with your credentials

## Running the Application

### First-Time Setup

1. Initialize the database:
   ```bash
   flask db upgrade
   ```

2. Seed the database with sample data:
   ```bash
   flask seed-db
   ```

### Starting the Server

1. Activate the virtual environment (if not already activated)
2. Run the application:
   ```bash
   python app.py
   ```
3. Open your web browser and go to: `http://127.0.0.1:5000`

## User Guide

### Creating an Account
1. Click "Sign Up" on the homepage
2. Fill in your details:
   - University email address
   - Full name
   - Student ID
   - Password
3. Click "Create Account"

### Listing a Book
1. Log in to your account
2. Click "Sell a Book"
3. Fill in the book details:
   - Title
   - Author
   - ISBN
   - Condition
   - Price
   - Photos
4. Click "List Book"

### Buying a Book
1. Browse books or use the search function
2. Click on a book to view details
3. Click "Add to Cart"
4. Proceed to checkout
5. Enter shipping details
6. Complete payment

## Administrator Guide

### Accessing Admin Dashboard
1. Log in with admin credentials
2. Navigate to `/admin/dashboard`

### Admin Features
- User Management
- Book Listing Moderation
- Transaction Overview
- System Statistics

## Troubleshooting

### Common Issues and Solutions

1. **Database Connection Error**
   - Check PostgreSQL is running
   - Verify database credentials in `.env`
   - Ensure database exists

2. **Email Sending Failed**
   - Check email credentials in `.env`
   - Enable "Less secure app access" in Gmail
   - Verify internet connection

3. **Server Won't Start**
   - Check if port 5000 is available
   - Verify Python version compatibility
   - Ensure all dependencies are installed

## FAQ

**Q: How do I reset my password?**
A: Click "Forgot Password" on the login page and follow the instructions sent to your email.

**Q: Can I sell non-textbooks?**
A: Currently, FundaHub is focused on academic textbooks only.

**Q: How are payments processed?**
A: We use secure payment processing through Stripe.

**Q: What if I receive a damaged book?**
A: Contact support within 48 hours with photos for a refund.

## Support

For additional help:
- Email: support@fundahub.com
- Phone: (+27) 123-456-789
- Hours: Monday-Friday, 9:00-17:00 SAST

---

Last Updated: [Current Date]
Version: 1.0.0