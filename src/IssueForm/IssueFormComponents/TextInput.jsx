import React, { memo } from 'react'
import { func, string } from 'prop-types'

const TextInput = ({ onChange, value, placeholder, title }) => (
    <div className="container-fluid my-4">
        {title && <div className="row text-left">
            <h6 className="text-uppercase font-weight-light">{title}</h6>
        </div>}
        <div className="row justify-content-center">
            <input
                className="form-control"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={({ target: { value } }) => onChange(value)} />
        </div>
    </div>
);

TextInput.defaultProps = {
    value: '',
    placeholder: '',
    title: ''
};

TextInput.propTypes = {
    onChange: func.isRequired,
    value: string,
    placeholder: string,
    title: string
};

export default memo(TextInput);
