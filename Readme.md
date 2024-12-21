# Course Selling App Backend

## Description
This is a backend server for a course selling application. It supports two types of users:
1. Admins
2. Users

Admins can sign up and create courses. Users can sign up, view courses, and purchase courses.


## Setup
1. Clone the repository.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the `backend` directory with the following content:
    ```
    PORT=5000
    MONGO_URI=<your_mongo_db_connection_string>
    ```
4. Start the server:
    ```sh
    npm start
    ```

## Routes

### Admin Routes
- **POST /admin/signup**
  - Description: Creates a new admin account.
  - Input Body: `{ "username": "admin", "password": "pass" }`
  - Output: `{ "msg": "Admin created successfully" }`

- **POST /admin/courses**
  - Description: Creates a new course.
  - Input: Headers: `{ "username": "username", "password": "password" }`, Body: `{ "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com" }`
  - Output: `{ "message": "Course created successfully", "courseid": "new course id" }`

- **GET /admin/courses**
  - Description: Returns all the courses.
  - Input: Headers: `{ "username": "username", "password": "password" }`
  - Output: `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

### User Routes
- **POST /users/signup**
  - Description: Creates a new user account.
  - Input Body: `{ "username": "user", "password": "pass", "email": "user@example.com" }`
  - Output: `{ "msg": "user created successfully" }`

- **GET /users/courses**
  - Description: Lists all the courses.
  - Input: Headers: `{ "username": "username", "password": "password" }`
  - Output: `{ "response": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

- **POST /users/courses/:courseId**
  - Description: Purchases a course. [courseId](http://_vscodecontentref_/11) in the URL path should be replaced with the ID of the course to be purchased.
  - Input: Headers: `{ "username": "username", "password": "password" }`
  - Output: `{ "msg": "course purchased successfully" }`

- **GET /users/purchasedCourses**
  - Description: Lists all the courses purchased by the user.
  - Input: Headers: `{ "username": "username", "password": "password" }`
  - Output: `{ "courses": [ { "id": 1, "title": "course title", "description": "course description", "price": 100, "imageLink": "https://linktoimage.com", "published": true }, ... ] }`

## Middleware
- **Admin Middleware**: Validates admin credentials from headers.
- **User Middleware**: Validates user credentials from headers.

## Models
- **Admin**: Stores admin credentials.
- **Course**: Stores course details.
- **User**: Stores user credentials and purchased courses.

## Database
- MongoDB is used to store all the data persistently.

## License
This project is licensed under the MIT License.