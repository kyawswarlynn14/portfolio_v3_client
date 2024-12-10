import React from "react";

function InputWithLabel(props) {
    const { name, label, value, onChange } = props;
	return (
		<div>
			<label htmlFor={name} className="block ml-2 font-medium text-gray-900">
				{label}
			</label>
            <input
                {... props}
                className="input"
                placeholder={label}
                onChange={onChange}
                value={value}
            />
		</div>
	);
}

export default InputWithLabel;
