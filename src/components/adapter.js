/**
 * Created by mary on 6/5/16.
 */
// adapter.jsx
import React from 'react';
import { Field } from 'redux-form';

export const CHECKBOX = 'CHECKBOX';
export const CHECKBOXES = 'CHECKBOXES';

export default function adapter(key, props) {
    switch (key) {
        case CHECKBOX:
            return (
                <input type="checkbox" {...props} />
            );

        case CHECKBOXES:
            return (
                <div>
                    {props.options.map((option, index) => (
                        <Field
                            key={index}
                            name={`${props.name}[${option.value}]`}
                            label={option.label}
                            checked={!!props.value[option.value]}
                            component={CHECKBOX}
                        />
                    ))}
                </div>
            );

        default:
            return null;
    }
}