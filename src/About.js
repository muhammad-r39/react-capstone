import { Box, Container } from "@chakra-ui/react";
import AboutComp from "./component/AboutComp";

const About = () => {
  return (
    <Box as="section" bg="highlight1">
      <Container maxW="container.xl">
        <AboutComp />
      </Container>
    </Box>
  );
};

export default About;
