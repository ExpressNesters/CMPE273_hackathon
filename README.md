# Deal Techtives: CMPE 273-Enterprise Distributed Systems Hackathon Project

## Team Members
- Harshith Akkapelli
- Sanjay Bhargav Kudupudi
- Neeharika Singh

## Architecture Diagram
![Architecture Diagram](./architecture_diagram.png)

## Output Files and Screenshots

| Prompt                                          | Response (Text Format)                                                                     | Response (Screenshot Format)                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Economic Sustainability Statements               | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Social Sustainability Statements                 | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Social Security                                  | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Rural Development                                | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| How Farmers benefit from the budget?             | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Economic conditions of State and Central Government | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| How poor and marginalized communities benefit from budget? | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Poverty reduction strategies                     | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| How women and poor children benefit from Budget? | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Poverty Factors                                  | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Country Balance of Payments                      | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Weather & Extreme Weather Events                 | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |
| Recessions and Tariff                            | ![Text](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) | ![Screenshot](https://github.com/ExpressNesters/273_Hackathon/blob/main/prompt-responses/10_Prompt.png) |

## Instructions for Running Locally


### 1) MySQL Installation
- Install MySQL and start the server.
- Create Database named `MER_DB`: `create database MER_DB;`
- Set the below environment variables:
  - `OPENAI_KEY=`
  - `OPENAI_ASSISTANT=`
  - `MYSQL_URL=mysql://<username>:<password>@localhost/MER_DB`

### 2) Backend - query microservice
- Clone the repository: `git@github.com:ExpressNesters/273_Hackathon.git`
- Go to src folder: `cd backend_codebase/query_microservice/src`
- Run command: `pip install -r requirements.txt`
- Run command: `flask run`

### 3) Backend - authentication microservice
- Go to `backend_codebase/authentication_microservice`: `cd backend_codebase/authentication_microservice`
- Run command: `npm install`
- Run command: `npm start`

### 4) Frontend
- Go to `frontend_codebase/`: `cd frontend_codebase/`
- Run command: `npm install`
- Run command: `npm start`

### 5) Access the Application
- Access the application on: `http://localhost:3000/`

## Authentication Interface
![Authentication Interface](./login_screen.png)

## Chat Interface
![Chat Interface](./chat_screen.png)
