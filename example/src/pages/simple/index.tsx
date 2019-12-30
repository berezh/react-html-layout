import React, { useState, useCallback } from 'react';

import { Layout } from '../../react-html-layout';
import { Content } from '../../components';
import { ControlOptions, ControlPanel } from './control-panel';

import './index.scss';
import { MasterPage } from '../../components/master-page';

const sidebarWidth = 200;

export const SimplePage: React.FC = props => {
    const [options, setOptions] = useState<ControlOptions>({
        fixedHeader: true,
        fixedFooter: true,
        fixedSidebar: true,
        //
        hasContentText: true,
        hasLeftSidebar: true,
        hasLeftSidebarText: false,
        hasRightSidebar: true,
        hasRightSidebarText: false,
    });

    const handleOptions = useCallback(
        options => {
            setOptions(options);
        },
        [options],
    );

    const {
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
                header={'Header'}
                footer={'Footer'}
                leftSidebar={hasLeftSidebar ? hasLeftSidebarText ? <Content /> : 'Left Sidebar' : undefined}
                leftSidebarStyle={{ width: sidebarWidth }}
                rightSidebar={hasRightSidebar ? hasRightSidebarText ? <Content /> : 'Right Sidebar' : undefined}
                rightSidebarStyle={{ width: sidebarWidth }}
                {...layoutOptions}
            >
                {hasContentText ? <Content /> : 'Content'}
            </Layout>
        </MasterPage>
    );
};
