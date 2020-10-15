import React from 'react';


const Review = ({comment}) => {
    return (
        <div className="col-md-4 text-center review_container">

            <div className="row d-flex justify-content-center">
                {
                    comment.image ? <img style={{ height: '50px' }} src={`data:image/png;base64,${comment.image.img}`} alt="" />
                        :
                        <img style={{ height: '50px' }} className="img-fluid mb-3" src={`http://localhost:5000/${comment.img}`} alt="" />
                }

                <h5 className="mt-3 mb-3">{comment.name}</h5>
            </div>
            
            <h4><small>{comment.designation}</small></h4>
            <p className="text-secondary">{comment.description}</p>
        </div>
    );
};

export default Review;