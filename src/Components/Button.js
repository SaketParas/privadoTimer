import React from 'react'

function Button(props) {
    return (
        <div>
            {(props.status === 0) ?
                <button className=" btn btn-outline-primary mt-3"
                    onClick={props.start}>Start</button> : ""
            }
            {(props.status === 1) ?

                <div class="form-row">
                    <div class="col">
                        <button className="btn btn-outline-danger m-3 float-right"
                            onClick={props.stop}>Stop</button>              </div>
                    <div class="col">
                        <button className=" btn btn-outline-success m-3 float-left"
                            onClick={props.reset}>Reset</button>              </div>
                </div> : ""
            }
            {(props.status === 2) ?
                <div class="form-row">
                    <div class="col">
                        <button className="btn btn-outline-warning m-3 float-right"
                            onClick={props.resume}>Resume</button>  </div>
                    <div class="col">
                        <button className="btn btn-outline-success m-3 float-left"
                            onClick={props.reset}>Reset</button>   </div>
                </div> : ""
            }
        </div>
    )
}

export default Button
