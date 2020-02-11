import React, { memo } from 'react';
import {
  shape, string, func, bool,
} from 'prop-types';
import BoardItemButton from './BoardItemButton';

const BoardItem = ({
  item,
  onEdit,
  onDelete,
  prevState,
  nextState,
  disabled,
}) => (
  <div
    className="row justify-content-center shadow m-4 p-2 rounded bg-white"
  >
    <div className="col-12 text-left">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
    {!disabled && (
    <div className="col-12 text-right">
      <BoardItemButton
        icon="edit"
        onClick={onEdit}
      />
      <BoardItemButton
        icon="delete"
        onClick={onDelete}
      />
      <BoardItemButton
        icon="chevron_left"
        onClick={prevState}
      />
      <BoardItemButton
        icon="chevron_right"
        onClick={nextState}
      />
    </div>
    )}
  </div>
);

BoardItem.defaultProps = {
  disabled: false,
};

BoardItem.propTypes = {
  item: shape({
    title: string.isRequired,
    description: string,
    state: string.isRequired,
  }).isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  nextState: func.isRequired,
  prevState: func.isRequired,
  disabled: bool,
};

export default memo(BoardItem);
