import React from 'react';

interface Props {
    style: React.CSSProperties;
}

export const Sidebar: React.FC<Props> = ({ style, children }) => {
    let newStle = style;
    if (typeof children === 'string') {
        newStle = {
            backgroundColor: '#ccc',
            // height: 50,
            color: 'black',
            width: 150,
            height: '100%',
            padding: 5,
            ...style,
        };
    }

    return <div style={newStle}>{children}</div>;
};
