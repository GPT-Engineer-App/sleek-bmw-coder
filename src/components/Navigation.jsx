import { Box, Flex, Link, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

function Navigation() {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Image src={logo} alt="Logo" boxSize="50px" />
        </Box>
        <Flex alignItems="center">
          <Link px={3} py={2} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.600" }} href="/services">
            Services
          </Link>
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.700" }} href="/about-us">
            About Us
          </Link>
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.700" }} href="/contact">
            Contact
          </Link>
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "teal.700" }} href="/">
            Home
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navigation;
