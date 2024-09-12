import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "./hook/useSubmit";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlertContext } from "./context/alertContext";

const loginSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Minimum 8 charachters."),
});

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => submit("", values),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        response.message = "Welcome " + response.data.username;
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
      onOpen(response.type, {
        title:
          response.type === "success"
            ? "Login Success!"
            : "Login Attempt Failed!",
        body: response.message,
      });
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <Box as="section" pt={10} pb={20} bg="highlight1">
      <Container maxW="container.xl">
        <Box rounded="md" shadow="md" bg="white" p={10}>
          <Text as="h3" fontFamily="markazi" fontSize="3xl" mb={5}>
            Login
          </Text>
          <form onSubmit={formik.handleSubmit}>
            <VStack align="stretch">
              <FormControl
                isInvalid={formik.touched.username && !!formik.errors.username}
                mb={5}
              >
                <FormLabel htmlFor="username">Username: </FormLabel>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  rounded="10px"
                  bg="highlight1"
                  {...formik.getFieldProps("username")}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.password && !!formik.errors.password}
                mb={5}
              >
                <FormLabel htmlFor="password">Password: </FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  rounded="10px"
                  bg="highlight1"
                  {...formik.getFieldProps("password")}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <HStack justify="space-between">
                <Button
                  type="submit"
                  isLoading={isLoading}
                  display="inline-block"
                  bg="primary1"
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  px={10}
                  py={2}
                  rounded="md"
                  transition="all 0.3s"
                  _hover={{ bg: "secondary1", color: "highlight2" }}
                  shadow="md"
                  alignSelf="start"
                >
                  Login
                </Button>
                {/* <Link to="/registration">
                  <Text
                    display="inline-block"
                    bg="primary2"
                    color="black"
                    fontWeight="bold"
                    fontSize="lg"
                    px={10}
                    py={2}
                    rounded="md"
                    transition="all 0.3s"
                    _hover={{ bg: "secondary1", color: "highlight2" }}
                    shadow="md"
                  >
                    Register
                  </Text>
                </Link> */}
              </HStack>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
