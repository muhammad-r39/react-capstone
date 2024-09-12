import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuCard = (props) => {
  return (
    <VStack
      rounded="md"
      overflow="hidden"
      flex={1}
      gap={0}
      bg="highlight1"
      align="stretch"
      shadow="1px 2px 5px rgb(0 0 0/ 20%)"
    >
      <Box h={185} overflow="hidden">
        <Image src={props.image} alt={props.title} w="full" h="full" />
      </Box>
      <VStack justify="start" px={25} pt={3} pb={25} align="stretch" flex={1}>
        <HStack justify="space-between">
          <Box as="h3" fontFamily="markazi" fontWeight={600} fontSize="2xl">
            {props.title}
          </Box>
          <Box as="span" color="secondary1" fontWeight={700}>
            ${props.price}
          </Box>
        </HStack>
        <Text as="p" lineHeight={1.187} mb={4} color="primary1">
          {props.description}
        </Text>
        <Link as="a" display="inline-block" mt="auto" color="highlight2">
          <Text as="span" fontWeight={700} mr={3}>
            Order a delivery
          </Text>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </VStack>
    </VStack>
  );
};

export default MenuCard;
