import React from 'react';
import './index.scss';

interface Props {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}

export class MasterPage extends React.PureComponent<Props> {
    public render(): React.ReactNode {
        const { children, sidebar } = this.props;
        return (
            <div className="master-page">
                <div className="master-page__sidebar">{sidebar}</div>
                <div className="master-page__content">{children}</div>
            </div>
        );
    }
}
