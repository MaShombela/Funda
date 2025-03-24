from app import create_app
from extensions import db

def init_database():
    app = create_app()
    
    with app.app_context():
        # Create all tables
        db.create_all()
        
        print("Database initialized successfully!")

if __name__ == "__main__":
    init_database()