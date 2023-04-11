import { useState } from 'react';
import { CATEGORIES } from '../constants.js';
import supabase from '../supabase.js'

function Form({ setFacts, setShowForm, setErrorMessage }) {
    const [fact, setFact] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        if (fact && source && category) {
            setIsUploading(true);
            //inserting fact to databse
            const { data: newFact, error } = await supabase
                .from('facts')
                .insert([
                    { text: fact, source, category },
                ])
                .select();


            if (!error) setFacts((facts) => [newFact[0], ...facts]);
            else setErrorMessage(error.message);
            
            setIsUploading(false);
            setFact(''); setSource(''); setCategory(''); setShowForm(false); // // reset fields and close form
        }
    }

    return (
        <form className='fact__form' onSubmit={handleSubmit}>
            <input
                className='fact__form--input'
                type='text'
                placeholder='Share a fact with the world...'
                maxLength='200'
                value={fact}
                required
                disabled={isUploading}
                onChange={(e) => setFact(e.target.value)}
            />
            <span className='fact__form--span'>{200 - fact.length} </span>
            <input
                className='fact__form--input'
                type='url'
                required
                placeholder='Trustworthy source...'
                value={source}
                disabled={isUploading}
                onChange={(e) => setSource(e.target.value)}
            />
            <select
                className='fact__form--select'
                value={category}
                disabled={isUploading}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option key='choose' value=''>Choose category:</option>
                {CATEGORIES.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name.toUpperCase()}</option>
                ))}
            </select>
            <button className='btn btn-large' disabled={isUploading}> Post </button>
        </form>
    );
}

export default Form;
