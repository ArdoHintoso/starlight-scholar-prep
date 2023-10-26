import "./App.css";
import Header from "./Header";
import MathExerciseContainer from "./components/MathExerciseContainer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header className="App-header" />
        <MathExerciseContainer />
      </div>
    </ChakraProvider>
  );
}

export default App;
