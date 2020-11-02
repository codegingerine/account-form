import React, { useState, useRef } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import MainWrapper from "Components/MainWrapper";
import StepBox from "Components/StepBox";
import FieldBox from "Components/FieldBox";
import DatePicker from "Components/DatePicker";
import Checkbox from "Components/Checkbox";
import FormNavSection from "Components/FormNavSection";
import yourAccountImg from "Assets/png/people.png";
import {
  PhoneBoxStyled,
  PhoneFieldBoxStyled,
  IntPrefixesPickerStyled,
  FormStyled,
  ButtonStyled,
  CheckboxHolderStyled,
} from "./YourAccount.styled";

const YourAccount = () => {
  const [checked, setChecked] = useState(true);
  const dayValueRef = useRef();
  const monthValueRef = useRef();
  const yearValueRef = useRef();
  const checkboxRef = useRef();
  
  const handleChecked = (e) => {
    if (!e.target.checked) return;
    setChecked(!checked);
  };

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
    console.log("Form data to submit: ", {
      ...values,
      day: dayValueRef.current.value,
      month: monthValueRef.current.value,
      year: yearValueRef.current.value,
      playChess: checkboxRef.current.value,
    });
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
              <FormStyled onSubmit={handleSubmit}>
                <FormNavSection itemNo="01">
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
                </FormNavSection>
                <FormNavSection itemNo="02" itemName="Personal">
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
                </FormNavSection>
                <FormNavSection itemNo="03">
                  <FieldBox label="Can you play chess?">
                    <CheckboxHolderStyled>
                      <Checkbox
                        name="playChess"
                        label="Yes"
                        value={!checked}
                        ref={checkboxRef}
                        onChange={handleChecked}
                        checked={!checked}
                      />
                      <Checkbox
                        name="playChessNot"
                        label="No"
                        onChange={handleChecked}
                        checked={checked}
                      />
                    </CheckboxHolderStyled>
                  </FieldBox>
                </FormNavSection>
                <FormNavSection>
                  <FieldBox label="Date of Birth">
                    <DatePicker
                      dayValue={dayValueRef}
                      monthValue={monthValueRef}
                      yearValue={yearValueRef}
                    />
                  </FieldBox>
                </FormNavSection>
                <ButtonStyled
                  label="Continue"
                  type="submit"
                  width="10px"
                  // disabled={!(dirty && isValid)}
                />
              </FormStyled>
            );
          }}
        </Formik>
      </StepBox>
    </MainWrapper>
  );
};

export default YourAccount;
