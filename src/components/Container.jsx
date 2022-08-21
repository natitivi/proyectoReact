import React from 'react';

const Container = () => {
    return (
        <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
          <div>
                <div className="card mb-3">
                    <h3 className="card-header">Name 1</h3>
                    <div className="card-body">
                        <h5 className="card-title">Macrame 1</h5>
                        <h6 className="card-subtitle text-muted">Price US$100</h6>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1rem', textAnchor: 'middle'}}>
                        <rect width="100%" height="100%" fill="#868e96" />
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card mb-3">
                    <h3 className="card-header">Name 2</h3>
                    <div className="card-body">
                        <h5 className="card-title">Macrame 2</h5>
                        <h6 className="card-subtitle text-muted">Price US$500</h6>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
                        <rect width="100%" height="100%" fill="#868e96" />
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                    </svg>
                    </div>
                </div>
          </div>
          </div>
    );
        </>
    );
}

export default Container;
