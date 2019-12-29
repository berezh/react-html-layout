import React from 'react';
import './index.scss';

export class Sidebar extends React.PureComponent {
    public render(): React.ReactNode {
        const options: string[] = [];
        for (let i = 0; i < 50; i++) {
            options.push(`Option ${i}`);
        }

        return (
            <div className="sidebar">
                {/* <a href="/">Index</a>
        <a href="/fixed-header">Fixed Header</a>
        <a href="/fixed-sidebar">Fixed Sidebar</a> */}
                {options.map((x, i) => (
                    <div key={i}>{x}</div>
                ))}
            </div>
        );
    }
}
