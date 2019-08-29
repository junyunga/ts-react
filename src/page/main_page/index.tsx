import * as React from 'react';
import mainPage from  './index.scss';
import className from 'classnames/bind';

const c = className.bind(mainPage);



class MainPage extends React.Component {
    public render() {
        return (
            <div className={c('main-container')}>
                <div className={c('main-visual')} />
                <div className={c('main-content')}>
                    main-content
                </div>
            </div>
        );
    }
}

export default MainPage;