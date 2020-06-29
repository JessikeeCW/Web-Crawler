import React from 'react';

//contains the crawled url infomation and displays the card
const Card = ({ index, title, url}) => {
 // renders out the cards based upon the information that was prop drilled down
  return (
    <div className="row justify-content-center">
      <div className="col-sm-11">
        <div className="card  m-2" key={index}>
          <div className="card-body">
            <a className="card-title" href={url}>
              {title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
