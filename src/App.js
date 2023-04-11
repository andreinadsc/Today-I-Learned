import { useEffect, useState } from 'react';
import { async } from 'regenerator-runtime';
import supabase from './supabase.js';


import Header from './components/Header.js';
import CategoryFilter from './components/CategoryFilter.js';
import Form from './components/Form.js';
import FactsSections from './components/FactList.js';
import Loading from './components/Loading.js';
import ErrorMessage from './components/ErrorMessage.js';

function App() {
    const [showForm, setShowForm] = useState(false)
	const [ facts, setFacts ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [currentCategory, setCurrentCategory] = useState('all');

    useEffect(() => {
        async function getFacts() {
            setIsLoading(true);

            let query = supabase.from('facts').select('*');
            
            if (currentCategory !== 'all') query.eq('category', currentCategory);
            
            const { data: facts, error } = await query.order('votesInteresting', { ascending: false }).limit(1000);
            
            if (!error) setFacts(facts);
            else setErrorMessage(error.message);
            
            setIsLoading(false);
        }
        getFacts();
    }, [currentCategory]);

	return (
		<>
			<Header setShowFrom={ setShowForm } showForm={ showForm } setErrorMessage= { setErrorMessage }/>
			{showForm ? <Form setFacts = { setFacts } setShowForm = { setShowForm }/> : null }
			<main className='main'>
				<CategoryFilter setCurrentCategory= { setCurrentCategory }/>
				{isLoading ? <Loading /> : 
                    (errorMessage ? <ErrorMessage errorMessage= { `❌ ${errorMessage}`}/> : <FactsSections facts = { facts } setFacts = { setFacts }/>) }
			</main>
		</>
	);
}

export default App;
