import React from 'react';

const Vote = ({pair, hasVoted, voteOnClick}) => {
  const getPair = () => {
    return pair || [];
  }

  const isDisabled = () => {
    return !!hasVoted
  }

  const hasVotedFor = (entry) => {
    return hasVoted === entry
  }

  return (
    <div className="voting">
      {getPair().map(entry =>
          <button key={entry}
                  disabled={isDisabled()}
                  onClick={() => voteOnClick(entry)}>
            <h1>{entry}</h1>
            {hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        )
      }
    </div>
  )
}

export default Vote;