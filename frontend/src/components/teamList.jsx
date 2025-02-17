import React, { useEffect, useState } from 'react';
import { getTeams } from '../api';

const TeamList = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams().then(setTeams);
    }, []);

    return (
        <div>
            <h2>Teams</h2>
            <ul>
                {teams.map(team => (
                    <li key={team.id}>{team.name} ({team.country})</li>
                ))}
            </ul>
        </div>
    );
};

export default TeamList;
