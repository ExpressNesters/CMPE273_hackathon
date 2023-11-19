# Deal Techtives: CMPE 273-Enterprise Distributed Systems Hackathon Project

## Team Members
- Harshith Akkapelli
- Sanjay Bhargav Kudupudi
- Neeharika Singh

## Architecture Diagram
![Architecture Diagram](./architecture_diagram.png)

### Link Format Write-Ups
| Description             | Link                                                              |
| ----------------------- | ------------------------------------------------------------------ |
| Link Format Write-Ups   | [View Write-Ups](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/write_up.pdf) |

###  Prompt and Responses - Text format
| Description             | Link                                                              |
| ----------------------- | ------------------------------------------------------------------ |
| Text Format Outputs     | [View Output Files](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/text/prompt-responses-TestUser.txt) |

### Prompt and Responses - Screenshot format
| Prompt                                            | Response                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| Economic Sustainability Statements                | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/1_prompt.png) |
| Social Sustainability Statements                  | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/2_prompt.png) |
| Social Security                                   | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/3_prompt.png) |
| Rural Development                                 | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/4_prompt.png) |
| How Farmers benefit from the budget?              | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/5_prompt.png) |
| What is economic conditions of State and Central Government? | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/6_prompt.png) |
| How poor and marginalized communities benefit from budget? | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/7_prompt.png) |
| What are poverty reduction strategies?            | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/8_prompt.png) |
| How women and poor children benefit from Budget?  | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/9_prompt.png) |
| Poverty Factors                                   | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/10_prompt.png) |
| Country Balance of Payments                      | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/11_prompt.png) |
| Weather & Extreme Weather Events                 | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/12_prompt.png) |
| Recessions and Tariff                             | [View Response](https://github.com/ExpressNesters/CMPE273_hackathon/blob/main/outputs/screenshot/13_prompt.png) |
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
