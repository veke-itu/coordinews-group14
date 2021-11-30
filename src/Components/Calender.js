import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Calender() {
    const onChange = (date) => {
        console.log(date.toString());
    };

    return(
        <DatePicker onChange={onChange} />
    )
}
