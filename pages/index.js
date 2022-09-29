import {
  Flex,
  Box,
  Stack,
  UnorderedList,
  ListItem,
  FormControl,
  Input,
  FormLabel,
  Heading,
  Image,
  Button,
  useColorModeValue,
  RadioGroup,
  Radio,
  Text,
  Show,
} from "@chakra-ui/react";
import LogoGrid from "../components/LogoGrid";
import React, { useState } from "react";

export default function Home() {
  const [profession, setProfession] = useState("Professional");

  const logos = [
    { name: "colgate-logo.png", alt: "Colgate Logo" },
    { name: "nvidia-logo.png", alt: "NVIDIA Logo" },
    { name: "kc-logo.png", alt: "KC Logo" },
    { name: "jazz-logo.png", alt: "Utah Jazz Logo" },
    { name: "tmobile-logo.png", alt: "T-Mobile Logo" },
    { name: "tva-logo.png", alt: "TVA Logo" },
  ];

  return (
    <Flex
      flexDirection={{ sm: "column", md: "row" }}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white"}
    >
      <Stack align={"left"} mb={4} mx={4}>
        <Heading fontSize={"4xl"}>See Dash in action.</Heading>
        <Heading fontSize={"xl"}>
          Thank you for your interest in Dash Enterprise. We&#39;ll be in touch
          soon to schedule a demo.
        </Heading>
        <UnorderedList spacing={2} pl={4} pt={2}>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ListItem>
          <ListItem>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </ListItem>
          <ListItem>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <Stack px={6} mb={-6} zIndex={50}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <RadioGroup onChange={setProfession} value={profession}>
                <Stack direction="row">
                  <Radio value="Professional">Professional</Radio>
                  <Radio value="Student">Student</Radio>
                </Stack>
              </RadioGroup>
              <FormControl id="firstName">
                <FormLabel>First name*</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name*</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Business Email*</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Phone*</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="company">
                <FormLabel>Company*</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="companyName">
                <FormLabel>Company Name*</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="title">
                <FormLabel>Title*</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="project">
                <FormLabel>Tell us about your project*</FormLabel>
                <Input type="text" />
              </FormControl>
              <Stack>
                <Flex align={"center"}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Send
                  </Button>
                  <Text ml={2}>Required*</Text>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Show below="md" mt={-4}>
          <Stack mt={-4}>
            <Box>
              <Image src="/images/calendar.png" alt="calendar" />
            </Box>
          </Stack>
        </Show>
        <Stack py={8}>
          <LogoGrid logos={logos} />
        </Stack>
      </Stack>
    </Flex>
  );
}
