import { useParams } from "react-router-dom";
import { InfoContainer, Stats } from "./Profile.styles";
import { initialState as ProfileData } from "../../Redux/ProfileData";
import { initialState as postData } from "../../Redux/PostData";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Info } from "./Profile.styles";
import { Bio } from "./Profile.styles";

// import { Fragment } from "react";

const ProfileInfo = () => {
  const { id } = useParams();
  console.log("id", id);
  let filteredPosts = postData.filter((post) => {
    return post.userID === id;
  })
  return (
    <>
      {ProfileData[id] ? (
        <InfoContainer>
          <img src={ProfileData[id].profilePic} />
          <Info>
            <p>
              {ProfileData[id].userID}
              {ProfileData[id].verified ? (
                <CheckCircle className="verified" />
              ) : null}
            </p>
            <Stats>
              <p>
                <strong>{filteredPosts.length}</strong>
              </p>
              <p>
                <strong>{ProfileData[id].followers}</strong>Followers
              </p>
              <p>
                <strong>{ProfileData[id].following}</strong>following
              </p>
            </Stats>
            <Bio>
              <p className="name">
                <strong>{ProfileData[id].name}</strong>
              </p>
              <p className="category">
                <strong>{ProfileData[id].category}</strong>
              </p>
              <p>{ProfileData[id].Bio}</p>
            </Bio>
          </Info>
        </InfoContainer>
      ) : (
        <InfoContainer>
          <h2>
            Sorry, User with id <span>{id}</span> Does not Exist!
          </h2>
        </InfoContainer>
      )}
    </>
  );
};

export default ProfileInfo;
