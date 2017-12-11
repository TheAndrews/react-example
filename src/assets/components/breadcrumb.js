import React, { Component } from 'react';
import '../stylesheets/breadcrumb.css';
import 'bootstrap/dist/css/bootstrap.css';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-breadcrumb">
                    {
                        this.props.categories.map((category, i) => {
                            return <label key={i}>{` ${category} ${i === this.props.categories.length - 1 ? '' : '/'}`}</label>
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Breadcrumb;
