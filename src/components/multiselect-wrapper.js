import React, { Component, PropTypes } from 'react';
import Multiselect from 'react-widgets/lib/Multiselect';

export default class MultiselectWrapper extends Component {

    render() {
        return (
            <Multiselect {...this.props.colors}
                data={this.props.data}
            />
        )
    }
}