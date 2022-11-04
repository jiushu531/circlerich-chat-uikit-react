import React from 'react';

interface InfiniteScrollProps {
    className?: string;
    element?: React.ElementType;
    hasMore?: boolean;
    hasMoreNewer?: boolean;
    initialLoad?: boolean;
    isLoading?: boolean;
    listenToScroll?: (offset: number, reverseOffset: number, threshold: number) => void;
    loader?: React.ReactNode;
    loading?: React.ReactNode;
    loadMore?: () => void;
    loadMoreNewer?: () => void;
    pageStart?: number;
    threshold?: number;
    useCapture?: boolean;
}

export { InfiniteScrollProps };
