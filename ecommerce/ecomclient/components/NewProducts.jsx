import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
`;

export default function NewProducts({ product }) {
  return (
    <Center>
      <ProductsGrid>
        {product?.map((prod) => (
          <ProductBox {...prod} />
        ))}
      </ProductsGrid>
    </Center>
  );
}
