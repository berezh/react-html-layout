import React from 'react';
import './index.scss';
import { Layout } from '../../react-html-layout';

export const DefaultPage: React.FC = props => {
    return (
        <Layout header="Header" footer="Footer" fixedHeader={true} fixedSidebar={true} leftSidebar="Left Sidebar" rightSidebar="Right Sidebar">
            Content
        </Layout>
    );
};
