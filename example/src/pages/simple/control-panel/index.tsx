import React, { useState } from 'react';
import './index.scss';
import { Switch } from '@blueprintjs/core';
import { useInputCheckboxCallback } from '../../../components/hooks';

export interface ControlOptions {
    // properties -------------------------
    fixedHeader: boolean;
    fixedFooter: boolean;
    fixedSidebar: boolean;
    // content -------------------------
    hasHeader: boolean;
    hasFooter: boolean;
    hasContentText: boolean;
    hasLeftSidebar: boolean;
    hasLeftSidebarText: boolean;
    hasRightSidebar: boolean;
    hasRightSidebarText: boolean;
}

interface Props extends ControlOptions {
    onChange: (props: ControlOptions) => void;
}

export const ControlPanel: React.FC<Props> = props => {
    const {
        onChange,
        fixedHeader,
        fixedFooter,
        fixedSidebar,
        // content -------------------------
        hasHeader,
        hasFooter,
        hasContentText,
        hasLeftSidebar,
        hasLeftSidebarText,
        hasRightSidebar,
        hasRightSidebarText,
    } = props;

    const handleFixedHeader = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, fixedHeader: checked });
        },
        [props],
    );

    const handleFixedFooter = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, fixedFooter: checked });
        },
        [props],
    );

    const handleFixedSidebar = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, fixedSidebar: checked });
        },
        [props],
    );

    // content -----------------------------------------------------------

    const handleHasHeader = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, hasHeader: checked });
        },
        [props],
    );

    const handleHasFooter = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, hasFooter: checked });
        },
        [props],
    );

    // content -----------------------------------------------------------

    const handleHasContentText = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, hasContentText: checked });
        },
        [props],
    );

    const handleHasLeftSidebar = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, hasLeftSidebar: checked });
        },
        [props],
    );

    const handleHasLeftSidebarText = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, hasLeftSidebarText: checked });
        },
        [props],
    );

    const handleHasRightSidebar = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, hasRightSidebar: checked });
        },
        [props],
    );

    const handleHasRightSidebarText = useInputCheckboxCallback(
        checked => {
            onChange({ ...props, hasRightSidebarText: checked });
        },
        [props],
    );

    return (
        <React.Fragment>
            <b>Properties</b>
            <Switch checked={fixedHeader} label="fixedHeader" onChange={handleFixedHeader} />
            <Switch checked={fixedFooter} label="fixedFooter" onChange={handleFixedFooter} />
            <Switch checked={fixedSidebar} label="fixedSidebar" onChange={handleFixedSidebar} />
            <b>Content</b>
            <Switch checked={hasHeader} label="Has Header" onChange={handleHasHeader} />
            <Switch checked={hasFooter} label="Has Footer" onChange={handleHasFooter} />
            <Switch checked={hasContentText} label="Has Content Text" onChange={handleHasContentText} />
            <Switch checked={hasLeftSidebar} label="Has Left Sidebar" onChange={handleHasLeftSidebar} />
            <p>
                <Switch
                    disabled={!hasLeftSidebar}
                    checked={hasLeftSidebarText}
                    label="Has Text"
                    onChange={handleHasLeftSidebarText}
                />
            </p>
            <Switch checked={hasRightSidebar} label="Has Right Sidebar" onChange={handleHasRightSidebar} />
            <p>
                <Switch
                    disabled={!hasRightSidebar}
                    checked={hasRightSidebarText}
                    label="Has Text"
                    onChange={handleHasRightSidebarText}
                />
            </p>
        </React.Fragment>
    );
};
