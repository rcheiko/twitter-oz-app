import { css } from "@emotion/react"

import { Theme, useTheme } from "../../theme"
import Header from "../../components/global/header"
import headerImg from "../../assets/1500x500.jpeg"
import avatar from "../../assets/avatar.jpg"

export const profile = (theme: Theme) => css`
.top-header {
  padding: 0.25rem 1.5rem;
}

.header {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
}
.flex {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1rem;
  @media (min-width: 1024px) {
    padding: .2rem 1rem;
  }
  @media (min-width: 1280px) {
    padding: 1rem 1.6rem;
  }

}
.edit_profile {
  padding: 0.2rem .8rem;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 500;
  @media (min-width: 640px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1920px) {
    font-size: 1.8rem;
    padding: 0.5rem 1.6rem;
  }
  border-radius: 2rem;
  border: 1px solid rgb(83, 100, 113);
  background-color: transparent;
  color: ${theme.colors.primary};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.blur};
  }
}
.profile-picture {
  display: flex;
  flex: auto;
  border-radius: 50%;
  margin-left: 1rem;
  @media (min-width: 640px) {
    margin-left: 2rem;
  }
  img {
    border-radius: 50%;
    width: 25%;
    min-width: 5rem;
    height: auto;
    border: 0.2rem solid ${theme.colors.primaryOpposite};
    margin-top: -14%;
    @media (min-width: 1024px) {
      border: 0.3rem solid ${theme.colors.primaryOpposite};
    }
    @media (min-width: 1920px) {
      border: 0.5rem solid ${theme.colors.primaryOpposite};
    }
    cursor: pointer;
  }
}
`

export const Profile = () => {
  const theme = useTheme()

  return (
    <div css={profile(theme)}>
      <Header scrollToTop={true}>
        <div className="top-header">
          <h3>Pseudo</h3>
          <p>1,501 Tweets</p>
        </div>
      </Header>
      <div>
        <div className="header">
          <img src={headerImg} alt="header" />
        </div>
        <div>
          <div className="flex">
            <div className="profile-picture">
              <img src={avatar} alt="profile-picture" />
            </div>
            <button className="edit_profile">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile