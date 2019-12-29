import React, { ReactNode } from 'react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Sidebar } from '../sidebar';

export interface LayoutProps {
    // root -------------------------------------------------
    /**
     * Root class name.
     */
    className?: string;
    /**
     * Root styles.
     */
    style?: React.CSSProperties;
    // header -------------------------------------------------
    /**
     * Header content.
     */
    header?: ReactNode;
    /**
     * Toggles the header to has fixed position.
     */
    fixedHeader?: boolean;
    // footer -------------------------------------------------
    /**
     * Footer content.
     */
    footer?: ReactNode;
    /**
     * Toggles the footer to has fixed position.
     */
    fixedFooter?: boolean;
    // sidebar -------------------------------------------------
    /**
     * Left Sidebar content.
     */
    leftSidebar?: ReactNode;
    /**
     * Left Sidebar style.
     */
    leftSidebarStyle?: React.CSSProperties;
    /**
     * Right Sidebar content.
     */
    rightSidebar?: ReactNode;
    /**
     * Right Sidebar style.
     */
    rightSidebarStyle?: React.CSSProperties;
    /**
     * Toggles left or/and right sidebar to has fixed position.
     */
    fixedSidebar?: boolean;
    // other -------------------------------------------------
    /**
     * Content of the page.
     */
    content?: React.ReactNode;
}

const rootStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
};

export const Layout: React.FC<LayoutProps> = props => {
    const {
        children,
        className,
        style,
        // ----------------------------------------------------------
        header,
        fixedHeader: showFixedHeader,
        // ----------------------------------------------------------
        footer,
        fixedFooter: showFixedFooter,
        // ----------------------------------------------------------
        leftSidebar,
        leftSidebarStyle,
        rightSidebar,
        rightSidebarStyle,
        fixedSidebar: showFixedSidebar,
        // ----------------------------------------------------------
        content,
    } = props;

    const headerNode = (
        <div>
            <Header>{header}</Header>
        </div>
    );
    const footerNode = (
        <div>
            <Footer>{footer}</Footer>
        </div>
    );

    const contextElement = content || children;
    let fixedHeader: React.ReactNode = null;
    let simpleHeader: React.ReactNode = null;
    let contentHeader: React.ReactNode = null;

    let fixedFooter: React.ReactNode = null;
    let simpleFooter: React.ReactNode = null;
    let contentFooter: React.ReactNode = null;

    if (showFixedHeader === true) {
        fixedHeader = headerNode;
    } else if (showFixedSidebar === true) {
        contentHeader = headerNode;
    } else {
        simpleHeader = headerNode;
    }

    if (showFixedFooter === true) {
        fixedFooter = footerNode;
    } else if (showFixedSidebar === true) {
        contentFooter = footerNode;
    } else {
        simpleFooter = footerNode;
    }

    const fixedSidebarStyle: React.CSSProperties = {};
    const fixedSidebarInnerContent: React.CSSProperties = {};
    const notFixSideContent: React.CSSProperties = {};
    if (showFixedSidebar) {
        fixedSidebarStyle.overflow = 'auto';
        fixedSidebarInnerContent.overflowY = 'auto';
        fixedSidebarInnerContent.msOverflowY = 'auto';
    } else {
        notFixSideContent.overflowY = 'auto';
        notFixSideContent.msOverflowY = 'auto';
    }

    return (
        <div style={{ ...rootStyle, ...style }} className={className}>
            {fixedHeader}
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', overflow: 'auto' }}>
                {simpleHeader}
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        ...fixedSidebarStyle,
                        ...notFixSideContent,
                    }}
                >
                    {leftSidebar ? (
                        <div style={{ ...fixedSidebarStyle, ...leftSidebarStyle }}>
                            <Sidebar>{leftSidebar}</Sidebar>
                        </div>
                    ) : null}
                    <div style={{ flex: 1, flexDirection: 'column', ...fixedSidebarStyle }}>
                        {contentHeader}
                        <div style={fixedSidebarInnerContent}>{contextElement}</div>
                        {contentFooter}
                    </div>
                    {rightSidebar ? (
                        <div style={{ ...fixedSidebarStyle, ...rightSidebarStyle }}>
                            <Sidebar>{rightSidebar}</Sidebar>
                        </div>
                    ) : null}
                </div>
                {simpleFooter}
            </div>
            {fixedFooter}
        </div>
    );
};
