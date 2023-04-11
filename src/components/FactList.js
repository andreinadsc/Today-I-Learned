import ErrorMessage from './ErrorMessage.js';
import Fact from './Fact.js';

function FactList({ facts, setFacts }) {
    return (
        <section>
            <ul className='facts'>
                { facts.length === 0 ?
                    <ErrorMessage errorMessage='No facts for this category yet! Create the first one ✍️' /> :
                    facts.map((fact) => (
                    <Fact key={fact.id} fact={fact} setFacts = { setFacts }/>
                ))}
            </ul>
        </section>
    );
}

export default FactList;
