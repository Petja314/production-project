import React, { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string

}
//Component for TESTING
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const fakeErrorHandler = () => {
    setError((prevState) => !prevState);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={fakeErrorHandler} className={classNames('cls.BugButton', {}, [className])}>
      Throw Error
    </Button>
  );
};
