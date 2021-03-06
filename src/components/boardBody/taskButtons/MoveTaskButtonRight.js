import React from 'react';

function MoveTaskButtonRight({onMoveButtonClick}) {
    return (
        <div className={"moveTaskButton--right moveTaskButton--color"} onClick={onMoveButtonClick}>
            <i className="fa fa-angle-double-right fa-2x"></i>
        </div>
    );
}

export default MoveTaskButtonRight;