/**
 * Created by mary on 5/29/16.
 */
import React, { Component, PropTypes } from 'react';
import { fetchItems } from '../actions/index';
import {reduxForm} from 'redux-form';
import { createItem } from '../actions/index';
import { Link } from 'react-router';

class NewItem extends Component {

    static contextTypes = {
        router:PropTypes.object
    };

    onSubmit(props) {
        this.props.createItem(props).then(() => {
            //item created, navigate user to index
            this.context.router.push ('/');
        });

    }

    render () {
        const {
            fields: {name, category, description, image, color, makePublic, size, style},
            handleSubmit } = this.props;

        return (
            <div className="panel panel-default well well-white-bg col-md-12">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="panel-heading">
            <h3 className="panel-title"><strong>Add an Item</strong></h3>
                    </div>
                <div className="panel-body required-panel">
            <div className={`form-group ${name.touched && name.invalid ? "has-danger" : '' }`}>
                <label>Item Name</label>
                <input type="text" className="form-control" {...name} />
                <div className="text-help">{name.touched ? name.error : ''}</div>
            </div>
            <div className={`form-group ${category.touched && category.invalid ? "has-danger" : ''}`}>
                <label>Category</label>
                <input type="text" className="form-control" {...category} />
                <div className="text-help">{category.touched ? category.error : ''}</div>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" {...description} />
            </div>
            <div className={`form-group ${image.touched && image.invalid ? "has-danger" : ''}`}>
                <label>Image URL</label>
                <input type="text" className="form-control" {...image} />
                <div className="text-help">{image.touched ? image.error : ''}</div>
            </div>
            <div className='form-group'>
                <label>
                    <input type="checkbox" {...makePublic}/> Make Item Public
                </label>
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
            <button type="submit" className="pull-right btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-default pull-right">Cancel</Link>

        </div>

        </form>
        </div>
        )
    }
    
}


function validate (values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Enter an Item Name';
    }
    if (!values.category) {
        errors.category = 'Enter a Category';
    }
    if (!values.image) {
        errors.image = 'Please enter an image URL.';
    }
    return errors;
}



//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: first is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'NewItemForm',
    fields: ['name', 'category', 'description', 'image', 'color', 'makePublic', 'size', 'style' ],

    validate
}, null, {createItem})(NewItem);