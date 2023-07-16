import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            let isParent = item.children ? true : false;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            data-inertia="true"
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                icon={current['icon']}
                                title={current['title']}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
