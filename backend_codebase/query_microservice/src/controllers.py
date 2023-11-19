from flask import request, jsonify
from .services import create_prompt_response
from .services import list_user_responses
from .openai_chat import get_chatgpt_response
from flask_cors import CORS, cross_origin 

def init_app(app):
    CORS(app)

    @app.route('/responses/<user_id>', methods=['GET'])
    @cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
    def get_user_responses(user_id):
        responses = list_user_responses(user_id)
        return jsonify(responses)

    @app.route('/responses/', methods=['POST'])
    @cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
    def add_prompt_response():
        data = request.json
        user_id, prompt = data['user_id'], data['prompt']
        response = get_chatgpt_response(prompt)
        if create_prompt_response(user_id, prompt, response):
            return jsonify({"success": True, "response": response}), 201
        else:
            return jsonify({"error": "Unable to create record"}), 500

