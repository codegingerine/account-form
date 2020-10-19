import React from "react";
import MainWrapper from "Components/MainWrapper";
import StepBox from "Components/StepBox";
import yourAccountImg from "Assets/png/people.png";

const YourAccount = () => {
  return (
    <MainWrapper>
      <StepBox
        title="Your account"
        imgSrc={yourAccountImg}
        formBarColor="#1BFEC0"
        description="Provide personal information so that we can create a new account for you."
      >
      </StepBox>
    </MainWrapper>
  );
};

export default YourAccount;
