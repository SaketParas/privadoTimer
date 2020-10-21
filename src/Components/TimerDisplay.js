import React from 'react'

function TimerDisplay(props) {
    return (
        <h1 className="font-weight-bolder text-danger mt-2">
            <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;: &nbsp;
            <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp; &nbsp;

        </h1>
    )
}

export default TimerDisplay
