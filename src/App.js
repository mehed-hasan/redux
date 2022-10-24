import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/counterPage";
import HomePage from "./pages/homePage";

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/shop" element={<CounterPage/>}></Route>
    </Routes>
    </BrowserRouter>
   );
}

export default App;