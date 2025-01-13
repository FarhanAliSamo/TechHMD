import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string; // Optional prop for additional classes
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx('px-[150px]', className)} // Combines default and custom classes
      {...props} // Spreads additional props like id, style, etc.
    >
      {children}
    </div>
  );
};

export default Container;
