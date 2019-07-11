import * as React from 'react';
import './index.scss';
import MainPage from 'src/page/main_page';

class MainLayout extends React.Component {
    public render() {
        return (
            <section className="main-layout">
                <MainPage />
            </section>
        );
    }
}

export default MainLayout;