import React, { useState, useRef, useEffect } from "react"

const Select = ({ siteTitle }) => {

    const options = ["Consultation One", "Consultation Two", "Consultation Three"];

    const [requestListHeader, changeRequestListHeader] = useState('Select subject');
    const [requestList, setRequestList] = useState(false);
    const ref = useRef();

    const handleRequestListHeader = (e) => {
        changeRequestListHeader(e.target.value);
        setRequestList(false);
    }

    const handleRequestList = () => {
        setRequestList(!requestList);
    }
  
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setRequestList(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    });


    return (
        <div ref={ref} className={`g-select${requestList ? ` g-select__open` : ''}`}>
            <div className="g-select-header" onClick={handleRequestList}>
                <span className="g-select-header__text">
                {requestListHeader}
                </span>
                <svg className="g-select-header__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.415 0.210083L6 4.79508L10.585 0.210083L12 1.62508L6 7.62508L0 1.62508L1.415 0.210083Z" fill="#4F4F4F"/>
                </svg>
            </div>
    
            {requestList ? 
            <div className="g-select-list">
                {options.map((option) =>
                <label className="g-select-list__label">
                    <input className="g-select-list__input" type="radio" name="request-subject" value={option} onChange={handleRequestListHeader} required />
                    <span className="g-select-list__text">{option}</span>
                </label>
                )} 
            </div> : null}
        </div>
    );
} 

export default Select
