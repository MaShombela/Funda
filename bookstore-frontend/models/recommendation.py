from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from models.database import Book

class BookRecommender:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(stop_words='english')
        
    def get_recommendations(self, book_id, num_recommendations=5):
        books = Book.query.all()
        # Create content matrix from book titles, authors, and categories
        content = [f"{book.title} {book.author} {book.category}" for book in books]
        
        # Transform content to TF-IDF matrix
        tfidf_matrix = self.vectorizer.fit_transform(content)
        
        # Calculate similarity scores
        cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
        
        # Get index of target book
        idx = next(i for i, book in enumerate(books) if book.id == book_id)
        
        # Get similarity scores for target book
        sim_scores = list(enumerate(cosine_sim[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        
        # Get top N similar books
        recommended_books = [books[i[0]] for i in sim_scores[1:num_recommendations+1]]
        return recommended_books