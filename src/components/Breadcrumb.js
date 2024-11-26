import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ pathnames }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={index} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? (
                <span>{pathname}</span>
              ) : (
                <Link to={routeTo}>{pathname}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
