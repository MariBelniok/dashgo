import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Marianna</Text>
            <Text 
                color="gray.300"
                fontSize="small"
            >
                mariannabelniok@outlook.com
            </Text>
        </Box>
        <Avatar size="md" name="Marianna Belniok"/>
    </Flex>
    );
}