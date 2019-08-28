import * as React from 'react';
import './index.scss';

interface Props {
    displayState: boolean,
    subtitle: string,
    submenu: [
        {
            title: string,
            list: any[]
        }

    ]
}

class SubMenuList extends React.Component<Props> {
    public render() {
        const { displayState, submenu, subtitle } = this.props;
        return (
            <div className="sub-menu-list-container" style={{ display: displayState ? '' : 'none' }}>
                <div className="container-text-box">
                    <div className="left-sub-box">
                        <div className="left-sub-box__header">{subtitle}</div>
                        <div className="left-sub-box__body">
                            안전한 보안세상을 만드는
                            테르텐의 보안 솔루션을 소개합니다.
                        </div>
                    </div>
                </div>
                <div className="sub-menu-list">
                    <div className="right-sub-box">
                        {
                            submenu.map((item, index) => {
                                return (
                                    <div className="sub-menu-list__inner--wrapper" key={index}>
                                        <div className="sub-menu-list__inner">
                                            <div className="sub-menu-list-title">
                                                {item.title}
                                            </div>

                                            <ul className="sub-area" key={item.title}>
                                                {
                                                    item.list.length > 0 &&
                                                    item.list.map((subItem, subIndex) => {
                                                        return (<li key={subIndex}>{subItem}</li>)
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SubMenuList;