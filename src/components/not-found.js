/**
 * Created by mary on 6/4/16.
 */
import React, { Component  } from 'react';




class NotFound extends Component {


    render() {
        return (
            <div className="notFound">
                <h3>Oops!</h3>

                    <p>This Page Was Not Found.</p>

                    <p>Please go back to the <a href="/">Main Page.</a></p>

            </div>
        );
    }
}


export default NotFound;