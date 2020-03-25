import cn from 'classnames';
import styles from './Button.module.css';

const Button = (props: any) => {
  const { children } = props;
  return (
    <button type="button" className={cn(styles.button, styles.form)}>
      {children}
    </button>
  );
};

export default Button;
