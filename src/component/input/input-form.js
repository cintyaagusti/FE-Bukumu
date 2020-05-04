import React from 'react';
import { Input } from 'antd';

function InputForm({
    value, onChange, placeholder, className, style, name, type,
    disabled,
}) {
    return (        
        <Input
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            style={style}
            type={type}
            disabled = {disabled}
        />
    );
}

export default InputForm;