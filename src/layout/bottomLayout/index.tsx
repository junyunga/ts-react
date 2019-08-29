import * as React from 'react';
import bottomLayout from './index.scss';
import className from 'classnames/bind';

const c = className.bind(bottomLayout);
// import logo from 'assets/moornmo.png';

class BottomLayout extends React.Component {
    public render() {
        return (
            <footer className={c('footer')}>
                <div className={c('footer__banner')}>
                    1
                </div>
                <div className={c('footer__site-map')}>
                    22
                </div>
                <div className={c('footer__comopay-info')}>
                    <div className={c('header')}>
                        <img src="" alt="회사로고"/>
                    </div>
                    <div className={c('body')}>
                        11
                    </div>
                </div>
            </footer>
        );
    }
}

export default BottomLayout;