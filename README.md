## Password Reset Flow Application

This is a full-stack application that implements a password reset flow with email verification. The front-end is built with React and styled using Tailwind CSS, while the back-end is powered by Node js, Express and MongoDB for database.

## Features

- User can request a password reset link via email.
- Users can reset their password using a secure link.
- Password reset token has an expiry time.
- Responsive UI built with Tailwind CSS.

## Technologies

- Front-End: React, Tailwind CSS
- Back-End: Node js, Express, MongoDB

## Usage

- Open your browser and navigate to URL
- Use the "Reset Password" feature to enter your email and receive a password reset link.
- Follow the link in your email to reset your password.

## API Endpoints

Authentication Routes

-- POST `/api/v1/auth/forgot-password`
- Request Body: { "email": "user@example.com" }
- Description: Sends a password reset link to the provided email address.

-- POST `/api/v1/auth/reset-password/:token`
- Request Body: { "password": "newPassword" }
- Description: Resets the password using the provided token.

## Environment Variables

Make sure to set the following environment variables in your .env file in the directory:
- `MongoDB_URI`: MongoDB connection string.
- `EMAIL_USER`: Your email address for sending reset links.
- `EMAIL_PASS`: Your email password.
- `PORT`: Port number for the server.