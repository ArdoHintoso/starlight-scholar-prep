import {
  Center,
  Stack,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
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
