import React, { useState, useCallback } from 'react';

import { Layout } from '../../react-html-layout';
import { Content } from '../../components';
import { ControlOptions, ControlPanel } from './control-panel';

import './index.scss';
import { MasterPage } from '../../components/master-page';

const sidebarStyle: React.CSSProperties = {
    width: 200,
    backgroundColor: '#ccc',
};

export const SimplePage: React.FC = props => {
    const [options, setOptions] = useState<ControlOptions>({
        fixedHeader: true,
        fixedFooter: true,
        fixedSidebar: true,
        //
        hasHeader: true,
        hasFooter: true,
        hasContentText: true,
        hasLeftSidebar: true,
        hasLeftSidebarText: true,
        hasRightSidebar: true,
        hasRightSidebarText: true,
    });

    const handleOptions = useCallback(
        options => {
            setOptions({ ...options });
        },
        [options],
    );

    const {
        hasHeader,
        hasFooter,
        hasLeftSidebar,
        hasLeftSidebarText,
        hasRightSidebar,
        hasRightSidebarText,
        hasContentText,
        ...layoutOptions
    } = options;

    return (
        <MasterPage controlPanel={<ControlPanel {...options} onChange={handleOptions} />}>
            <Layout
                header={hasHeader ? 'Layout Demo' : undefined}
                footer={hasFooter ? 'Footer' : undefined}
                leftSidebar={hasLeftSidebar ? hasLeftSidebarText ? <Content /> : 'Left Sidebar' : undefined}
                leftSidebarStyle={sidebarStyle}
                rightSidebar={hasRightSidebar ? hasRightSidebarText ? <Content /> : 'Right Sidebar' : undefined}
                rightSidebarStyle={sidebarStyle}
                {...layoutOptions}
            >
                {hasContentText ? <Content /> : 'Content'}
            </Layout>
        </MasterPage>
    );
};
