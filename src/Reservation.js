import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import BookingForm from "./component/BookingForm";

const ReservationForm = () => {
  const availableTimes = ["12:00", "12:30", "13:00", "13:30", "14:00"];
  return (
    <>
      <Box as="section" pt={10} pb={20} bg="primary1">
        <Container maxW="container.xl">
          <HStack justify="space-between">
            <Box>
              <Text
                as="h1"
                fontFamily="markazi"
                fontSize="5xl"
                color="primary2"
                lineHeight={0.75}
              >
                Little Lemon
              </Text>
              <Text
                as="h3"
                fontSize="3xl"
                fontFamily="markazi"
                lineHeight={1}
                color="white"
              >
                Reserve a Table
              </Text>
            </Box>
            <Image
              display={{ base: "none", md: "inline-block" }}
              src="img/bruchetta.png"
              alt="Image"
              rounded="3xl"
            ></Image>
            <Image
              display={{ base: "inline-block", md: "none" }}
              src="img/hero-mobile.png"
              alt="Image"
            ></Image>
          </HStack>
        </Container>
      </Box>
      <Box as="section" pt={10} pb={20} bg="highlight1">
        <Container maxW="container.xl">
          <BookingForm availableTimes={availableTimes} />
        </Container>
      </Box>
    </>
  );
};

export default ReservationForm;
