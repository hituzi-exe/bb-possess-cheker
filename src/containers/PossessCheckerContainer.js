import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import PossessChecker from '../components/PossessChecker';

import { withRouter } from 'react-router-dom';

class PossessCheckerContainer extends Component {
    // componentWillMount = () => {
    //     const params = new URLSearchParams(this.props.location.search);
    //     this.props.setKeywordAndOrder(params.get('keyword'), params.get('order'));
    // };
    
    //   componentWillReceiveProps = nextProps => {
    //     // componentWillReceivePropsが無限に呼び出されるのを防ぐ
    //     if (nextProps.location !== this.props.location) {
    //       const params = new URLSearchParams(nextProps.location.search);
    //       const keyword = params.get('keyword');
    //       const order = params.get('order');
    //       this.props.setKeywordAndOrder(keyword, order);
    //     }
    //   };




    render() {
        const { possessChecker, match, actions } = this.props;
        const param = match.params.param;
        
        //http://localhost:3000/hogehoge でparamに"hogehoge"がはいる
        console.debug(param);
        
        return (
            <PossessChecker possessChecker={possessChecker} actions={actions} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    possessChecker: state.possessChecker
});

const mapDispach = (dispach) => ({
    actions: bindActionCreators(actions, dispach),
});

export default connect(mapStateToProps, mapDispach)(PossessCheckerContainer);

// //-----------------------------------------
// const mapStateToProps1 = state => ({
//     keyword: state.keyword,
//     order: state.order,
// }); 

// //ここ参考にしながら組んでる
// //https://qiita.com/shora_kujira16/items/3720c5468fc7f095cf50

// const mapDispach1 = (dispatch, ownProps) => ({
//     push: (keyword, order) => {
//         const { location, history } = ownProps;
//         const params = new URLSearchParams(location.search);
      
//         params.set('keyword', keyword);
//         params.set('order', order);
        
//         history.push({
//             search: params.toString(),
//         });
//     },
//     setKeywordAndOrder: (keyword, order) => {
//         dispatch(setKeywordAndOrder(keyword, order));
//     },
//   })

// export default withRouter(
//     connect(
//         mapStateToProps1,
//         mapDispach1
//     )(PossessCheckerContainer)
//   );