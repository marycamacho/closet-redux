/**
 * Created by mary on 5/29/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MyCloset from './components/my-closet';
import NewItem from './components/new-item';
import ItemDetail from './components/item-details';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={MyCloset} />
        <Route path="items/new" component={NewItem} />
        <Route path="items/:id" component={ItemDetail} />

    </Route>
);