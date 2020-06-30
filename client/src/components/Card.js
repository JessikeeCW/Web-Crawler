import React from 'react';

//contains the crawled url infomation and displays the card
const Card = ({ index, title, url}) => {
 // renders out the cards based upon the information that was prop drilled down
  return (
    <div className="row justify-content-center">
      <div className="col-sm-11">
        <div className="card  m-2" key={index}>
          <div className="card-body">
            <a className="card-text" href={url}>
              {/* {title} */} {url}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

//The title was commented out and url was put as a visual place holder until I got the variables I needed from the backend from the scraped urls
export default Card;
