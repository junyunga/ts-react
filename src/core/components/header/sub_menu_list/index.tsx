import * as React from 'react';
import './index.scss';

interface Props {
    display: string
}
class SubMenuList extends React.Component<Props> {

    public render() {

        return (
            <div className="sub-menu-list-container">
                <div className="container-text-box">
                    <h2>Solution & Service</h2>
                    <p>
                        안전한 보안세상을 만드는
                        테르텐의 보안 솔루션을 소개합니다.
                    </p>
                </div>
                <div className="sub-menu-list">
                    메뉴 리스트
                </div>
            </div>
        );
    }
}

export default SubMenuList;