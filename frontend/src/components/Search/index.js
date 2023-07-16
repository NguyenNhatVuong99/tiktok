import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { SearchIcon } from '../icon/Icons';

function Search() {
    const cx = classNames.bind(styles);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    // const [loading, setLoad]
    const InputRef = useRef();
    function handleSetSearchValue(value) {
        setSearchValue(value);
    }
    function handleClearInput() {
        setSearchValue('');
        InputRef.current.focus();
        setSearchResult([]);
    }
    function handleHideResult() {
        setShowResult(false);
    }
    useEffect(() => {
        if (!searchValue) return;
        const url = `http://localhost:3004/users?_limit=5&nickname_like=${searchValue}`;
        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res);
            })
            .catch((err) => {
                throw new Error(err);
            });
        // if(searchValue)
    }, [searchValue]);
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('search-title')}>Accounts</div>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    /* The `ref={InputRef}` is assigning a ref to the input element in the JSX code. */
                    ref={InputRef}
                    type="text"
                    placeholder="Search"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => handleSetSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                <div className={cx('clear')}>
                    {
                        /* The `!!searchValue` expression is used to convert the `searchValue` variable
                        into a boolean value. */
                        // * nếu searchValue == '', nó sẽ trả về undefined => falsy => false và ngược lại
                        !!searchValue && (
                            <button className={cx('clear-btn')} onClick={handleClearInput}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )
                    }

                    {/* <FontAwesomeIcon icon={faSpinner} spin /> */}
                </div>
                <span className={cx('spliter')} />

                <button className={cx('search-btn')}>
                    <SearchIcon width={'2.4rem'} height={'2.4rem'} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
