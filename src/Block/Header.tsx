import styled from "styled-components";
import logo from "../Assets/logo-black-12822108.svg";
import { useState } from "react";

const Header = () => {
  const [on, off] = useState(true);

  const move = () => {
    off(!on);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <Img src={logo} />
          </Logo>
          {on ? (
            <Toggle tog={"start"} onClick={move}>
              <Circle />
            </Toggle>
          ) : (
            <Toggle tog={"end"} onClick={move}>
              <Circle />
            </Toggle>
          )}
        </Wrapper>
      </Container>
    </div>
  );
};
export default Header;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: white;
`;

const Toggle = styled.div<{ tog: string }>`
  width: 60px;
  height: 40px;
  border-radius: 30px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: ${({ tog }) => tog};
  padding: 0px 10px;
  cursor: pointer;
`;

const Img = styled.img`
  // width: 100%;
`;

const Logo = styled.div`
  width: 30%;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 10px 0;
  position: fixed;
  top: 0;
`;