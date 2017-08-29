import React from 'react';
import {connect} from 'react-redux';

import Vote from './Vote';
import Winner from './Winner';
import * as actionCreators from '../action_creators';

const Voting = (props) => {
  const {winner} = props;
  
  return (
    <div>
      {winner ?
        <Winner winner={winner} /> :
        <Vote {...props} />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting); // connected component
export default Voting; // pure component