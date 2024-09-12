import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import useSubmit from "./hook/useSubmit";
import { useEffect } from "react";
import { useAlertContext } from "./context/alertContext";

// Validation schema using Yup
const contactSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required."),
  message: Yup.string()
    .required("Message is required.")
    .min(10, "Minimum 10 characters."),
});

const Contact = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: contactSchema,
    onSubmit: (values) => submit("", values),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        formik.resetForm();
        response.message =
          "Thank you for contacting us. We will get back to you soon.";
      }
      onOpen(response.type, {
        title:
          response.type === "success" ? "Message Sent!" : "Submission Failed!",
        body: response.message,
      });
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <Box as="section" pt={10} pb={20} bg="highlight1">
      <Container maxW="container.xl" bg="white" p={10} rounded="md">
        <Text as="h3" fontFamily="markazi" fontSize="3xl" mb={5}>
          Contact Us
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack align="stretch" spacing={5}>
            <FormControl
              isInvalid={formik.touched.name && !!formik.errors.name}
            >
              <FormLabel htmlFor="name">Name: </FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                rounded="10px"
                bg="highlight1"
                {...formik.getFieldProps("name")}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.email && !!formik.errors.email}
            >
              <FormLabel htmlFor="email">Email: </FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                rounded="10px"
                bg="highlight1"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.message && !!formik.errors.message}
            >
              <FormLabel htmlFor="message">Message: </FormLabel>
              <Textarea
                id="message"
                name="message"
                rounded="10px"
                bg="highlight1"
                rows={6}
                {...formik.getFieldProps("message")}
              />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              isLoading={isLoading}
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
              Send Message
            </Button>
          </VStack>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
