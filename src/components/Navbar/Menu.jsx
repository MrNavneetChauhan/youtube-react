import { Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";

export const MenuModal = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <Menu>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};
