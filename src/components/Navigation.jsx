import { Box, Flex, Text, Link } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

function Navigation() {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <img src={logo} alt="Logo" width="40px" height="40px" />
        </Box>
        <Flex alignItems="center">
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.700" }} href="/">
            Home
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navigation;
