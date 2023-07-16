import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import images from '~/assets/images';
import Image from '../Image';
import { CheckIcon } from '../icon/Icons';
const cx = classNames.bind(styles);
function AccountItem({data}) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <Image src={data.avatar||images.logo99} alt="avatar" className={cx('avatar')} />
            <div className={cx('info')}>
                <span className={cx('username')}>
                    {data.last_name+' '+data.first_name} 
                    {data.tick && <CheckIcon width={'1.4rem'} height={'1.4rem'} />}
                    
                </span>
                <p className={cx('nickname')}>{data.nickname}</p>
            </div>
        </div>
    );
}

export default AccountItem;
