import os
import shutil
from app import create_app
from extensions import db
from flask_migrate import init, migrate, upgrade, stamp

def setup_database():
    app = create_app()
    
    with app.app_context():
        # Cleanup
        if os.path.exists("marketplace.db"):
            os.remove("marketplace.db")
        if os.path.exists("migrations"):
            shutil.rmtree("migrations")
            
        # Create database tables
        db.create_all()
        
        # Initialize migrations
        init()
        
        # Create initial migration
        migrate(message='initial_database_setup')
        
        # Apply migrations
        upgrade()
        
        # Stamp the database with the current migration
        stamp('head')
        
        print("Database setup completed successfully!")

if __name__ == "__main__":
    setup_database()