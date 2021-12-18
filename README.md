# User & Meetings API
### (Take home assignment by Skrate)

Welcome!
This API was designed to register meetings between different users and retrieve details about the same.
Users can register with a username and recieve a unique user ID upon successful registration. They can then use those unique ID's to set up a meeting with another user and recieve a unique meeting ID.
The ID's so recieved can be used to access user/meeting details.

*The API can be accessed [here](https://skrate-meetings-api.herokuapp.com).*

### 🔩 Ingredients
The API was built using the *Node.js* runtime and *Express.js* as the backend framework with *MongoDB* as the database.

**Libraries used:**

 - Mongoose: Used for handling all things MongoDB. The model schemas, and CRUD operations on the db were done using Mongoose. It is efficient and low-code giving high performance in low time.
 - UUID: Used for creation of the unique ID's.

### 🛠 Documentation:
#### Meetings API:
**GET** `/meetings/all`

*Retrieve details of all the meetings in the database.*
<hr>

**GET** `/meetings/<meetingID>`

*Retrieve meeting details from the unique meeting ID as a parameter.*
<hr>

**POST** `/meetings/new`

*Register a new meeting between two user.*

Body:

	{  

	  "uid1" : UserID of user one,  

	  "uid2" : UserID of user two,  

	  "date" : Meeting Date (YYYY-MM-DD)  

	}

<hr>

#### Users API:
**GET** `/users/all`

*Retrieve details of all the users in the database.*
<hr>

**GET** `/users/<meetingID>`

*Retrieve user details from the unique meeting ID as a parameter.*
<hr>

**POST** `/meetings/new`

*Register a new user.*

Body:

	{  

	  "username" : Username of new user  

	}

<hr>
