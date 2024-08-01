import React from "react";
import { Container, Image } from "react-bootstrap";

type TProductImages = {
  image: string;
};

export const ProductImages: React.FC<TProductImages> = (props) => {
  const { image } = props;
  return (
    <div>
      <Container>
        {image && (
          <Image src={`data:image/png;base64,${image}`} alt="defaultImage" />
        )}
      </Container>
    </div>
  );
};
