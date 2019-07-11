import * as React from 'react';
import './index.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SubMenuList from 'core/components/header/sub_menu_list';
// RouteComponentProps


export default class HeaderLayout extends React.Component {
    public render() {
        return (
            <header className="header">
                <Router>
                    <div className="header__inner">
                        <div className="logo">
                            <Link to="/"><img src="" alt="회사로고" /></Link></div>
                        <nav>
                            <ul className="area">
                                <li>
                                    <Link to="/solution">Sonlution&Service</Link>
                                    <SubMenuList display={'none'} />
                                </li>
                                <li>
                                    <Link to="/customer">CustomerCenter</Link>
                                    <SubMenuList display={'none'} />
                                </li>
                                <li>
                                    <Link to="/pr">PR</Link>
                                    <SubMenuList display={'none'} />
                                </li>
                                <li>
                                    <Link to="/company">Company</Link>
                                    <SubMenuList display={'none'} />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Router>
            </header>
        );
    }
}