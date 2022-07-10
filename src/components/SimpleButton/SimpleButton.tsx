import type { SimpleButtonProps } from './types';

const SimpleButton: React.FC<SimpleButtonProps> = ({
  onClick,
  type,
  materialIconName,
  children,
}) => (
  <button
    style={{
      background: 'none',
      color: 'inherit',
      border: 'none',
      padding: 0,
      font: 'inherit',
      cursor: 'pointer',
      outline: 'inherit',
    }}
    // eslint-disable-next-line react/button-has-type
    type={type || 'button'}
    onClick={onClick}
  >
    {materialIconName && <i className="material-icons">{materialIconName}</i>}
    {children}
  </button>
);

export default SimpleButton;
