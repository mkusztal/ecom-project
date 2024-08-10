import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import styles from "./SearchBar.module.scss";

type SearchBarProps = {
  yerbamateData: IYerbamate[];
  inputText: string;
  setInputText: (text: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { inputText, setInputText } = props;

  return (
    <div className={`${styles.root}`}>
      <InputGroup className={`mb-3 ${styles.search_bar}`}>
        <Form.Control
          placeholder="Find your product by name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};
