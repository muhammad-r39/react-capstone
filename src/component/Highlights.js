import { Box, Container, HStack, Text } from "@chakra-ui/react";
import Button from "./Button";
import MenuCard from "./MenuCard";

const Highlights = () => {
  const specials = [
    {
      id: 1,
      title: "Greek salad",
      price: "12.99",
      image: "img/greek-salad.png",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: "5.99",
      image: "img/bruchetta.png",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: "5.00",
      image: "img/lemon-dessert.png",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <Box as="section" pt={{ base: 14, md: 32 }} pb={20}>
      <Container maxW="container.xl">
        <HStack justify="space-between">
          <Text as="h2" fontSize="3xl" fontWeight={600}>
            Specials
          </Text>
          <Button goto="/menu" text="Online Menu" />
        </HStack>
        <HStack
          gap={30}
          align="streatch"
          mt={{ base: 10, md: 14 }}
          flexDirection={{ base: "column", md: "row" }}
        >
          {specials.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default Highlights;
