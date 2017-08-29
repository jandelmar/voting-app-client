import React from 'react';

const Vote = ({pair, hasVoted, vote}) => {
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
                  className={hasVotedFor(entry) ? "voted" : null}
                  disabled={isDisabled()}
                  onClick={() => vote(entry)}>
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