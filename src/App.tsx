import "./App.css";
import AdaptacionEducativa from "./AdaptacionEducativa.tsx";
import Footer from "./Footer.tsx";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="pt-8 bg-[#faf6f4] text-slate-700">
        <AdaptacionEducativa />
      </div>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
