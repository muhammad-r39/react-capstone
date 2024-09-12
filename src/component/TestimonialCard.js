import { HStack, Image, Text, VStack } from "@chakra-ui/react";

const TestimonialCard = ({ props }) => {
  return (
    <VStack
      bg="white"
      flex={1}
      px={17}
      pt={6}
      pb={5}
      rounded="sm"
      align="start"
      fontSize="xs"
      shadow="1px 2px 5px rgb(0 0 0/ 20%)"
    >
      <Image src="img/stars.png" alt="Rating" />
      <HStack>
        <Image src={props.photo} alt={props.name} />
        <VStack fontWeight={700} align="start" gap={0} my={3}>
          <Text color="highlight2">{props.name}</Text>
          <Text color="#6E6F6E">{props.username}</Text>
        </VStack>
      </HStack>
      <Text as="p" lineHeight={1.167} color="#6E6F6E">
        {props.quote}
      </Text>
    </VStack>
  );
};

export default TestimonialCard;
