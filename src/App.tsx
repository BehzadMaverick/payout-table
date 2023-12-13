import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import Payouts from "pages/Payouts";
import theme from "theme";
import GlobalStyles from "layouts/GlobalStyles";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <GlobalStyles />
      <Payouts />
    </ThemeProvider>
  );
};

export default App;
