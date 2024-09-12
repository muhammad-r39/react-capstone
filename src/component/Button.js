import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.goto}>
      <Text
        display="inline-block"
        bg="primary2"
        color="black"
        fontWeight="bold"
        fontSize="lg"
        px={10}
        py={3}
        rounded="md"
        transition="all 0.3s"
        _hover={{ bg: "secondary1", color: "highlight2" }}
        shadow="md"
      >
        {props.text}
      </Text>
    </Link>
  );
};

export default Button;
