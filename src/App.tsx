import { AppRouter } from "./router/AppRouter"
import "./App.css"
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <AppRouter />
      <Toaster position="bottom-center" />
    </>
  )
}

export default App
