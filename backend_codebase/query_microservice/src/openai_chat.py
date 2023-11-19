from openai import OpenAI
import json
import time
import os 

"""PLACE KEYS CODE OVER HERE"""
client = OpenAI( api_key=os.environ["OPENAI_KEY"])

assistant = client.beta.assistants.retrieve(os.environ["OPENAI_ASSISTANT"])


def get_chatgpt_response(prompt):

    thread = client.beta.threads.create()

    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        #content="Give exact information related to Rural Development from documents / data "
        content=prompt
    )

    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id
    )

    while run.status not in ["completed", "failed"]:
        run = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id
        )
        time.sleep(0.5)
        # todo: add timeout

    if run.status == "completed":
        messages = client.beta.threads.messages.list(
            thread_id=thread.id
        )
        messages = json.loads(messages.json())
        messages = json.dumps(messages, indent=4)
        messages = json.loads(messages)

        """FINAL OUTPUT"""
        final_output = messages["data"][0]["content"][0]["text"]["value"]
        return final_output
    
    raise Exception("open ai response error");