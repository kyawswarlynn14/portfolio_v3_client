import React from "react";

function TextareaWithLabel(props) {
    const { name, label, value, onChange } = props;
	return (
		<div>
			<label htmlFor={name} className="block ml-2 font-medium text-gray-900">
				{label}
			</label>
            <textarea 
                {... props}
                rows={3}
                placeholder={label}
                className='input'
                onChange={onChange}
                value={value}
            />
		</div>
	);
}

export default TextareaWithLabel;
