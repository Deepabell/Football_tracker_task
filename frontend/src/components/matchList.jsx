import React, { useEffect, useState } from 'react';
import { getMatches } from '../api';

const MatchList = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getMatches().then(setMatches);
    }, []);

    return (
        <div>
            <h2>Matches</h2>
            <ul>
                {matches.map(match => (
                    <li key={match.id}>Match: {match.home_team} vs {match.away_team} on {new Date(match.date).toDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default MatchList;
