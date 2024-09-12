import { Box, Container, Text } from "@chakra-ui/react";

const Terms = () => {
  return (
    <Box as="section" pt={10} pb={16}>
      <Container maxW="container.xl">
        <Text as="h1" fontSize="5xl">
          Terms of Services
        </Text>
        <Text as="h2" fontSize="3xl" mt={5} mb={2}>
          Introduction
        </Text>
        <Text as="p">
          Welcome to Little Lemon Restaurant. We are committed to safeguarding
          your privacy and ensuring that your personal information is protected.
          This Privacy Policy explains how we collect, use, disclose, and
          protect your data when you use our website, products, and services.
        </Text>
        <Text as="h2" fontSize="3xl" mt={5} mb={2}>
          Information We Collect
        </Text>
        <Text as="p">We may collect the following types of information:</Text>
        <Box as="ol" pl={5} mt={4}>
          <Text as="li">
            Personal Information: Name, email address, phone number, and other
            contact details.
          </Text>
          <Text as="li">
            Usage Data: Information on how you access and use our services,
            including IP addresses, browser type, and browsing activity.
          </Text>
          <Text as="li">
            Cookies and Tracking Technologies: We use cookies to enhance your
            experience, analyze site traffic, and understand usage patterns.
          </Text>
        </Box>
        <Text as="h2" fontSize="3xl" mt={5} mb={2}>
          How We Use Your Information
        </Text>
        <Text as="p">The information we collect is used to:</Text>
        <Box as="ul" pl={5} mt={4}>
          <Text as="li">Provide, operate, and maintain our services. </Text>
          <Text as="li">Improve, personalize, and expand our website. </Text>
          <Text as="li">
            Communicate with you, including sending updates and promotional
            materials.
          </Text>
          <Text as="li">Analyze usage trends and gather statistical data.</Text>
        </Box>
        <Text as="h2" fontSize="3xl" mt={5} mb={2}>
          Sharing Your Information
        </Text>
        <Text as="p">
          We do not sell or rent your personal information. However, we may
          share your data with third parties in the following circumstances:
        </Text>
        <Box as="ul" pl={5} mt={4}>
          <Text as="li">
            Service Providers: To assist us in operating our website and
            services.
          </Text>
          <Text as="li">
            Legal Requirements: To comply with legal obligations or to protect
            our rights.
          </Text>
        </Box>
        <Text as="h2" fontSize="3xl" mt={5} mb={2}>
          Data Security
        </Text>
        <Text as="p">
          We take appropriate security measures to protect your information from
          unauthorized access, alteration, disclosure, or destruction. However,
          please note that no internet transmission or storage method is 100%
          secure.
        </Text>
        <Text as="h2" fontSize="3xl" mt={5} mb={2}>
          Contact Us
        </Text>
        <Text as="p">
          If you have any questions about this Privacy Policy, please contact us
          at 2420 Crim Lane Dayton, OH 45406.
        </Text>
      </Container>
    </Box>
  );
};

export default Terms;
