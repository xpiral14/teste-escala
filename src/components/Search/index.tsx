import React, { FC, InputHTMLAttributes } from "react";
import { Container } from "./styles";

const Search: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <Container>
      <img src="icons/search.svg" alt="" />
      <input placeholder="Pesquisar" {...props} />
    </Container>
  );
};

export default Search;
