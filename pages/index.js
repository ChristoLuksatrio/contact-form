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
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      flexDirection={"column"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"left"}>
          <Heading fontSize={"4xl"}>See Dash in action.</Heading>
          <Heading fontSize={"xl"}>
            Thank you for your interest in Dash Enterprise. We&#39;ll be in
            touch soon to schedule a demo.
          </Heading>
          <UnorderedList>
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
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
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
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Send
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack>
        <Box>
          <Image src="/images/calendar.png" alt="calendar" />
        </Box>
      </Stack>
      <Stack>
        <Grid templateColumns={"repeat(3, 1fr)"}>
          <GridItem>
            <Image src="/images/colgate-logo.png" alt="calendar" />
          </GridItem>
          <GridItem>
            <Image src="/images/nvidia-logo.png" alt="calendar" />
          </GridItem>
          <GridItem>
            <Image src="/images/kc-logo.png" alt="calendar" />
          </GridItem>
          <GridItem>
            <Image src="/images/jazz-logo.png" alt="calendar" />
          </GridItem>
          <GridItem>
            <Image src="/images/tmobile-logo.png" alt="calendar" />
          </GridItem>
          <GridItem>
            <Image src="/images/tva-logo.png" alt="calendar" />
          </GridItem>
        </Grid>
      </Stack>
    </Flex>
  );
}
