import React from 'react';

const defaultStyle: React.CSSProperties = {
    backgroundColor: '#ccc',
    // height: 50,
    color: 'black',
    width: 150,
    height: '100%',
};

export const Sidebar: React.FC = ({ children }) => {
    return typeof children === 'string' ? (
        <div style={defaultStyle}>
            <div style={{ padding: 10 }}>{children}</div>
        </div>
    ) : (
        <React.Fragment>{children}</React.Fragment>
    );
};
