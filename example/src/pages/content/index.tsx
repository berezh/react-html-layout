import React from 'react';
import './index.scss';
import { Layout } from '../../react-html-layout';
import { ContentWrapper } from '../../react-html-layout';
import { MasterPage } from '../../components/master-page';

export const ContentPage: React.FC = props => {
    return (
        <MasterPage>
            <Layout header={'Header'} footer={'Footer'} leftSidebar={'Left Sidebar'} rightSidebar={'Right Sidebar'}>
                <ContentWrapper width={300}>Content example. Content example. Content example.</ContentWrapper>
            </Layout>
        </MasterPage>
    );
};
