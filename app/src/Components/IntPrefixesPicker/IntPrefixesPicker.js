import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Select from "Components/Select";
import { OptionStyled } from "./IntPrefixesPicker.styled";

const Options = ({ prefixMapped, countriesMapped }) => (
  <>
    {prefixMapped.map((option) => {
      return (
        <OptionStyled key={uuidv4()}>
          +{countriesMapped[option].country_code} ({option})
        </OptionStyled>
      );
    })}
  </>
);

const IntPrefixesPicker = ({ className, name, value, onChange }) => {
  const [prefixOptions, setPrefixOptions] = useState([]);
  const [countriesOptions, setCountriesOptions] = useState([]);

  useEffect(() => {
    fetch(`https://api.ipgeolocationapi.com/countries`)
      .then((res) => res.json())
      .then((data) => {
        setCountriesOptions(data);
        setPrefixOptions([...Object.keys(data)].sort());
        console.log("data:", data);
      });
  }, []);

  return (
    <Select className={className} name={name} value={value} onChange={onChange}>
      <Options
        prefixMapped={prefixOptions}
        countriesMapped={countriesOptions}
      />
    </Select>
  );
};

export default IntPrefixesPicker;
