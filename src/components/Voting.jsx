import React from 'react';
import Vote from './Vote';
import Winner from './Winner';

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

export default Voting;