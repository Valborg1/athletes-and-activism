import React, { useState, useEffect } from "react";
import { apiAuth, apiUsers } from "../utils/LoginApi";
import { useAuth } from "../utils/context";
import { Column } from "../components";
import { Row, Col, Container } from "../components/Grid";

export default function Profile() {
  const [state, setState] = useState({
    user: null,
  });

  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth?.user) {
      setState({ ...state, user: auth.user });
    } else {
      apiUsers
        .getProfile()
        .then((res) => {
          console.log("res", res.data)
          if (res.data._id) {
            // For local read/update/delete
            setState({ ...state, user: res.data });
            // For local auth context
            setAuth({ ...auth, user: res.data });
            // For persistent auth
            apiAuth.setAuth({ ...auth, user: res.data });
          }
        })
        .catch((err) => {
          // Choose your error notification
          console.log("err", err);
        });
    }
  }, []);

  return (
    <>
      {console.log(state)}
      <Container title="title">
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <h1 className="text-center">Profile</h1>
          </Col>
          <Col size="md-2" />
        </Row>
      </Container>
      <Container title="favoriteDiv" className="mt-5">
        <Row>
          <Column>
            {state.user &&
              <>
                <h1 className="text-center">Welcome {state.user.username}</h1>
                <h3>Favorite Athletes</h3>
                <div>
                  {state.user.favorites.length &&
                    state.user.favorites?.map((favorite) => (
                      <h2>
                        {" "}
                        <a href={`/add-athlete/${favorite.playerid}`} id={favorite.playerid}>
                          {favorite.fullName}
                        </a>
                      </h2>
                    ))}
                </div>
              </>
            }

          </Column>
        </Row>
      </Container>
    </>
  );
}
