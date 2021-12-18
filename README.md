# User & Meetings API
### (Take home assignment by Skrate)

Welcome!
This API was designed to register meetings between different users and retrieve details about the same.
Users can register with a username and recieve a unique user ID upon successful registration. They can then use those unique ID's to set up a meeting with another user and recieve a unique meeting ID.
The ID's so recieved can be used to access user/meeting details.

*The API can be accessed [here](https://skrate-meetings-api.herokuapp.com).*

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
