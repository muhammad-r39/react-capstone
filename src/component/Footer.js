import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box as="section" bg="primary1" color="white" py={{ base: 10, md: 20 }}>
      <Container maxW="container.xl">
        <HStack
          align="stretch"
          gap={{ base: 5, md: 20 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={1}>
            <Link to="/">
              <Image src="img/logo2.png" alt="Little Lemon Logo" />
            </Link>
          </Box>
          <Box flex={1}>
            <Text as="h4" fontWeight={700} fontSize="xl" mb={5} mt={6}>
              Links
            </Text>
            <Box as="ul" listStyleType="none">
              <Box
                as="li"
                transition="color 0.3s"
                _hover={{ color: "secondary1" }}
              >
                <Link to="/policy">Privacy Policy</Link>
              </Box>
              <Box
                as="li"
                transition="color 0.3s"
                _hover={{ color: "secondary1" }}
              >
                <Link to="/terms">Terms of Service</Link>
              </Box>
              <Box
                as="li"
                transition="color 0.3s"
                _hover={{ color: "secondary1" }}
              >
                <Link to="/contact">Contact</Link>
              </Box>
            </Box>
          </Box>
          <Box flex={1}>
            <Text as="h4" fontWeight={700} fontSize="xl" mb={5} mt={6}>
              Contact
            </Text>
            <Box as="ul" listStyleType="none">
              <Box
                as="li"
                transition="color 0.3s"
                _hover={{ color: "secondary1" }}
              >
                <Link to="tel:555-555-5555">555-555-5555</Link>
              </Box>
              <Box
                as="li"
                transition="color 0.3s"
                _hover={{ color: "secondary1" }}
              >
                <Link to="mailto:info@littlelemon.com">
                  info@littlelemon.com
                </Link>
              </Box>
            </Box>
          </Box>
          <Box flex={1}>
            <Text as="h4" fontWeight={700} fontSize="xl" mb={5} mt={6}>
              Address
            </Text>
            <Text>
              2420 Crim Lane <br />
              Dayton, OH 45406
            </Text>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
