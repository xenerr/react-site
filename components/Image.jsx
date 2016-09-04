import React, { Component } from 'react';

export default class Image extends Component {
    render() {
        const { source } = this.props;
        return (
            <img src='${source}' />
        );
    }
}