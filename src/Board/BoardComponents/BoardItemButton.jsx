import React, { memo } from 'react';
import { string, func } from 'prop-types';

const BoardItemButton = ({ icon, onClick }) => (
  <a
    href="#"
    className="text-dark"
    onClick={onClick}
  >
    <i className="material-icons">
      {icon}
    </i>
  </a>
);

BoardItemButton.propTypes = {
  icon: string.isRequired,
  onClick: func.isRequired,
};

export default memo(BoardItemButton);
