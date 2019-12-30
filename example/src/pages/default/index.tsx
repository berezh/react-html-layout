import React from 'react';
import './index.scss';
import { Layout } from '../../react-html-layout';
import { MasterPage } from '../../components/master-page';

export const DefaultPage: React.FC = props => {
    return (
        <MasterPage>
            <Layout header="Default Layout View" footer="Footer" leftSidebar="Left Sidebar" rightSidebar="Right Sidebar">
                Content
            </Layout>
        </MasterPage>
    );
};
