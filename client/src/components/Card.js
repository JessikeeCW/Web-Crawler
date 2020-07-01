import React from 'react';

//contains the crawled url infomation and displays the card
const Card = ({ index, title, link }) => {
  // renders out the cards based upon the information that was prop drilled down
  return (
    <div className="row justify-content-center">
      <div className="col-sm-5">
        <div className="card  m-2" key={index}>
          <div className="card-body" style={{ width: '50px;' }}>
            <a className="card-title" href={link}>
              {title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
