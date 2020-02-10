import React, { memo } from 'react';
import { node } from 'prop-types';

const Board = ({ children }) => (
    <div className="container-fluid p-4">
        <div className="row justify-content-between">
            {children}
        </div>
    </div>
);

Board.propTypes = {
    children: node.isRequired
};

export default memo(Board);
