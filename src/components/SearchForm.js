import React from "react";

function SearchForm({cityQuery, onClick, onChange}) {
    return (
        <form className="form">
            <div className="input-container">
                <img
                    className="icon search-icon"
                    alt="search icon"
                    src="/assets/search-icon.png"
                ></img>
                <input
                    type="text"
                    placeholder="Search City"
                    className="input-field"
                    value={cityQuery}
                    onChange={onChange}
                />
            </div>
            <button className="search-btn" onClick={onClick}>
                Search
            </button>
        </form>
    );
}

export default SearchForm;
