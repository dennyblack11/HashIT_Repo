import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <p>2023 HashIT App Ltd. Allrights reserved</p>
        </Wrapper>
    </Container>
    )
}

export default Footer;

const Wrapper = styled.div`
width: 100%;
height: 80px;
background-color: #EEEEEE;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: flex-end;
`