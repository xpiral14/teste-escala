import React from "react";

import { Container } from "./styles";
import { Divider } from "../../page/Main/styles";

interface PostContentProps {
    nmUnimed: string;
  site?: string;
  telefone: string;
  endereco: string;
  cidade: string;
  uf: string;
}
const PostContent = (props: PostContentProps) => {
  return (
    <Container>
      <div>
        <h2>{props.nmUnimed}</h2>
        <div>
          <div>
            <img src="/icons/site.svg" alt="" />
            <p>
              {props?.site ? (
                <a
                  href={`http://${props.site}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.site}
                </a>
              ) : (
                "Nenhum site encontrado"
              )}
            </p>
          </div>
          <Divider />
          <div>
            <img src="/icons/phone.svg" alt="" />
            <p>{props.telefone}</p>
          </div>
          <Divider />
          <div>
            <img src="/icons/place.svg" alt="" />
            <p>{`${props.endereco} ${props.cidade},${props.uf}`}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostContent;
