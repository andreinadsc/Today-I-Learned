

import { CATEGORIES } from '../constants.js';
import supabase from '../supabase.js';
import { useState } from 'react';

const getColor = name => CATEGORIES.find(category => category.name === name).color;

function Fact({ fact, setFacts }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const isDisputed = (fact.votesInteresting + fact.votesMindblowing) < fact.votesFalse;

    async function handleVote(columnName) {
        setIsUpdating(true);
        const { data: updatedFact, error } = await supabase
            .from('facts')
            .update({ [columnName]: fact[columnName] + 1 })
            .eq('id', fact.id)
            .select();

        if (!error)
            setFacts((facts) =>
                facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
            );
        setIsUpdating(false)
    }

    return (
        <li className='fact' >
            <p className='fact__text'>
                {isDisputed ? <span className='fact__disputed'> [⛔️ DISPUTED]</span> : null}
                {fact.text}
                <a className='fact__source' href={fact.source} target='_blank' rel='noreferrer'>(Source)</a>
            </p>
            <span style={{ backgroundColor: getColor(fact.category) }} className='fact__category'>{fact.category}</span>
            <div className='fact__button'>
                <button 
                    onClick={() => handleVote('votesInteresting')}
                    disabled = { isUpdating }
                >
                        👍 {fact.votesInteresting} 
                </button>
                <button 
                    onClick={() => handleVote('votesMindblowing')}
                    disabled = { isUpdating }
                >
                    🤯 {fact.votesMindblowing}
                </button>
                <button 
                    onClick={() => handleVote('votesFalse')}
                    disabled = { isUpdating }
                >
                    ⛔️ {fact.votesFalse} 
                </button>
            </div>
        </li>
    )

}

export default Fact;
