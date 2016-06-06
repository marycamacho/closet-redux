import React, { Component } from 'react';
import Multiselect from 'react-widgets/lib/Multiselect';

const chooseColors = [
    'Red', 'Orange', 'Yellow', 'Black', 'White', 'Green', 'Blue', 'Tan', 'Purple', 'Brown', 'Beige', 'Olive', 'Pink'
];
const chooseCategories = [
    'Tops', 'Pants', 'Jeans', 'Dresses', 'Activewear', 'Accessories', 'Skirt', 'Vest', 'Jacket', 'Swimwear', 'Shoes', 'Boots', 'Sandals', 'Shorts', 'Suits', 'Outerwear', 'Lingerie'
];
const chooseStyles = [
    'Bohemian', 'Arty', 'Chic', 'Classic', 'Exotic', 'Flamboyant', 'Glamorous', 'Romantic', 'Sexy', 'Sophisticated', 'Western', 'Traditional', 'Preppy', 'Punk', 'Tomboy', 'Rocker', 'Goth'
];

export default class MultiselectWrapper extends Component {
    render() {
        console.log(this.props);

        return (
            <Multiselect {...this.props}  />
        )
    }
}