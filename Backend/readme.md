# /Backend API Documentation

## /users/register Endpoint

### Description

The `/users/register` endpoint allows a new user to register by providing their personal details such as name, email, and password. The endpoint performs input validation and securely stores the user's data in the database. Upon successful registration, it returns an authentication token and the user's information.

---

### HTTP Method

**POST**

---

### Endpoint

**`/users/register`**

---

### Request Body

The request body should be in JSON format and must contain the following JSON structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 2, required)",
    "lastname": "string (min length: 2, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min length: 6, required)"
}
```

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

---

### Response

#### Success Response

- **Status Code:** 201 Created
- **Description:** User successfully registered, and an authentication token is returned.
- **Response Body:**

```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string (user ID)",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

#### Error Responses

##### Validation Error

- **Status Code:** 400 Bad Request
- **Description:** Validation errors occurred during registration.
- **Response Body:**

```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (parameter causing the error)",
      "location": "string (location of the parameter)"
    }
  ]
}
```

##### Missing Fields

- **Status Code:** 400 Bad Request
- **Description:** Required fields are missing in the request body.
- **Response Body:**

```json
{
  "message": "All fields are required"
}
```

---

### Notes

- The `password` field is hashed before being stored in the database.
- The endpoint validates inputs using `express-validator`.
- The `token` returned in the response is a JWT token signed with the server's secret key.

---

### How to Test

1. Set up the server with the provided code and necessary environment variables (e.g., `JWT_SECRET`).
2. Send a POST request to `/users/register` with the required JSON body.
3. Verify the response matches the expected output as described above.

---

## /users/login Endpoint

### Description

The `/users/login` endpoint allows an existing user to log in by providing their email and password. Upon successful authentication, the endpoint returns a JSON Web Token (JWT) and the user's information.

---

### HTTP Method

**POST**

---

### Endpoint

**`/users/login`**

---

### Request Body

The request body should be in JSON format and must contain the following JSON structure:

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min length: 6, required)"
}
```

#### Example Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "securePassword123"
}
```

---

### Response

#### Success Response

- **Status Code:** 200 OK
- **Description:** User successfully authenticated, and an authentication token is returned.
- **Response Body:**

```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string (user ID)",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

#### Error Responses

##### Invalid Credentials

- **Status Code:** 401 Unauthorized
- **Description:** Incorrect email or password.
- **Response Body:**

```json
{
  "message": "Invalid email or password"
}
```

##### Validation Error

- **Status Code:** 400 Bad Request
- **Description:** Validation errors occurred during login.
- **Response Body:**

```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (parameter causing the error)",
      "location": "string (location of the parameter)"
    }
  ]
}
```

---

### Notes

- The endpoint validates inputs using `express-validator`.
- Passwords are compared securely using bcrypt.
- The `token` returned in the response is a JWT token signed with the server's secret key.

---

### How to Test

1. Set up the server with the provided code and necessary environment variables (e.g., `JWT_SECRET`).
2. Ensure a user is already registered in the database.
3. Send a POST request to `/users/login` with the required JSON body.
4. Verify the response matches the expected output as described above.

---

## /users/profile Endpoint

### Description

The `/users/profile` endpoint retrieves the authenticated user's profile details. The user must be logged in and provide a valid JWT token to access this endpoint.

---

### HTTP Method

**GET**

---

### Endpoint

**`/users/profile`**

---

### Request Headers

- **Authorization:** Bearer `<JWT token>`

---

### Response

#### Success Response

- **Status Code:** 200 OK
- **Description:** Returns the user's profile information.
- **Response Body:**

```json
{
  "_id": "string (user ID)",
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string"
}
```

#### Error Responses

##### Unauthorized

- **Status Code:** 401 Unauthorized
- **Description:** The user is not logged in or the token is invalid/expired.
- **Response Body:**

```json
{
  "message": "Unauthorized access"
}
```

---

### Notes

- The `authUser` middleware validates the JWT token and attaches the user information to the request object.

---

### How to Test

1. Set up the server with the provided code and necessary environment variables (e.g., `JWT_SECRET`).
2. Log in to obtain a valid JWT token.
3. Send a GET request to `/users/profile` with the `Authorization` header set to `Bearer <JWT token>`.
4. Verify the response matches the expected output as described above.

---

## /users/logout Endpoint

### Description

The `/users/logout` endpoint logs the user out by clearing the authentication token and blacklisting it. The user must be logged in and provide a valid JWT token to access this endpoint.

---

### HTTP Method

**GET**

---

### Endpoint

**`/users/logout`**

---

### Request Headers

- **Authorization:** Bearer `<JWT token>`

---

### Response

#### Success Response

- **Status Code:** 200 OK
- **Description:** User successfully logged out and the token is blacklisted.
- **Response Body:**

```json
{
  "message": "Logout successful"
}
```

#### Error Responses

##### Unauthorized

- **Status Code:** 401 Unauthorized
- **Description:** The user is not logged in or the token is invalid/expired.
- **Response Body:**

```json
{
  "message": "Unauthorized access"
}
```

---

### Notes

- The `authUser` middleware validates the JWT token.
- The token is cleared from cookies and stored in a blacklist collection with a TTL of 24 hours.

---

### How to Test

1. Set up the server with the provided code and necessary environment variables (e.g., `JWT_SECRET`).
2. Log in to obtain a valid JWT token.
3. Send a GET request to `/users/logout` with the `Authorization` header set to `Bearer <JWT token>`.
4. Verify the response matches the expected output as described above.

---

## /captains/register Endpoint

<details>

### Description

The `/captains/register` endpoint allows a new captain to register by providing their personal details and vehicle information. The endpoint validates the input, hashes the password, and stores the captain's details in the database.

---

### HTTP Method

**POST**

---

### Endpoint

**`/captains/register`**

---

### Request Body

The request body should be in JSON format and must include the following structure:

```json
{
  "fullname": {
    "firstname": "string (min length: 2, required)",
    "lastname": "string (min length: 2, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min length: 6, required)",
  "vehicle": {
    "color": "string (min length: 3, required)",
    "plate": "string (min length: 3, required)",
    "capacity": "integer (min: 1, required)",
    "vehicleType": "string (allowed values: motorcycle, car, auto)"
  }
}
```

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "janesmith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Blue",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### Response

#### Success Response

- **Status Code:** 201 Created
- **Description:** Captain successfully registered, and a success message is returned.
- **Response Body:**

```json
{
  "message": "Captain successfully registered",
  "captain": {
    "_id": "string (captain ID)",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "integer",
      "vehicleType": "string"
    }
  }
}
```

#### Error Responses

##### Validation Error

- **Status Code:** 400 Bad Request
- **Response Body:**

```json
{
  "errors": [
    {
      "msg": "string (error message)",
      "param": "string (parameter causing the error)",
      "location": "string (location of the parameter)"
    }
  ]
}
```

##### Missing Fields

- **Status Code:** 400 Bad Request
- **Response Body:**

```json
{
  "message": "All fields are required"
}
```

</details>

---

### Notes

- The `password` is hashed securely using bcrypt before storage.
- Input validation is implemented using `express-validator`.
- Vehicle types must be one of the following: `"motorcycle"`, `"car"`, or `"auto"`.

---

### How to Test

1. Set up the server with the provided code and necessary environment variables (e.g., `JWT_SECRET`).
2. Send a POST request to `/captains/register` with the required JSON body.
3. Verify the response matches the expected output as described above.

