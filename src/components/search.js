/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import { searchItems } from '../actions/index';
import { Link } from 'react-router';

class SearchItems extends Component {

    static contextTypes = {
        router:PropTypes.object
    };

    onSubmit(props) {
        this.props.searchItems(props).then(() => {
            //item created, navigate user to index
            this.context.router.push ('/search-results');
        });

    }

    render () {
        const {
            fields: {category, color, size, style},
            handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <h3>Search for Items that Match the following Criteria</h3>

                <div className={`form-group`}>
                    <label>Category</label>
                    <select className="form-control"
                        {...category}
                        // required syntax for reset form to work
                        // undefined will not change value to first empty option
                        // when resetting
                            value={category.value || ''}>
                        <option></option>
                        <option value="Tops">Tops</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Pants">Pants</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Activewear">Activewear</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Skirts">Skirts</option>
                        <option value="Outerwear">Outerwear</option>
                        <option value="Lingerie">Lingerie</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Shorts">Shorts</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Main Color</label>
                    <div>
                        <select className="form-control"
                            {...color}
                            // required syntax for reset form to work
                            // undefined will not change value to first empty option
                            // when resetting
                                value={color.value || ''}>
                            <option></option>
                            <option value="Red">Red</option>
                            <option value="Wine">Wine</option>
                            <option value="Green">Green</option>
                            <option value="Blue">Blue</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Orange">Orange</option>
                            <option value="Pink">Pink</option>
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Brown">Brown</option>
                            <option value="Tan">Tan</option>
                            <option value="Purple">Purple</option>
                            <option value="Beige">Beige</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Size</label>
                    <div>
                        <select className="form-control"
                            {...size}
                            // required syntax for reset form to work
                            // undefined will not change value to first empty option
                            // when resetting
                                value={size.value || ''}>
                            <option></option>
                            <option value="X Small">X Small</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="X Large">X Large</option>
                            <option value="XX Large">XX Large</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label>Style</label>
                    <div>
                        <select className="form-control"
                            {...style}
                            // required syntax for reset form to work
                            // undefined will not change value to first empty option
                            // when resetting
                                value={style.value || ''}>
                            <option></option>
                            <option value="Bohemian">Bohemian</option>
                            <option value="Arty">Arty</option>
                            <option value="Chic">Chic</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Sexy">Sexy</option>
                            <option value="Classic">Classic</option>
                            <option value="Glamorous">Glamorous</option>
                            <option value="Preppy">Preppy</option>
                            <option value="Punk">Punk</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="pull-right btn btn-primary">Search</button>
                <Link to="/" className="btn btn-default pull-right">Cancel</Link>


            </form>
        )
    }
}

export default reduxForm({
    form: 'SearchForm',
    fields: ['category', 'color', 'size', 'style' ]
}, null, {searchItems})(SearchItems);
