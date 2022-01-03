import "../styles/globals.css"
import { DataProvider } from "../src/context/DataContext"
import Amplify from "aws-amplify";
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);


function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
