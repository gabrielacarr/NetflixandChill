import React from "react";
import "./Banner.css";

function Banner() {
  // fnc: description charac limit
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://latinamedia.co/wp-content/uploads/2020/02/Netflix-You-Banner.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">Banner Title</h1>
        <div className="bannerButtons">
          <button className="bannerButton">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">
          {truncate(
            ` Cotton candy brownie sweet roll marshmallow danish bonbon pie danish muffin. 
        Gummi bears gummi bears ice cream carrot cake cake donut brownie cotton candy bear claw. 
        Chupa chups chocolate cake carrot cake brownie marzipan soufflé gingerbread gingerbread gummies.
        Macaroon gummies icing dragée pie. 
        Jelly-o carrot cake bear claw dessert lemon drops liquorice. 
        Halvah jelly-o sweet brownie. 
        Marshmallow brownie cupcake ice cream liquorice. 
        Icing cotton candy croissant cookie muffin. 
        Icing jujubes macaroon cupcake gummies sesame snaps soufflé pastry.`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
