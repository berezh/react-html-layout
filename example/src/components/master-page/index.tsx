import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

interface Props {
    controlPanel?: React.ReactNode;
}

export const MasterPage: React.FC<Props> = props => {
    const { children, controlPanel } = props;
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
            <React.Fragment>
                <div className="navigator">
                    <Link to="/">Layout</Link>
                    <Link to="/content">ContentWidth</Link>
                    <Link to="/default">Default Layout View</Link>
                    <a href="https://www.npmjs.com/package/react-html-layout">
                        <img src="https://nodei.co/npm/react-html-layout.png?mini=true" />
                    </a>
                </div>
            </React.Fragment>
        </React.Fragment>
    );
};
