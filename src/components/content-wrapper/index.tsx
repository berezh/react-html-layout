import React from 'react';

export interface WideContentProps {
    width?: number;
    children?: React.ReactNode;
}

const rootStyle: React.CSSProperties = {
    marginLeft: 'auto',
    marginRight: 'auto',
};

export const ContentWrapper: React.FC<WideContentProps> = props => {
    const { width, children } = props;
    const style: React.CSSProperties = { ...rootStyle, width };
    return <div style={style}>{children}</div>;
};
