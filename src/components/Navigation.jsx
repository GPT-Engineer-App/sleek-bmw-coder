import { Box, Flex, Link, Image, HStack, Button } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

function Navigation() {
  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Image src={logo} alt="Logo" boxSize="50px" />
        </Box>
        <HStack spacing={8} alignItems="center">
          <Link px={3} py={2} rounded={"md"} _hover={{ textDecoration: "none", bg: "gray.700" }} href="/services">
            Services
          </Link>
          <Link px={3} py={2} rounded={"md"} _hover={{ textDecoration: "none", bg: "gray.700" }} href="/about-us">
            About Us
          </Link>
          <Link px={3} py={2} rounded={"md"} _hover={{ textDecoration: "none", bg: "gray.700" }} href="/contact">
            Contact
          </Link>
          <Link px={3} py={2} rounded={"md"} _hover={{ textDecoration: "none", bg: "gray.700" }} href="/">
            Home
          </Link>
        </HStack>
        <Button colorScheme="teal" size="sm">
          Get Started
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
