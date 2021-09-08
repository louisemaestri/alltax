import React from "react";
import "./InlineSelectField.css";

function InlineSelectField({ label, data = [], onChange }) {
    return (
        <div className="inline-select-field">
            <span className="inline-select-field__label">{label}:</span>
            <select onChange={onChange}>
                {data.map(function(item) {
                    return (
                        <option 
                            key={item.id}
                            value={item.id}>
                                {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default InlineSelectField;
  