# Nesia the chatbot

## Proof of concept: Incorporating AI solutions into the Upsouth platform

---

### **Overview**

In this first development cycle of it's kind for the Upsouth platform. The development team for 2023 will demonstrate a proof-of-concept chatbot that provides assistance to youth users on the Up South web application. The chatbot will focus on guiding users through the signup process, facilitating login procedures, and assisting with creating posts and the rules and guidelines. The goal is to demonstrate the feasibility and potential of the chatbot concept by seamlessly integrating it into a mock-up web application.

We will be utilizing the vast services the AWS have to offer. In particular building the chatbot with Amazon Lex, integrating with AWS-SDK and an NodeJS Express API, and a customized User Interface created on a ReactJS frontend.

<!-- 
### **Built with:**

- [React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo-react&logoColor=026e00 "React")
- [React-url](https://react.dev/ "Reacturl")
- [Javascript](https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo-javascript&logoColor=026e00 "Javascript")
- [Javascript-url](https://www.javascript.com/ "Javascripturl")
- [CSS](https://img.shields.io/badge/CSS-20232A?style=for-the-badge&logo-css&logoColor=026e00 "CSS")
- [CSS-url](https://www.w3schools.com/css/ "CSSurl") -->

---

## **Getting started:**

### _Assumption:_

These instructions start with the assumption that the chatbot has already been built and tested in the AWS Lex console.

### _Setting Up AWS SDK for Amazon Lex Chatbot:_

This guide will help set up the local environment to use the AWS SDK for the Amazon Lex chatbot.

_Prerequisites:_

- AWS account with access to Amazon Lex.
- AWS Access Key ID and Secret Access Key.
- Region name

If not, please follow the instructions outlined in the documentation.

_Steps:_

- Install AWS CLI: The AWS Command Line Interface (AWS CLI) is a unified tool to manage the AWS services. AWS CLI uses your credentials to authenticate the requests it sends to AWS services. Download and install it from the [AWS CLI](https://aws.amazon.com/cli/) website.

- After the installation, verify it by typing the following command in the local machine powershell (we are using windows):

  ```sh
  aws --version
  ```

- Setup AWS Credentials: This is all done within the local machine powershell. After verifying AWS CLI is installed, run the following command:

    ```sh
        aws configure 
    ```

- You will then be prompted for the following information. Just input the required information and select enter:

    ```sh
        Access Key Id
        Secret Access Key
        Default region name [ap-southeast-2] 
        Default output format 
    ```

- NOTE: For Default output format, if comes down to your preference. We used json format, but you can use plain text if you wish.

- After following the required information, there will be no prompt to confirm success. Enter the following command to check if it was successful:

    ```sh
        aws configure list
    ```

- If successful the following will appear in the powershell:

    ```sh
        profile 
        access_key
        secret_key
        region
    ```

- The AWS Credentials are now setup. At this point your security credentials should be stored in your home directory under the path C:\Users\YourUsername\.aws\credentials. The contents of the credentials file should look like this:

  ```sh
  [default]
    aws_access_key_id=YOUR_ACCESS_KEY
    aws_secret_access_key=YOUR_SECRET_KEY
  ```

- Your local environment should now be set.

- Follow the README instructions for the Server and Client directories.

---

### **Installation:**

1. Clone the Lexbot sample repo.

   ```sh
   git clone https://github.com/HMoana/lexbot-sample.git
   ```

2. Install NPM packages in both the client and server subdirectories.

   ```sh
   npm install
   ```  

---

### **Instructions:**

- Make sure Amazon Lex Chatbot is built and configured correctly.
- In the Server directory you require: botId, botAliasId, region and the language the bot was built with.
- Security credentials are important in order to access the Amazon Lex Chatbot. For the purposes of this practice environment, we will be using the [AWS shared credentials file environment variable](https://docs.aws.amazon.com/sdkref/latest/guide/creds-config-files.html).

### **Features:**

- Integration of an Amazon Lex Chatbot with a React frontend using AWS-SDK and an Express API.

---

### **Future improvements:**

- For v1 development cycle research other security and authentication features eg AWS Cognito.
- Improve the frontend for demonstration.
- Refactor the backend and incorporate testing.
- Research AWS CloudFormation templates and other possible services.

---

### **Contributor Contacts:**

- Heni Kimura - <henik@missionreadyhq.com>
- Jin Zhang - <jinzh235@gmail.com>

### **Project Link:**

- [Github repository](https://github.com/HMoana/lexbot-sample.git "Github repository")

### **License:**

Distributed under the MIT License. See LICENSE.txt for more information.

### **Acknowledgments:**

- [AWS CLI](https://aws.amazon.com/cli/ "AWS CLI")
- [AWS Config](https://docs.aws.amazon.com/sdkref/latest/guide/creds-config-files.html "AWS Config")
- [AWS Javascript](https://aws.amazon.com/developer/language/javascript/ "Javasript on AWS")
- [AWS Node.JS](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html "Getting started in Node.JS")
- [AWS SDK](https://aws.amazon.com/developer/tools/ "AWS developer tools and SDKs")
- [AWS Lex](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/lex-bot-example.html "Building an Amazon Lex chatbot")