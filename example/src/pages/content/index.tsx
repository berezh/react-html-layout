import React, { useState, useCallback } from 'react';
import './index.scss';
import { Layout } from '../../react-html-layout';
import { ContentWrapper } from '../../react-html-layout';
import { MasterPage } from '../../components/master-page';
import { ContentControlPanel, ContentOptions } from './control-panel';
import { Content } from '../../components';

export const ContentPage: React.FC = () => {
    const [options, setOptions] = useState<ContentOptions>({
        width: 600,
    });
    const { width } = options;

    const handleOptions = useCallback(
        options => {
            setOptions({ ...options });
        },
        [options],
    );

    return (
        <MasterPage controlPanel={<ContentControlPanel width={width} onChange={handleOptions} />}>
            <Layout header={'ContentWidth Demo'} footer={'Footer'}>
                <ContentWrapper width={width}>
                    <Content />
                </ContentWrapper>
            </Layout>
        </MasterPage>
    );
};
