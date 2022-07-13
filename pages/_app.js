import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function MyApp({ Component, pageProps }) {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

  return (
    <SSRProvider>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
    </SSRProvider>
  );
}

export default MyApp;
