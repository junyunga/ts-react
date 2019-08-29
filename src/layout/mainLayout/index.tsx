import * as React from 'react';
import mainLayout from  './index.scss';
import className from 'classnames/bind';
import MainPage from 'src/page/main_page';

const c =  className.bind(mainLayout);

class MainLayout extends React.Component {
    public render() {
        return (
            <section className={c('main-layout')}>
                <MainPage />
            </section>
        );
    }
}

export default MainLayout;