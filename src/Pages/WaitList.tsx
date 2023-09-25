// import React from 'react'
// import styled from 'styled-components';
// import pix1 from "../Assets/fb.png"
// import pix2 from "../Assets/tweet.png"
// import pix3 from "../Assets/gram.png"

// const WaitList = () => {
//   return (
//     <div>
//       <ConTainer>
//         <Wrapper>
//           <TextBox>
//             <h1>Join the waitlist for <span>HashIT!</span>
// </h1>
//           </TextBox>
//           <SigIn>
//             <Icon></Icon>
//     <input type="Name" placeholder='Full Name' />
//           </SigIn>
//           <SigIn>
//             <Icon></Icon>
//     <input type="Name" placeholder='Email address' />
//           </SigIn>

//           <Sign>
//             <h4>Get notified when HashIT is life</h4>
//           </Sign>

//           <IconDiv>
//             <img color='#000' src= {pix1} alt="" />
//             <img src= {pix2} alt="" />
//             <img src= {pix3} alt="" />
//           </IconDiv>
//         </Wrapper>
//       </ConTainer>
//     </div>
//   )
// }

// export default WaitList;
// const Sign =styled.div`
// margin-bottom: 10px;
// height: 45px;
// width: 35%;
// background-color: #000;
// border-radius: 8px;
// display: flex;
// justify-content: center;
// align-items: center;
// h4{
//     font-size: 15px;
//     font-weight: bold;
//     color: #fff;
// }
// `

// const IconDiv=styled.div`
// width: 11%;
// height: 100px;
// /* background-color: aquamarine;. */
// display: flex;
// justify-content: space-between;
// align-items: center;
// img{
//     height: 28px;
//     width: 28px;
//     color: #000;
// }
// `

// const Icon=styled.div``

// const SigIn=styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// height: 70px;
// width: 420px;
// border-radius:1px solid green;
// input{
//     margin-bottom: 45px;
//   height: 60%;
//   width:80%;
//   border-radius: 5px;
//   border:none;
//   border: 1px grey solid;
// }
// `
// const TextBox=styled.div`
// font-size: 40px;
// font-weight: 400;
// text-align: center;
// span{
//  color:  #EC5A24;
// }
// `
// const Wrapper=styled.div`
// height: 500px;
// width: 80%;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// `
// const ConTainer=styled.div`
// height:  100vh;
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: center;
// `



import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPersonBooth,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import styled from "styled-components";

const Wait = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <LargeTxtx>
            Join the waitlist for<span> HashIT!</span>{" "}
          </LargeTxtx>
          <InputHolder>
            <Input>
              <Icon>
                <FaPersonBooth />
              </Icon>
              <input placeholder="Full name" />
            </Input>
            <Input>
              <Icon>
                <MdMail />
              </Icon>
              <input placeholder="Email Address" />
            </Input>
          </InputHolder>
          <Button>Get notified when HashIT is live</Button>

          <Icons>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaPinterest />
          </Icons>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Wait;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  color: black;
  font-size: 25px;
  gap: 10px;
`;

const Button = styled.div`
  width: 300px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: black;
  color: white;
  /* margin-top: 20px; */
  font-size: 15px;
  @media (max-width: 320px) {
    width: 280px;
  }
`;

const Icon = styled.div``;

const InputHolder = styled.div``;

const Input = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  gap: 5px;
  background-color: white;
  border-radius: 6px;
  padding-left: 10px;
  margin: 30px 0; 
  border: 2px solid grey;

  @media (max-width: 320px) {
    width: 270px;
    /* margin-bottom: 30px; */

  }

  input {
    flex: 1;
    height: 50px;
    outline: none;
    border-radius: 6px;
    border: none;
  }
`;

const LargeTxtx = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  span {
    color: #ec5a24;
    margin-left: 5px;
  }
`;

const Wrapper = styled.div`
  width: 54%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  /* background-color: #4ecdcd; */
`;
