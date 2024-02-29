'use client'
import { useState } from 'react';

const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <p className={`text-gray-700 mb-4 ${expanded ? '' : 'line-clamp-6'}`}>
        {text}
      </p>
      {!expanded && (
        <button onClick={toggleExpanded} className="text-blue-600 font-semibold">
          See More
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
