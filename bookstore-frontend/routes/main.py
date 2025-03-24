from flask import Blueprint, render_template
from flask_login import login_required

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/books')
def books():
    return render_template('book_list.html')

@main_bp.route('/book/<int:book_id>')
def book_detail(book_id):
    return render_template('book_detail.html')

@main_bp.route('/add-book', methods=['GET', 'POST'])
@login_required
def add_book():
    return render_template('add_book.html')