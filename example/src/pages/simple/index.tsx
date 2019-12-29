import React, { useState, useCallback } from 'react';

import { Layout } from '../../react-html-layout';
import { Content } from '../../components';
import { DrawerButton, ControlOptions } from '../../components/drawer-button';
import { ContentWrapper } from '../../react-html-layout';

import './index.scss';

export const SimplePage: React.FC = props => {
    const [options, setOptions] = useState<ControlOptions>({
        fixedHeader: true,
        defaultHeader: true,
        fixedFooter: true,
        defaultFooter: true,
        //
        showLeftSidebar: true,
        showRightSidebar: true,
        fixedSidebar: true,
    });

    const handleOptions = useCallback(
        options => {
            setOptions(options);
        },
        [options],
    );

    const { defaultHeader, defaultFooter, showLeftSidebar, showRightSidebar, ...layoutOptions } = options;

    return (
        <React.Fragment>
            <Layout
                header={defaultHeader ? 'Header' : <div>Custom Header</div>}
                footer={defaultFooter ? 'Footer' : <div>Custom Footer</div>}
                leftSidebar={showLeftSidebar ? 'Left Sidebar' : undefined}
                rightSidebar={
                    showRightSidebar ? (
                        <div style={{ width: 300 }}>
                            <Content />
                        </div>
                    ) : (
                        undefined
                    )
                }
                {...layoutOptions}
            >
                <ContentWrapper width={800}>
                    <Content />
                </ContentWrapper>
            </Layout>
            <DrawerButton {...options} onChange={handleOptions} />
        </React.Fragment>
    );
};
