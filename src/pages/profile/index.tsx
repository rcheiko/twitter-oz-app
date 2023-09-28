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
  }
}
.profile-picture {
  display: flex;
  flex: auto;
  border-radius: 50%;
  margin-left: 2rem;
  img {
    border-radius: 50%;
    width: 22%;
    min-width: 5rem;
    height: auto;
    margin-top: -12%;
    border: 0.3rem solid ${theme.colors.primaryOpposite};
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
        <div className="profile-picture">
          <img src={avatar} alt="profile-picture" />
        </div>

      </div>
    </div>
  )
}

export default Profile