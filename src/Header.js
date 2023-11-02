import {
  Center,
  Stack,
  Editable,
  EditableInput,
  EditablePreview,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" align="left">
        <Text>Starlight Scholar Prep</Text>
      </Link>

      <Center height="100px">
        <Stack direction="row">
          <Editable defaultValue="Welcome, ">
            <EditablePreview />
            <EditableInput />
          </Editable>

          <Editable defaultValue="Scholar (Click to Change)">
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Stack>
      </Center>
    </header>
  );
};

export default Header;
