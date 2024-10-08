import { useQuery } from "react-query";

import BasicLayoutMobile from "../../layouts/mobile/basic_layout";
import { fetchData } from "../../queries/post";
import CardsPreview from "./cards_preview";
// import useToggle from "../../hooks/useToggle";
// import { Button } from "@mui/material";

const Index = () => {
  const { isLoading, data } = useQuery("postData", fetchData);
  return (
    <BasicLayoutMobile>
      {/* <Button onClick={toggle} variant="contained">111</Button> */}
      <CardsPreview key={1} data={data} isLoading={isLoading} city="aaa" />
    </BasicLayoutMobile>
  );
};

export default Index;
