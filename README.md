# Customer Relationship Management
This is a RESTFUL API for a CRM System. A Customer Relationship Management (CRM) system using Node.js, Express, MongoDB, and JWT authentication. The CRM system allows employees or counsellors to effectively manage and track customer enquiries, and claim leads, and access both public and private enquiries within the system.

<p align = "center">
<img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="js" width="50" height="50"/>
<img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/nodejs.png" alt="nodejs" width="50" height="50"/>
<img src="https://res.cloudinary.com/kc-cloud/images/f_auto,q_auto/v1651772163/expressjslogo/expressjslogo.webp?_i=AA" alt="express" width="50" height="50"/>
 <img src="https://raw.githubusercontent.com/PrinceCorwin/Useful-tech-icons/main/images/mongodb-leaf.png" alt="mongo" width="50" height="50"/> 
<img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" width="50" height="50"/>
  
</p>

**Tech Stacks:** Node, Express, MongoDB Atlas


## Video Presentation 

**Video Link** -  

## Deployment

**Server side:** Render cloud https://crmsystem.onrender.com



## Features 
The CRM system backend offers the following features:
-  Employee/counsellor registration and login functionality.
-  API validation
-  Any user can raise an enquiry for course-related doubt without  authentication. In this API endpoint No need for Authentication 
-  APIs to claim leads and assign them to specific employees/counsellors. This is a private.
-  APIs to fetch unclaimed leads. This is a private.
-  API to fetch leads claimed by logged-in users. This is a private.
-  Error handling


###  Run Locally Clone this Project

```
   - step 1. https://github.com/bire210/crmsystem.git
   - step 2. Go to the root directory
   - step 3. Install the required dependency by using the command - npm i
   - step 4. Set the environment variables MongoDB url and JWT_KEY
   - step 5. Write "npm start" in terminal
```
### Runs the project in the development mode

[http://localhost:8080](http://localhost:8080)

## NPM Packages
<p align = "center">
<img src="https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0" alt="bcrypt.png" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/cors.png?raw=true" alt="cors" width="70" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/download.png?raw=true" alt="dotenv" width="60" height="50"/>
<img src="https://github.com/faraz412/cozy-passenger-4798/blob/main/Frontend/Files/JWT.png?raw=true" alt="jwt" width="70" height="50"/>
<img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose.png" width="70" height="70"/>     
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon.png" width="50" height="50"/>

</p>
   
   
## API Endpoints

  #### Register a new employee/counsellor.
```javascript
POST  http://localhost:8080/api/auth/register
```
  ####  Employee/counsellor login and generate JWT token.
```javascript
POST  http://localhost:8080/api/auth/login
```
  #### Raise a public enquiry by the user.
```javascript
POST http://localhost:8080/api/enquiry
```
  #### to claim leads and assign them to specific employees/counsellors
```javascript
GET http://localhost:8080/api/leads/leadId/claim
```
  #### to fetch unclaimed leads.
```javascript
POST  http://localhost:8080/api/leads/unclaimed
```

  #### to fetch leads claimed by logged-in users
```javascript
POST  http://localhost:8080/api/leads/claimed
```


 
| `Authors` |
| :-------: | 

 
 [@bire210](https://github.com/bire210) 
