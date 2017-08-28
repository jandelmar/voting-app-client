import React from 'react';

const Results = ({pair, tally}) => {
    const getPair = () => {
        return pair || [];
    }

    const getVotes = (entry) => {
        if (tally && tally.has(entry)) {
            return tally.get(entry);
        }
        return 0;
    }

    return (
        <div className="results">
            <div className="tally">
                {getPair().map(entry =>
                    <div key={entry} className="entry">
                        <h1>{entry}</h1>
                        <div className="voteCount">
                            {getVotes(entry)}
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
    
}

export default Results;