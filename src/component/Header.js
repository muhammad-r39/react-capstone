import {
  Box,
  Container,
  HStack,
  IconButton,
  Image,
  Link,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = {
    home: "/",
    about: "/about",
    menu: "/menu",
    reservation: "/reservation",
    contact: "/contact",
    login: "/login",
  };

  return (
    <Box as="header">
      <Container maxW="container.xl" py={{ base: 4, lg: 7 }}>
        <HStack justify="space-between" align="center">
          {/* Logo */}
          <Box>
            <NavLink to="/">
              <Image src="img/logo.png" width="200px" alt="Logo" />
            </NavLink>
          </Box>

          {/* Desktop Navigation */}
          <Box as="nav" display={{ base: "none", lg: "block" }}>
            <HStack as="ul" spacing={7} listStyleType="none" align="center">
              {Object.entries(navLinks).map(([link, url]) => (
                <Box as="li" key={link}>
                  <NavLink to={url}>
                    {({ isActive }) => (
                      <Link
                        as="span"
                        fontSize="xl"
                        fontWeight="500"
                        textTransform="capitalize"
                        textDecoration="none"
                        _hover={{ color: "primary2" }}
                        color={isActive ? "secondary1" : "black"}
                        transition="color 0.3s ease"
                      >
                        {link}
                      </Link>
                    )}
                  </NavLink>
                </Box>
              ))}
            </HStack>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            icon={<FontAwesomeIcon icon={faBars} />}
            aria-label="Open Menu"
            display={{ base: "block", lg: "none" }}
            onClick={onOpen}
          />
        </HStack>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton icon={<FontAwesomeIcon icon={faTimes} />} />{" "}
          {/* Close button */}
          <DrawerBody>
            <VStack
              as="ul"
              spacing={5}
              listStyleType="none"
              align="start"
              mt={10}
            >
              {Object.entries(navLinks).map(([link, url]) => (
                <Box as="li" key={link} onClick={onClose}>
                  <NavLink to={url}>
                    {({ isActive }) => (
                      <Link
                        as="span"
                        fontSize="xl"
                        fontWeight="500"
                        textTransform="capitalize"
                        textDecoration="none"
                        _hover={{ color: "primary2" }}
                        color={isActive ? "secondary1" : "black"}
                        transition="color 0.3s ease"
                      >
                        {link}
                      </Link>
                    )}
                  </NavLink>
                </Box>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
