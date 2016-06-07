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
import MyProfile from './components/my-profile';
import SearchResults from './components/search-results';
import SharedCloset from './components/shared-closet';
import NotFound from './components/not-found';
import ItemDetails from './components/item-details';



export default (
    <Route path="/" component={App}>
        <IndexRoute component={ MyCloset } />
        <Route path="items/new" component={NewItem} />
        <Route path="items/:id" component={ItemDetail} />
        <Route path="item/:id" component={ItemDetails}/>
        <Route path="search" component={SearchItems} />
        <Route path="search-results" component={SearchResults} />
        <Route path="shared" component={SharedCloset} />
        <Route path="my-profile" component={MyProfile} />
        <Route path="*" component={NotFound} />
    </Route>
);