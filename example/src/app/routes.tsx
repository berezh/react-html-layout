import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { SimplePage } from '../pages/simple';
import { DefaultPage } from '../pages/default';
import { ContentPage } from '../pages/content';

export class Root extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SimplePage} />
                    <Route exact path="/default" component={DefaultPage} />
                    <Route exact path="/content" component={ContentPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
