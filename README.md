# Easylearn - KYC (Know Your Customer)
A Next.js React Application for Implementation of KYC specifically for Easylearn Course for Theoretical Driving Course of Drive Smart. This is based for LTO Recommendation or Guide.
## Developers Guide
**IMPORTANT NOTE: You can check the AWS Architeture Solution at Diagrams.net - [KYC-NextJS](https://app.diagrams.net/#G1Tuj6wAzT2WwfNz_h2cvCeRrprnUWghSW)**
1. Sign up for an AWS account
2. Install the AWS Amplify cli:\
`npm install -g @aws-amplify/cli`
3. Configure amplify in the console:amplify configure\
`amplify configure` \
For more information about aws amplify configuration click the [Guide](https://docs.amplify.aws/cli/#extensibility)

**Installing Dependencies** \
_Be sure to have Node.js installed in the computer_ \
`npm install` \
`npm run dev` 

Check localhost:3000 or any ports prompted to the CLI if the Application is running.


### TO-DO's 📝
☐ Configure Backend using GraphQL and Dynamo DB with the help of `amplify add api` \
☐ OPTIONAL BUT IS A MUST : Deploy infrastructure using `amplify push` \
☐ Edit GraphQL Schema that defaultly created by AMPLIFY Refer also to Youtube Videos. \
☐ Configure AWS S3 Bucket for Storing Images to use \
☐ Use the GraphQL API to store the the data of learners stored in Temporary Storage (CONTEXT API) \
☐ Configuration of AWS Rekognition for Compairing Faces \
☐ Refactore Code for Loading Animation for Compairing Faces Routes User speficially if Error or Successful 


### OPTIMIZATION
Apply **React [Memoization](https://www.qed42.com/insights/coe/javascript/optimize-your-react-app-performance-memoization)** to Prevent Unnecessary Re-renders in the Three Nodes of DOM. 

Cause of Optimization: \
We are using CONTEXT API for Storing States which we use on the root or index page the Context to avoid unnecessary re-render we must optimize the React Application 
\ 
2nd Option: \
We can also checkout the new emerging state management instead of using Redux the [Zustand](https://github.com/pmndrs/zustand)
