import React, { memo } from 'react';
import { string, node } from 'prop-types';

const BoardColumn = ({ title, children }) => (
    <div
        className="col mx-2 text-center rounded shadow-sm"
        style={{ background: 'rgba(255,255,255,0.8)' }}>
        <h2 className="text-uppercase font-weight-light">{title}</h2>
        {children}
    </div>
);

BoardColumn.defaultProps = {
    title: 'Column',
    children: null
}

BoardColumn.propTypes = {
    title: string,
    children: node
}

export default memo(BoardColumn);
