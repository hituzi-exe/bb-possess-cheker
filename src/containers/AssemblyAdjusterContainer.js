import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import { Link } from 'react-router-dom';
//import AssemblyAdjuster from '../components/AssemblyAdjuster';

class AssemblyAdjusterContainer extends Component {
    render() {
        //const { AssemblyAdjuster } = this.props;
        const paramString = '';

        return (
            <div>
                <span>工事中</span>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/PossessChecker?param=${paramString}`}>PossessChecker</Link></li>
                    <li><Link to={`/AssemblyAdjuster?param=${paramString}`}>AAA</Link></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    AssemblyAdjuster: state.AssemblyAdjuster,
});

const mapDispach = (dispach, ownProps) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapStateToProps, mapDispach)(AssemblyAdjusterContainer);
