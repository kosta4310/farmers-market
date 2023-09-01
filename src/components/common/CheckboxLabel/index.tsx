import { Link } from 'react-router-dom';
import { FC } from 'react';

const CheckboxLabel: FC = () => (
  <span className="text-xs">
    Продовжуючи, я погоджуюсь з{' '}
    <Link className="text-default font-semibold" to="/rules">
      умовами використання
    </Link>
  </span>
);

export default CheckboxLabel;
