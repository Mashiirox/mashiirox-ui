import { ReactNode } from 'react';
import cs from 'classnames';

interface CheckboxProps {
  children: ReactNode;
  className?: string;
}

function Checkbox({ children, className }: CheckboxProps): JSX.Element {
  return (
    <label className={cs('inline-flex items-center', className)}>
      <input
        type='checkbox'
        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
      />
      <span className='ml-3 text-sm text-gray-600'>{children}</span>
    </label>
  );
}

export default Checkbox;
