import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { SelectStyled, OptionStyled } from "./IntPrefixesPicker.styled";

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
    <SelectStyled
      as="select"
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    >
      <Options
        prefixMapped={prefixOptions}
        countriesMapped={countriesOptions}
      />
    </SelectStyled>
  );
};

IntPrefixesPicker.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IntPrefixesPicker;
