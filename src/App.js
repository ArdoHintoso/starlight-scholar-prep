import "./App.css";
import Header from "./Header";
import MathExerciseContainer from "./components/MathExerciseContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <Header className="App-header" />
        </div>
        <Routes>
          <Route path="/worksheet" element={<MathExerciseContainer />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
