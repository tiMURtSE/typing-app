const removeRecordFilter = (element) => {
    const headerTitleElements = document.querySelectorAll('.table__header-title');

    for (let i = 0; i < headerTitleElements.length; i++) {
        if (headerTitleElements[i] !== element) {
            headerTitleElements[i].classList.remove('descending-order', 'ascending-order');
        }
    }
};

export default removeRecordFilter;