
function Header({ setShowFrom, showForm }) {

	return (
		<header className='header'>
			<div className='header__main'>
				<img className='header__main--logo' src='logo.png' alt='Logo' />
				<h1>Today I Learned</h1>
			</div>
			<button onClick={() => setShowFrom((show) => !show)} className='btn btn-large header__button'>
                { showForm ? 'Close': 'Share a fact' }
            </button>
		</header>
	);
}

export default Header;
