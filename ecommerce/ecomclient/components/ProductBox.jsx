import styled from "styled-components";

const Box = styled.div`
  background-color: #fff;
  padding: 20px;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <Box>
      <img src={images[0]} alt="" />
      {title}
    </Box>
  );
}
