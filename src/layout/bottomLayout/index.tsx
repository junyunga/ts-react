import * as React from 'react';
import bottomLayout from './index.scss';
import className from 'classnames/bind';
import logo from 'assets/moornmo.png';

const c = className.bind(bottomLayout);


class BottomLayout extends React.Component {
    public render() {
        return (
            <footer className={c('footer')}>
                <div className={c('footer__banner')}>
                    1
                </div>
                <div className={c('footer__site-map')}>
                    <div className={c('wrapper')}>
                        1111
                    </div>
                </div>
                <div className={c('footer__comopay-info')}>
                    <div className={c('wrapper')}>
                        <div className={c('header')}>
                            <img src={logo} alt="회사로고" />
                            <div><a href="/">저작권보호정책</a></div>
                            <div><a href="/">개인정보처리방침</a></div>
                            <div><a href="/">이메일무단수집거부</a></div>
                        </div>
                        <div className={c('body')}>
                            <div className={c('address')}>부산광역시 도레미파솔라시도!!</div>
                            <div>0838whenw ahensdhanwhd ajwsjad saklwjakw djwaTEL :00291010192901</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default BottomLayout;