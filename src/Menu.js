import { Box, Container, Grid, Text } from "@chakra-ui/react";
import MenuCard from "./component/MenuCard";

const Menu = () => {
  const menu = [
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
    {
      id: 4,
      title: "Greek salad",
      price: "12.99",
      image: "img/lemon-dessert.png",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: 5,
      title: "Bruchetta",
      price: "5.99",
      image: "img/bruchetta.png",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      id: 6,
      title: "Lemon Dessert",
      price: "5.00",
      image: "img/greek-salad.png",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <Box as="section" pt={10} pb={20} bg="highlight1">
      <Container maxW="container.xl">
        <Text as="h2" fontSize="3xl" fontWeight={600} mb={10}>
          Our Menu
        </Text>
        <Grid
          gap={30}
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
        >
          {menu.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
