import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useAlertContext } from "../context/alertContext";

const reservationSchemaStep1 = Yup.object({
  date: Yup.string().required("Date is required."),
  time: Yup.string().required("Time is required."),
  people: Yup.number().required("Number of people is required.").min(1),
  notes: Yup.string(),
  seating: Yup.string().required("Seating selection is required."),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const reservationSchemaStep2 = Yup.object({
  firstName: Yup.string().required("First Name is required."),
  lastName: Yup.string().required("Last Name is required."),
  phone: Yup.string()
    .min(10, "Phone number is at least 10 digit")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required."),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required."),
  address: Yup.string().required("Address is required."),
});

const BookingForm = (props) => {
  const [step, setStep] = useState(1);
  const { onOpen } = useAlertContext();

  const formikStep1 = useFormik({
    initialValues: {
      date: "",
      time: "",
      people: "",
      notes: "",
      seating: "indoor",
    },
    validationSchema: reservationSchemaStep1,
    onSubmit: (values) => setStep(2),
  });

  const formikStep2 = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    },
    validationSchema: reservationSchemaStep2,
    onSubmit: (values) => {
      console.log("Final reservation details:", {
        ...formikStep1.values,
        ...values,
      });
      formikStep2.resetForm();
      onOpen("success", {
        title: "Congratulations!",
        body: "Reservation submitted successfully!",
      });
    },
  });

  return (
    <Box as="section" pt={10} pb={20} bg="highlight1">
      <Container maxW="container.xl">
        <Box rounded="md" shadow="md" bg="white" p={10}>
          <Text as="h3" fontFamily="markazi" fontSize="3xl" mb={5}>
            Table Reservation
          </Text>
          {step === 1 ? (
            <form onSubmit={formikStep1.handleSubmit}>
              <VStack align="stretch" spacing={7}>
                <HStack>
                  <FormControl
                    isInvalid={
                      formikStep1.touched.date && !!formikStep1.errors.date
                    }
                  >
                    <FormLabel htmlFor="date">Date:</FormLabel>
                    <Input
                      type="date"
                      id="date"
                      name="date"
                      rounded="10px"
                      bg="highlight1"
                      {...formikStep1.getFieldProps("date")}
                    />
                    <FormErrorMessage position="absolute" mt={1}>
                      {formikStep1.errors.date}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={
                      formikStep1.touched.time && !!formikStep1.errors.time
                    }
                  >
                    <FormLabel htmlFor="time">Time:</FormLabel>
                    <Select
                      id="time"
                      name="time"
                      rounded="10px"
                      bg="highlight1"
                      {...formikStep1.getFieldProps("time")}
                    >
                      <option value="">Select Time</option>
                      {props.availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage position="absolute" mt={1}>
                      {formikStep1.errors.time}
                    </FormErrorMessage>
                  </FormControl>
                </HStack>
                <FormControl
                  isInvalid={
                    formikStep1.touched.people && !!formikStep1.errors.people
                  }
                >
                  <FormLabel htmlFor="people">Number of People:</FormLabel>
                  <Input
                    type="number"
                    id="people"
                    name="people"
                    rounded="10px"
                    bg="highlight1"
                    {...formikStep1.getFieldProps("people")}
                  />
                  <FormErrorMessage position="absolute" mt={1}>
                    {formikStep1.errors.people}
                  </FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="notes">
                    Any Special Note for Us:
                  </FormLabel>
                  <Input
                    type="text"
                    id="notes"
                    name="notes"
                    rounded="10px"
                    bg="highlight1"
                    {...formikStep1.getFieldProps("notes")}
                  />
                </FormControl>

                <FormControl
                  isInvalid={
                    formikStep1.touched.seating && !!formikStep1.errors.seating
                  }
                >
                  <FormLabel>Seating Preference:</FormLabel>
                  <RadioGroup
                    id="seating"
                    name="seating"
                    {...formikStep1.getFieldProps("seating")}
                  >
                    <Stack direction="row">
                      <Radio value="indoor">Indoor</Radio>
                      <Radio value="outdoor">Outdoor</Radio>
                    </Stack>
                  </RadioGroup>
                  <FormErrorMessage position="absolute" mt={1}>
                    {formikStep1.errors.seating}
                  </FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
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
                >
                  Next
                </Button>
              </VStack>
            </form>
          ) : (
            <form onSubmit={formikStep2.handleSubmit}>
              <VStack align="stretch" spacing={5}>
                <IconButton
                  onClick={() => setStep(1)}
                  flex={1}
                  display="inline-block"
                  alignSelf="start"
                  p={0}
                  minW={0}
                  minH={0}
                  lineHeight={0}
                  outlineOffset={0}
                  outline={0}
                  fontSize="2rem"
                  icon={<FontAwesomeIcon icon={faCircleChevronLeft} />}
                  transition="all 0.3s"
                  color="primary1"
                  _hover={{ color: "secondary1" }}
                  shadow="md"
                />
                <FormControl
                  isInvalid={
                    formikStep2.touched.firstName &&
                    !!formikStep2.errors.firstName
                  }
                >
                  <FormLabel htmlFor="firstName">First Name:</FormLabel>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    rounded="10px"
                    bg="highlight1"
                    {...formikStep2.getFieldProps("firstName")}
                  />
                  <FormErrorMessage position="absolute" mt={1}>
                    {formikStep2.errors.firstName}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formikStep2.touched.lastName &&
                    !!formikStep2.errors.lastName
                  }
                >
                  <FormLabel htmlFor="lastName">Last Name:</FormLabel>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    rounded="10px"
                    bg="highlight1"
                    {...formikStep2.getFieldProps("lastName")}
                  />
                  <FormErrorMessage position="absolute" mt={1}>
                    {formikStep2.errors.lastName}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formikStep2.touched.phone && !!formikStep2.errors.phone
                  }
                >
                  <FormLabel htmlFor="phone">Phone:</FormLabel>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    rounded="10px"
                    bg="highlight1"
                    {...formikStep2.getFieldProps("phone")}
                  />
                  <FormErrorMessage position="absolute" mt={1}>
                    {formikStep2.errors.phone}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formikStep2.touched.email && !!formikStep2.errors.email
                  }
                >
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    rounded="10px"
                    bg="highlight1"
                    {...formikStep2.getFieldProps("email")}
                  />
                  <FormErrorMessage position="absolute" mt={1}>
                    {formikStep2.errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    formikStep2.touched.address && !!formikStep2.errors.address
                  }
                >
                  <FormLabel htmlFor="address">Address:</FormLabel>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    rounded="10px"
                    bg="highlight1"
                    {...formikStep2.getFieldProps("address")}
                  />
                  <FormErrorMessage position="absolute" mt={1}>
                    {formikStep2.errors.address}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  bg="primary1"
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  px={10}
                  py={2}
                  mt={5}
                  rounded="md"
                  transition="all 0.3s"
                  _hover={{ bg: "secondary1", color: "highlight2" }}
                  shadow="md"
                >
                  Reserve
                </Button>
              </VStack>
            </form>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default BookingForm;
