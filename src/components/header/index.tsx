import React from 'react';

const defaultStyle: React.CSSProperties = {
    backgroundColor: 'rgb(85, 112, 151)',
    // height: 50,
    color: 'white',
    padding: 15,
};

export const Header: React.FC = ({ children }) => {
    return typeof children === 'string' ? (
        <div style={defaultStyle}>{children}</div>
    ) : (
        <React.Fragment>{children}</React.Fragment>
    );
};
