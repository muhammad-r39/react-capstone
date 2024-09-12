import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import Button from "./Button";

const Hero = () => {
  return (
    <Box
      as="section"
      bg="primary1"
      height={{ base: "auto", md: 450 }}
      pt={{ base: 4, md: 14 }}
      pb={10}
    >
      <Container maxW="container.xl">
        <HStack justify="space-between" align="start">
          <Box align="left" pt={6}>
            <Box color="white" maxW="400px" mb={6}>
              <Text
                as="h1"
                fontFamily="markazi"
                fontSize="5xl"
                color="primary2"
                lineHeight={0.75}
              >
                Little Lemon
              </Text>
              <Text as="h3" fontSize="3xl" fontFamily="markazi" lineHeight={1}>
                Chicago
              </Text>
              <HStack mt={5}>
                <Text as="p" fontSize="lg" w={250} lineHeight={1.3}>
                  We are a family owned Mediterranean restaurant, focused on
                  traditional recipes served with a modern twist.
                </Text>
                <Image
                  display={{ base: "inline-block", md: "none" }}
                  src="img/hero-mobile.png"
                  alt="Image"
                ></Image>
              </HStack>
            </Box>
            <Button goto="/reservation" text="Reserve a Table" />
          </Box>
          <Image
            display={{ base: "none", md: "block" }}
            src="img/hero.png"
            alt="Image"
          ></Image>
        </HStack>
      </Container>
    </Box>
  );
};

export default Hero;
