import React from 'react';
import './index.scss';

interface Props {
    controlPanel?: React.ReactNode;
    navigator?: React.ReactNode;
}

export const MasterPage: React.FC<Props> = props => {
    const { children, controlPanel, navigator } = props;
    return (
        <React.Fragment>
            <React.Fragment>
                {controlPanel ? (
                    <div className="control-panel">
                        <div className="control-panel__content">{controlPanel}</div>
                    </div>
                ) : null}
            </React.Fragment>
            <React.Fragment>{children}</React.Fragment>
            <React.Fragment>{navigator ? <div className="navigator">{navigator}</div> : null}</React.Fragment>
        </React.Fragment>
    );
};
