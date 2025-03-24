from extensions import db
from models.database import User, Book
from werkzeug.security import generate_password_hash

def seed_database():
    # Create admin user
    admin = User(
        email="admin@university.edu",
        password_hash=generate_password_hash("Admin123!"),
        name="Admin User",
        student_id="ADMIN001",
        is_admin=True
    )
    
    # Create test user
    test_user = User(
        email="test@university.edu",
        password_hash=generate_password_hash("Test123!"),
        name="Test User",
        student_id="TEST001"
    )
    
    # Add users to session
    db.session.add(admin)
    db.session.add(test_user)
    
    try:
        db.session.commit()
        print("Users created successfully")
        
        # Create sample books
        sample_books = [
            Book(
                title="Introduction to Python",
                author="John Smith",
                price=299.99,
                condition="New",
                category="Programming",
                image_url="/static/images/default-book.jpg",
                description="A comprehensive guide to Python programming",
                seller_id=test_user.id
            ),
            Book(
                title="Data Structures and Algorithms",
                author="Jane Doe",
                price=249.99,
                condition="Like New",
                category="Computer Science",
                image_url="/static/images/default-book.jpg",
                description="Essential guide to DS&A",
                seller_id=test_user.id
            )
        ]
        
        for book in sample_books:
            db.session.add(book)
        
        db.session.commit()
        print("Sample books created successfully")
        
    except Exception as e:
        db.session.rollback()
        print(f"Error seeding database: {e}")

if __name__ == "__main__":
    seed_database()