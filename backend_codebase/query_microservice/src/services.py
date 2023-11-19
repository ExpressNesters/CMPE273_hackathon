from .models import db
from .models import MERUserPromptResponse

def list_user_responses(user_id):
    user_chat_responses = MERUserPromptResponse.query.filter_by(user_id=user_id).all()
    return [dict(
        prompt=user_chat_response.prompt,
        response=user_chat_response.response,
        created_at=user_chat_response.created_at
        ) for user_chat_response in user_chat_responses]


def create_prompt_response(user_id, prompt, response):
    """Create a new prompt-response record in the database."""
    prompt_response_record = MERUserPromptResponse(
        user_id=user_id, 
        prompt=prompt, 
        response=response,
    )
    db.session.add(prompt_response_record)
    try:
        db.session.commit()
        return True
    except Exception as e:
        db.session.rollback()
        # Handle exception (e.g., log it, inform the user)
        return False
