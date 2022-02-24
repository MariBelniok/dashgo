import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
  return (
    <HStack
      spacing="8"
      mx="8"
      pr="8"
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
      ml="auto"
    >
      <Flex align="center">
        <Icon as={RiNotificationLine} />
        <Icon as={RiUserAddLine} />
      </Flex>
    </HStack>
  );
}
