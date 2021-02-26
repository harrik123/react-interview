import React, { useContext } from "react";
import styled from "styled-components";
import {
  LanguageContext,
  languageOptions,
} from "../../contexts/LanguageContext";

const LanguageSelectorUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  font-size: 0.8em;
`;

const LanguageSelectorLi = styled.li`
  padding-left: 15px;
  cursor: pointer;
  color: #737373;

  &:hover {
    font-weight: bold;
  }
`;

function LanguageSelector() {
  const { changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (languageKey: string) => {
    changeLanguage(languageKey);
  };

  return (
    <LanguageSelectorUl>
      {Object.entries(languageOptions).map(([id, name]) => (
        <LanguageSelectorLi key={id} onClick={() => handleLanguageChange(id)}>
          {name}
        </LanguageSelectorLi>
      ))}
    </LanguageSelectorUl>
  );
}

export default LanguageSelector;
