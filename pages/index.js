import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="" />
    <Box p="5">
      <Text fontSize="sm" color="gray.500" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingButtom="3" color="gray.700">
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);
export default function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
      <Banner
        purpose=" RENT A HOME "
        title1="Rental Homes"
        title2="for everyone"
        desc1="Explore Apartments,Rooms, Houses "
        desc2="and More "
        buttonText="Explore Houses for Rent"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner />
      <Flex>{/* Fetch properties and Map over them 🙂  */}</Flex>
      <Banner
        purpose=" BUY A HOME "
        title1="Buy and Own "
        title2="Dream Home"
        desc1="Explore Apartments,Rooms, Houses "
        desc2="and More "
        buttonText="Explore Houses for Sale"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner />
      {/* Fetch properties and Map over them 🙂  */}
    </Box>
  );
}
export async function getStaticProps() {
  const propertyForsale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertiesForSale: propertyForsale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
