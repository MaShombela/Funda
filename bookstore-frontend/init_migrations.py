from flask_migrate import init, migrate, upgrade
from app import create_app

def init_migrations():
    app = create_app()
    
    with app.app_context():
        # Initialize migrations
        init()
        
        # Create initial migration
        migrate(message='Initial migration')
        
        # Apply migration
        upgrade()
        
        print("Migrations initialized successfully!")

if __name__ == "__main__":
    init_migrations()