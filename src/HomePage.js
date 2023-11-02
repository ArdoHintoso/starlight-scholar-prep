import { Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Center>
      <Link to="/worksheet">
        <Text>Begin Worksheet</Text>
      </Link>
    </Center>
  );
};

export default HomePage;
