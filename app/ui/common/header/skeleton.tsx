// Skeleton.tsx
import React from 'react';

const Skeleton: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-10 w-36 rounded overflow-hidden">
            <div className="h-10 w-36 rounded animate-gradient"></div>
        </div>
    );
};

export default Skeleton;
