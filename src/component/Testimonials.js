import { Box, Container, HStack, Text } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonialList = [
    {
      id: 1,
      name: "Cecil Sutton",
      username: "Cecil72",
      photo: "img/user1.png",
      quote:
        "“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”",
    },
    {
      id: 2,
      name: "Jon Do",
      username: "Johnny_Utah",
      photo: "img/user2.png",
      quote: "“We had such a great time celebrating my grandmothers bitthday!”",
    },
    {
      id: 3,
      name: "Ivan Ferguson",
      username: "Ivan34",
      photo: "img/user3.png",
      quote: "“Best Feta Salad in town. Flawless everytime!”",
    },
    {
      id: 4,
      name: "Clifton Perry",
      username: "Cliftonp",
      photo: "img/user4.png",
      quote: "“Such a chilled out atmosphere - love it!”",
    },
  ];

  return (
    <Box
      as="section"
      bg="primary1"
      pt={{ base: 10, md: 28 }}
      pb={{ base: 16, md: 28 }}
    >
      <Container maxW="container.xl">
        <Text
          as="h2"
          fontFamily="markazi"
          align="center"
          fontSize="4xl"
          color="white"
          mb={{ base: 8, md: 10 }}
        >
          Testimonials
        </Text>
        <HStack
          align="stretch"
          gap={22}
          flexDirection={{ base: "column", md: "row" }}
        >
          {testimonialList.map((testimonial) => (
            <TestimonialCard key={testimonial.id} props={testimonial} />
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default Testimonials;
