import { Grid, GridItem, Image } from "@chakra-ui/react";

const LogoGrid = ({ logos }) => {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
      {logos.map((logo, index) => (
        <GridItem key={index}>
          <Image
            mx={"auto"}
            height={4}
            src={"/images/" + logo.name}
            alt={logo.alt}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default LogoGrid;
