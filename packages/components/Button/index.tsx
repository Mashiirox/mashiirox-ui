import { ReactNode } from 'react';
import cs from 'classnames';

interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'type' | 'className'
  > {
  className?: string;
  size?: 'small' | 'normal' | 'large';
  type?: 'primary' | 'default';
  htmlType?: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

function Button({
  children,
  className,
  size = 'normal',
  type = 'default',
  htmlType = 'button',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      type={htmlType}
      className={cs(
        'inline-flex justify-center border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        className,
        {
          'py-1.5 px-3 text-xs': size === 'small',
          'py-2 px-4': size === 'normal',
          'py-2.5 px-5 text-base': size === 'large',
          'bg-indigo-600 hover:bg-indigo-700 text-white border-transparent': type === 'primary',
          'bg-white hover:bg-gray-50 text-gray-700 border-gray-300': type === 'default',
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
