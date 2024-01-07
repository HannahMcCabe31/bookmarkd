import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SearchResult from "../SearchResult/SearchResult";
import { CircularProgress } from "@mui/material";

function SearchContainer({ searchResults, searchQuery }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (searchResults && searchQuery) {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 500);

            // Cleanup
            return () => clearTimeout(timer);
        }
    }, [searchQuery]);

    return (
        <>
            <div className="max-w-[640px]">
                {searchResults && searchQuery && (
                    <>
                        <div
                            className="m-auto mt-[30%] p-auto text-center"
                            hidden={!loading}
                        >
                            <CircularProgress />
                        </div>
                        <div hidden={loading}>
                            {searchResults.length > 0 ? (
                                searchResults.map((item, i) => (
                                    <Box key={`searchresult_${i}`}>
                                        <SearchResult
                                            book_id={item.book_id}
                                            title={item.title}
                                            image={item.image}
                                        />
                                    </Box>
                                ))
                            ) : (
                                <h2 className="m-auto mt-[30%] p-auto text-center">
                                    No results found!
                                </h2>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default SearchContainer;
