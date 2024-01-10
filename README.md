#First Task Link
https://github.com/piyushraj2340/Custom-Linux-Command

# Project Name
MOTOR HUB - car and bike selling website

## Description
Welcome to MOTOR HUB, your ultimate destination for buying and selling cars and bikes! Discover a seamless online marketplace where automotive enthusiasts connect to explore a diverse range of vehicles. Whether you're in search of your dream car or looking to sell your beloved bike, MOTOR HUB provides a user-friendly platform to make your automotive transactions effortless. Browse through a curated selection of quality vehicles, connect with sellers, and embark on your journey towards the perfect ride. Join MOTOR HUB and experience the thrill of finding or selling your ideal car or bike with ease!

## Setup and Running Locally

Follow these steps to set up and run the application on your local machine:

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/): You need Node.js to run JavaScript on the server. You can download and install it from the official website.

- [MongoDB](https://www.mongodb.com/): MongoDB is used as the database for this application. Install MongoDB and make sure it's up and running. You can download MongoDB from their official website.

### Installation

1. **Clone the Repository:**

   Open your terminal and navigate to the directory where you want to store the project. Then, run the following command to clone the repository:

   ```
   git clone <repository-url>
   ```

2. **Navigate to the Project Folder:**

   Change your current directory to the project folder:

   ```
   cd <project-folder>
   ```

3. **Install Dependencies:**

   Use npm to install the project dependencies:

   ```
   npm install
   ```

### Configuration

1. **Database Configuration:**

   In the project, you might need to configure the MongoDB connection. Look for a configuration file (e.g., `db/database.js`) or environment variables to set your MongoDB connection details. Update the MongoDB URI to point to your local MongoDB instance if necessary.

### Running the Application

1. **Start the Server:**

   To run the application, execute the following command:

   ```
   npm start
   ```

   This command will start the Node.js server.

2. **Access the Application:**

   Once the server is running, you can access the application by opening your web browser and navigating to:

   ```
   http://localhost:8000
   ```

   The application should now be accessible in your web browser, and you can begin interacting with it.



#### API Endpoints and Usage

### Create a User (POST /auth/sign-up)

- **Description:** This endpoint allows you to add a new user to the Motor HUB.

- **Request: (body)**
  ```json
    {
        "name": "User Name",
        "email": "user Email",
        "phone": "User PHone",
        "password": "User Password"
    }
  ```

- **Response:**
  ```json
    {
        "status": true,
        "message": "User Registration Successful!..."
    }
  ```

### Login (POST /auth/sign-in)

- **Description:** This endpoint allows you to sign-in the Motor HUB.

- **Request:**
  ```json
    {
        "email": "User Email",
        "password": "User Password"

    }
  ```

  - **Response:**
  ```json
    {
        "status": true,
        "message": "Login Successful!..."
    }
  ```

### Profile (Post /user/profile)

- **Description:** This endpoint retrieves details of a user after login.

- **Response:**
  ```json
    {
        "status": true,
        "message": "Showing Profile Data!...",
        "result": {
            "_id": "some id of user",
            "name": "user name",
            "email": "user email",
            "phone": "user phone number",
            "tokens": [], *array of tokes*
        }
    }
  ```

### Contact Us (POST /help/contact-us)

- **Description:** This endpoint allows you to submit the details to the data base from the contact us pages.

- **Request: (body)**
  ```json
    {
        "name": "User name",
        "email": "User email",
        "phone": "phone number",
        "message": "some message",
    }
  ```

- **Response:**
  ```json
    {
        "status": true,
        "message": "Thank you for reaching Us we will contact you at user email"
    }
  ```

#### Working with screenshot

1. loading the home page
![Homepage Screenshot](https://github.com/piyushraj2340/motor-hub/blob/master/working/home.jpg)

2. Login page
![Login Page Screenshot](https://github.com/piyushraj2340/motor-hub/blob/master/working/login.jpg)

3. sign-up page
![Sign-up Page Screenshot](https://github.com/piyushraj2340/motor-hub/blob/master/working/signup.jpg)

4. profile page
![Profile Page Screenshot](https://github.com/piyushraj2340/motor-hub/blob/master/working/profile.jpg)

5. contact us page
![Contact Us Page Screenshot](https://github.com/piyushraj2340/motor-hub/blob/master/working/contact.jpg)

6. contact us MongoDB database 
![Contact us MongoDB database Page Screenshot](https://github.com/piyushraj2340/motor-hub/blob/master/working/contactData.jpg)
