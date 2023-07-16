import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/';

// import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faUpLong,
    faMoon,
    faQuestionCircle,
    faCircleDot,
    faGlobe,
    faEllipsisH,
    faChevronLeft,
    faLocationArrow,
    faMessage,
    faUser,
    faRightFromBracket,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css'; // optional
import {
    InboxIcon,
    LocationArrowIcon,
    PlusIcon,
    LanguageIcon,
    QuestionIcon,
    KeyboardIcon,
    MoonIcon,
    UserIcon,
    FlagIcon,
    SettingIcon,
    SignOutIcon,
} from '~/components/icon/Icons';
import Image from '~/components/Image';
import Search from '~/components/Search';

const cx = classNames.bind(styles);
const isLogin = true;

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            icon: <FontAwesomeIcon icon={faChevronLeft} />,
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/logout',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
        to: '/logout',
    },
    {
        icon: <MoonIcon />,
        title: 'Dark mode',
    },
];
const USER_MENU = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/logout',
    },
    {
        icon: <FlagIcon />,
        title: 'Get coin',
        to: '/logout',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/logout',
    },

    ...MENU_ITEMS,
    {
        icon: <SignOutIcon spin />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Search />

                <div className={cx('actions')}>
                    <Button outline leftIcon={<PlusIcon width={'2rem'} height={'2rem'} />}>
                        Upload
                    </Button>
                    {isLogin ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <LocationArrowIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={isLogin ? USER_MENU : MENU_ITEMS}>
                        {isLogin ? (
                            <Image src={images.logo99} className={cx('avatar-user')} />
                        ) : (
                            // <button className={cx('avatar-btn')}>
                            // </button>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
