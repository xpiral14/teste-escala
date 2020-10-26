import React from "react";
import { BarLoader } from "react-spinners";

import { Container } from "./styles";

const Loader: React.FC = () => {
  return (
    <Container>
      <BarLoader />
    </Container>
  );
};

export default Loader;
