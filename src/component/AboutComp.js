import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";

const AboutComp = () => {
  return (
    <Box as="section" py={20}>
      <Container maxW="container.xl">
        <HStack flexDirection={{ base: "column-reverse", md: "row" }}>
          <Box flex={1}>
            <Text as="h2" fontFamily="markazi" fontSize="5xl" lineHeight={0.75}>
              Little Lemon
            </Text>
            <Text as="h3" fontFamily="markazi" fontSize="3xl" lineHeight={1}>
              Chicago
            </Text>
            <Text
              as="p"
              fontSize="xl"
              fontWeight={700}
              mt={{ base: 10, md: 14 }}
              maxW={{ base: "full", md: 370 }}
              lineHeight={1.15}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. <br />
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Text>
          </Box>
          <Box flex={1} mb={{ base: 10, md: 0 }}>
            <Image src="img/about.png" alt="Food" />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default AboutComp;
