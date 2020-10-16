import React from "react";
import MainWrapper from "Components/MainWrapper";
import ImageBox from "Components/ImageBox";
import yourAccountImg from "Assets/png/people.png";

const YourAccount = () => {
  return (
    <MainWrapper title="Your account">
      <ImageBox imgSrc={yourAccountImg} />
    </MainWrapper>
  );
};

export default YourAccount;
