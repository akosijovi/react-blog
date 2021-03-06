import React, { Component } from 'react';

const asyncloadimport = (ImportedFunction) => {
    return class extends Component {

        state = {
            component: null
        }

        componentDidMount () {
            ImportedFunction ()
                .then( cmp => {
                    this.setState({component: cmp.default})
                } )
        }

        render () {
            const C = this.state.component;
            
            return C ? <C {...this.props} /> : null ;
        }
    }
}

export default asyncloadimport;
