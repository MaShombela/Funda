import click
from flask.cli import with_appcontext
from extensions import db
from seed import seed_database
import os

def register_commands(app):
    @app.cli.command("seed-db")
    @with_appcontext
    def seed_db():
        """Seed the database with sample data."""
        seed_database()
        click.echo('Database seeded!')

    @app.cli.command("reset-db")
    @with_appcontext
    def reset_db():
        """Reset the database."""
        if click.confirm('Are you sure you want to reset the database?'):
            db.drop_all()
            db.create_all()
            click.echo('Database reset complete!')
    @app.cli.command("verify-setup")
    @with_appcontext
    def verify_setup():
        """Verify the application setup."""
        click.echo('Checking database connection...')
        try:
            db.session.execute('SELECT 1')
            click.echo('✓ Database connection successful')
        except Exception as e:
            click.echo(f'✗ Database connection failed: {str(e)}')

        click.echo('Checking upload directory...')
        upload_dir = app.config['UPLOAD_FOLDER']
        if os.path.exists(upload_dir) and os.access(upload_dir, os.W_OK):
            click.echo('✓ Upload directory is accessible')
        else:
            click.echo('✗ Upload directory is not accessible')

        click.echo('Checking mail configuration...')
        if all([
            app.config.get('MAIL_SERVER'),
            app.config.get('MAIL_PORT'),
            app.config.get('MAIL_USERNAME'),
            app.config.get('MAIL_PASSWORD')
        ]):
            click.echo('✓ Mail configuration is complete')
        else:
            click.echo('✗ Mail configuration is incomplete')
