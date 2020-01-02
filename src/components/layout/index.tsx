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

    const content1Style: React.CSSProperties = {};
    const content2Style: React.CSSProperties = {};
    const content3Style: React.CSSProperties = {};
    const fixedSidebarStyle: React.CSSProperties = {};
    const contentBottomStyle: React.CSSProperties = {};

    if (showFixedSidebar) {
        content1Style.display = 'flex';
        content2Style.flex = 1;
        fixedSidebarStyle.overflow = 'auto';
        if (showFixedFooter) {
            contentBottomStyle.overflowY = 'auto';
            contentBottomStyle.msOverflowY = 'auto';
        } else {
            content3Style.display = 'flex';
            contentBottomStyle.flex = 1;
        }
    } else {
        content2Style.overflowY = 'auto';
        content2Style.msOverflowY = 'auto';
    }

    return (
        <div style={{ ...rootStyle, ...style }} className={className}>
            {fixedHeader}
            <div
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    overflow: 'auto',
                    ...content1Style,
                }}
            >
                {simpleHeader}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        ...fixedSidebarStyle,
                        ...content2Style,
                    }}
                >
                    {leftSidebar ? (
                        <Sidebar style={{ ...fixedSidebarStyle, ...leftSidebarStyle }}>{leftSidebar}</Sidebar>
                    ) : null}
                    <div
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            ...fixedSidebarStyle,
                            ...content3Style,
                        }}
                    >
                        {contentHeader}
                        <div style={contentBottomStyle}>{contextElement}</div>
                        {contentFooter}
                    </div>
                    {rightSidebar ? (
                        <Sidebar style={{ ...fixedSidebarStyle, ...rightSidebarStyle }}>{rightSidebar}</Sidebar>
                    ) : null}
                </div>
                {simpleFooter}
            </div>
            {fixedFooter}
        </div>
    );
};
