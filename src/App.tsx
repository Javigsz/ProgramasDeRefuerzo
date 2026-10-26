import "./App.css";
import AdaptacionEducativa from "./AdaptacionEducativa.tsx";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="pt-8 bg-navy-50">
        <AdaptacionEducativa />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
