import { useState } from 'react';
import Play from '../Play';

const playgrounds = [Play];

const Playground = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const CurrentPage = playgrounds[currentPageIndex];
    const numberOfPages = playgrounds.length;
    const pagesArray = [];

    for (let i = 1; i <= numberOfPages; i++) {
        pagesArray.push(i);
    }

    return (
        <div>
            <div className="playground-header">
                <h1>Playground</h1>
                {pagesArray.length !== 1 &&
                    pagesArray.map((pageNumber) => (
                        <button
                            type="button"
                            onClick={() => setCurrentPageIndex(pageNumber - 1)}
                            className="page-number"
                            key={pageNumber}
                        >
                            {pageNumber}
                        </button>
                    ))}
            </div>
            <div className="container">
                <CurrentPage />
            </div>
        </div>
    );
};

export default Playground;
