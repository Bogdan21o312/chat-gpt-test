import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import {DropdownProps} from "./ISelect";

export const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption }) => {
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select
            className={styles.dropdown}
            value={selectedOption}
            onChange={handleOptionChange}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
