import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItems({ data, onClick }) {
    const classes = cx('list', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
