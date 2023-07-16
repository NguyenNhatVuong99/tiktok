import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    outlinePink = false,
    text = false,
    round = false,
    disable = false,
    sm = false,
    lg = false,
    children,
    className,
    leftIcon,
    rightIcon,
    icon,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProp,
    };
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        /* The line `[className]: className` is using object property shorthand syntax to conditionally add the
`className` prop to the `classes` object if `className` is truthy. */
        // khi có classname thì classname sẽ trở thành key
        [className]: className,
        primary,
        outline,
        outlinePink,
        text,
        round,
        disable,
        sm,
        lg,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
