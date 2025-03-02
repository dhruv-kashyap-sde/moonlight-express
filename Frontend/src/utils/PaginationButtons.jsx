import React from 'react';

const PaginationButtons = ({ totalProducts, productPerPage, currentPage, onPageChange }) => {
    const renderButtons = () => {
        const buttons = [];
        for (let i = 1; i <= Math.ceil(totalProducts/productPerPage); i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={` secondary ${i === currentPage ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return <div className="pagination-buttons">{renderButtons()}</div>;
};

export default PaginationButtons;