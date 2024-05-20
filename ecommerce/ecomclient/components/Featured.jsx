import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import Buttonlink from "./ButtonLink";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 1.2rem;
`;

const Columnswrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Buttonwrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured({ product }) {
  return (
    <Bg>
      <Center>
        <Columnswrapper>
          <Column>
            <div>
              <Title>{product.title} </Title>
              <Desc>{product.description}</Desc>
              <Buttonwrapper>
                <Buttonlink
                  href={"/products/" + product._id}
                  outline={1}
                  white={1}
                >
                  Read more
                </Buttonlink>
                <Button size="l" primary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                  Add to Cart
                </Button>
              </Buttonwrapper>
            </div>
          </Column>

          <Column>
            <img
              src={product.images[0]}
              //src="data:image/jpeg;base64,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"
              alt=""
            />
          </Column>
        </Columnswrapper>
      </Center>
    </Bg>
  );
}
