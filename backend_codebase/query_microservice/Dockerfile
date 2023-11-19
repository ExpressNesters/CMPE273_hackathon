FROM python:3.11.6


ARG OPENAI_KEY
ARG OPENAI_ASSISTANT
ARG DB_URL

RUN bash -c "echo -e ${DB_URL}"

WORKDIR /usr/src/app

COPY ./src /usr/src/app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

ENV MYSQL_URL=${DB_URL}
ENV FLASK_RUN_HOST=0.0.0.0
ENV OPENAI_ASSISTANT=${OPENAI_ASSISTANT}
ENV OPENAI_KEY=${OPENAI_KEY}


CMD ["flask","run"]
