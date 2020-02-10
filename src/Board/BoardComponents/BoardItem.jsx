import React, { memo } from 'react';
import { shape, string, func, bool } from 'prop-types';

const BoardItem = ({
    item,
    onEdit,
    onDelete,
    onStateChange,
    prevState,
    nextState,
    disabled
}) => (
        <div
            className="row justify-content-center shadow m-4 p-2 rounded bg-white">
            <div className="col-12 text-left">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
            {!disabled && <div className="col-12 text-right">
                <a href="#"
                    className="text-dark"
                    onClick={onEdit}>
                    <i className="material-icons">
                        edit
                    </i>
                </a>
                <a href="#"
                    className="text-dark"
                    onClick={onDelete}>
                    <i className="material-icons">
                        delete
                    </i>
                </a>
                <a href="#"
                    className="text-dark"
                    onClick={prevState}>
                    <i className="material-icons">
                        chevron_left
                        </i>
                </a>
                <a href="#"
                    className="text-dark"
                    onClick={nextState}>
                    <i className="material-icons">
                        chevron_right
                        </i>
                </a>
            </div>}
        </div>
    );

BoardItem.defaultProps = {
    disabled: false
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
}

export default memo(BoardItem);
