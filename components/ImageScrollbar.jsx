import { useContext } from "react";
import Image from "next/image";
import { Flex, Icon, Box } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const LeftArrow = () => {
  const { ScrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItem="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => ScrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};
const RightArrow = () => {
  const { ScrollNext } = useContext(VisibilityContext);
  return (
    <Flex justifyContent="center" alignItem="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => ScrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ScrollMenuComponent = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map((item) => (
      <Box width="910px" itemId={item.id} overflow="hidden" p="2" key={item.id}>
        <Image
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          alt="property"
          sizes="{max-width:500px} 100px "
        />
      </Box>
    ))}
  </ScrollMenu>
);
