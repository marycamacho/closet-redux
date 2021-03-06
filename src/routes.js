/**
 * Created by mary on 5/29/16.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MyCloset from './components/my-closet';
import NewItem from './components/new-item';
import ItemDetail from './components/item-detail';
import SearchItems from './components/search';
import MyProfile2 from './components/my-profile2';
import SearchResults from './components/search-results';
import SharedCloset from './components/shared-closet';
import NotFound from './components/not-found';




export default (
    <Route path="/" component={App}>
        <IndexRoute component={ MyCloset } />
        <Route path="items/new" component={NewItem} />
        <Route path="items/:id" component={ItemDetail} />
        <Route path="search" component={SearchItems} />
        <Route path="search-results" component={SearchResults} />
        <Route path="shared" component={SharedCloset} />
        <Route path="my-profile" component={MyProfile2} />
        <Route path="*" component={NotFound} />
    </Route>
);