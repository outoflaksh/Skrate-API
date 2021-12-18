# User & Meetings API
### (Take home assignment by Skrate)

Welcome!
This API was designed to register meetings between different users and retrieve details about the same.
Users can register with a username and recieve a unique user ID upon successful registration. They can then use those unique ID's to set up a meeting with another user and recieve a unique meeting ID.
The ID's so recieved can be used to access user/meeting details.

*The API can be accessed [here](https://skrate-meetings-api.herokuapp.com).*

### Documentation:
#### Meetings API:
1. `GET /meetings/<meetingID>` Retrieve meeting details from the unique meeting ID as a parameter.
2. `GET /meetings/all` Retrieve details of all the meetings in the database.
3. `POST /meetings/new` Register a new meeting between two users.
Request Body: 
**{
	"uid1" : < User ID of the first user >,
	"uid2" : < User ID of the second user >,
	"Date" : < Meeting Date >
}**

#### Users API:
1. `GET /users/<userID>` Retrieve user details from the unique user ID as a parameter.
2. `GET /users/all` Retrieve details of all the users in the database.
3. `POST /users/new` Register a new user.
Request Body: 
**{
	"username" : < Username of the new user >
}**
