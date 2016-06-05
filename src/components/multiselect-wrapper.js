import { Component } from 'react';
import Multiselect from 'react-widgets/lib/Multiselect';

export default class MultiselectWrapper extends Component {
    render() {
        console.log(this.props);

        return (
            <Multiselect {...this.props}  />
        )
    }
}