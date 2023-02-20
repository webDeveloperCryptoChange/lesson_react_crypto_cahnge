import React from "react";
import { FormSelect } from "react-bootstrap";

function MySelectet ({options, defaultValue, value, onChange}) {
    return(
        <div>
            <FormSelect value={value} onChange={event => onChange(event.target.value)} >
                <option disabled>{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </FormSelect>
        </div>
    )
}

export default MySelectet