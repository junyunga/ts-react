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

                    <h2>{subtitle}</h2>
                    <p>
                        안전한 보안세상을 만드는
                        테르텐의 보안 솔루션을 소개합니다.
                    </p>
                </div>
                <div className="sub-menu-list">
                    {
                        submenu.map((item, index) => {
                            return (<div className="sub-menu-list__inner" key={index}>
                                {item.title}
                                <ul className="sub-area" key={item.title}>
                                    {
                                        item.list.length > 0 &&
                                        item.list.map((subItem, subIndex) => {
                                            return (<li key={subIndex}>{subItem}</li>)
                                        })
                                    }
                                </ul>
                            </div>);

                        })
                    }
                </div>
            </div>
        );
    }
}

export default SubMenuList;