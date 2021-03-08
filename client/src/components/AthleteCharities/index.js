import React from "react";
import { Container } from "../Grid";

export default function AthleteCharities({ charities }) {
  return (
    <div>
      <Container title="causes">
        {charities?.length > 0 ? (
          <>
            {charities.map((charity) => {
              return <h1>{charity.charity.charityName}</h1>;
            })}
          </>
        ) : (
          <>
            <h1>No Charity Found</h1>
          </>
        )}
      </Container>
    </div>
  );
}

//     return (
//         <div>
//          <Container title="charities">
//              <h4>Charities</h4>
//          {
//              charities?.length > 0 ?
//              <>{charities.map((charity) => {
                 
//                  return (
//              <p><a href="/">{charity.charity.charityName}</a></p>
//                  )
//              })}</> 
//      :<><h1>No Charity Found</h1></>
//          }
 
//          </Container>
//         </div>
//      )
//  }
