
import { CATEGORIES } from '../constants.js';

function CategoryFilter({ setCurrentCategory }) {
    return (
        <aside>
            <ul className='categories'>
                <li key='all' className='categories__list'>
                    <button 
                        className='btn categories__list--btn'
                        onClick={() => setCurrentCategory('all')}
                    >
                        All
                    </button>
                </li>
                {
                    CATEGORIES.map(category => (
                        <li key={category.name} className='categories__list'>
                            <button 
                                style={{ backgroundColor: category.color }} 
                                className='btn categories__list--btn'
                                onClick = {() => setCurrentCategory(category.name)}
                            >
                                {category.name}
                                
                            </button>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}

export default CategoryFilter;
