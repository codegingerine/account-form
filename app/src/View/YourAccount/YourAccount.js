import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import MainWrapper from "Components/MainWrapper";
import StepBox from "Components/StepBox";
import FieldBox from "Components/FieldBox";
import yourAccountImg from "Assets/png/people.png";
import { PhoneBoxStyled, PhoneFieldBoxStyled, IntPrefixesPickerStyled } from "./YourAccount.styled";

const YourAccount = () => {
  const initialValues = {
    name: "",
    mobilePrefix: "+48 (PL)",
    mobilePhone: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").required("Required"),
    mobilePhone: Yup.number()
      .typeError("Numbers only")
      .test(
        "length",
        "Mobile number should have 9 digits",
        (value) => value && value.toString().length === 9
      )
      .required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data to submit: ", values);
  };

  return (
    <MainWrapper>
      <StepBox
        title="Your account"
        imgSrc={yourAccountImg}
        formBarColor="#1BFEC0"
        description="Provide personal information so that we can create a new account for you."
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          onSubmit={onSubmit}
        >
          {(formik) => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              isValid,
              dirty,
            } = formik;
            return (
              <form onSubmit={handleSubmit}>
                <FieldBox
                  label="Your name"
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  hasError={errors.name && touched.name}
                  errorMsg={errors.name}
                />
                <FieldBox label="Mobile">
                  <PhoneBoxStyled>
                    <IntPrefixesPickerStyled
                      name="mobilePrefix"
                      value={values.mobilePrefix}
                      onChange={handleChange}
                    />
                    <PhoneFieldBoxStyled
                      type="tel"
                      name="mobilePhone"
                      id="mobilePhone"
                      value={values.mobilePhone}
                      onChange={handleChange}
                      hasError={errors.mobilePhone && touched.mobilePhone}
                      errorMsg={errors.mobilePhone}
                    />
                  </PhoneBoxStyled>
                </FieldBox>
                <button
                  type="submit"
                  // disabled={!(dirty && isValid)}
                >
                  Continue
                </button>
              </form>
            );
          }}
        </Formik>
      </StepBox>
    </MainWrapper>
  );
};

export default YourAccount;
