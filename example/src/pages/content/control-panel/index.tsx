import React, { useCallback } from 'react';
import './index.scss';
import { NumericInput } from '@blueprintjs/core';

export interface ContentOptions {
    width: number;
}

interface Props extends ContentOptions {
    onChange: (props: ContentOptions) => void;
}

export const ContentControlPanel: React.FC<Props> = props => {
    const { onChange, width } = props;

    const handleHasHeader = useCallback(
        value => {
            onChange({ ...props, width: value });
        },
        [props],
    );

    return (
        <React.Fragment>
            <b>Properties</b>
            <b>Content Width</b>
            <NumericInput onValueChange={handleHasHeader} value={width} min={0} max={3000} stepSize={10} />
        </React.Fragment>
    );
};
