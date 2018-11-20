import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import { Link } from 'react-router-dom';
//import PossessChecker from '../components/PossessChecker';

class AssemblyAdjusterContainer extends Component {
    render() {
        const { paramString } = this.props;
        
        return (
            <div>
                <Link to={`/`}>Home</Link>
                <Link to={`/PossessChecker?param=${paramString}`}>Possess</Link>
                <Link to={`/AssemblyAdjuster?param=${paramString}`}>AAA</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    possessChecker: state.possessChecker,
});

const mapDispach = (dispach, ownProps) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapStateToProps, mapDispach)(AssemblyAdjusterContainer);
