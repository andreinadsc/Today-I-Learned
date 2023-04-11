
function ErrorMessage({ errorMessage }) {
    return (
        <div className="errorContainer">
            <p className="errorMessage"> {errorMessage} </p>
        </div>
    );
}

export default ErrorMessage;
