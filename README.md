# React-native-User Information App
This project is a React Native application that fetches and displays random user data from a public API. It demonstrates how to integrate an external API, manage state with React Hooks, and build a simple, navigable UI to present user information.
Below is a sample README.md content that you can include in your repository:

## Overview
This project is a simple React Native application that fetches user information from a public API and displays it in a user-friendly interface. The app allows you to navigate through 80 randomly generated user records using "Previous" and "Next" buttons. Each user record includes the following fields:
- ID
- UID
- First Name
- Last Name
- Username
- Email
- Password
- Avatar

## Features
- **API Integration:** Fetches user data from the [Random Data API](https://random-data-api.com/api/users/random_user?size=80)
- **User Navigation:** Navigate through users one by one using navigation buttons.
- **Responsive UI:** Displays user information in a clean, organized layout.

## Installation and Running the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/react-native-user-info-app.git
   cd react-native-user-info-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Running the Application**

   - **Using Expo:**

     ```bash
     expo start
     ```

   - **Using React Native CLI:**

     For iOS:
     ```bash
     npx react-native run-ios
     ```
     For Android:
     ```bash
     npx react-native run-android
     ```
