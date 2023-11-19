from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class MERUserPromptResponse(db.Model):
    __tablename__ = 'mer_user_prompt_responses'

    mer_user_prompt_response_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Text, nullable=False)
    prompt = db.Column(db.Text, nullable=False)
    response = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<MERUserPromptResponse(mer_user_prompt_response_id={self.mer_user_prompt_response_id})>"
    