import React from 'react';

const SingleServiceList = ({order}) => {
    return (
        <div className="col-md-6">
            <div className="list-inner">
                <div className="d-flex justify-content-between">
                    <img src={`https://desolate-falls-67613.herokuapp.com/${order.img}`} alt="" className="img-fluid"/>
                    <div className="status">
                        <strong>{order.status}</strong>
                    </div>
                </div>
                <h4>{order.projectName}</h4>
                <p>{order.description}</p>
            </div>
        </div>
    );
};

export default SingleServiceList;