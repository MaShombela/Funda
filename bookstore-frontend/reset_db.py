import os
import shutil

def reset():
    # Remove database file
    if os.path.exists("marketplace.db"):
        os.remove("marketplace.db")
    
    # Remove migrations folder
    if os.path.exists("migrations"):
        shutil.rmtree("migrations")

if __name__ == "__main__":
    reset()
    print("Reset completed!")
