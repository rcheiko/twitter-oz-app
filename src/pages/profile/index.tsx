import { useState } from "react"
import { css } from "@emotion/react"
import { Calendar, Link, MapPin } from "react-feather"

import { Theme, useTheme } from "../../theme"
import CheckTextHashtag from "../../components/global/check-text-hashtag"
import Header from "../../components/global/header"
import headerImg from "../../assets/1500x500.jpeg"
import avatar from "../../assets/avatar.jpg"
import ListSelectTimeline from "../../components/global/list-select-timeline"
import TweetDisplay from "../../components/tweet-display"

const style = (theme: Theme) => css`
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
.profile-info {
  padding: 0 1rem;
  @media (min-width: 1024px) {
    padding: .2rem 1rem;
  }
  @media (min-width: 1280px) {
    padding: 1rem 1.6rem;
  }

  .flex {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2rem;  
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

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 2rem;
    .pseudo {
      font-size: 1.4rem;
      font-weight: 700;
      @media (min-width: 1024px) {
        font-size: 1.6rem;
      }
      @media (min-width: 1920px) {
        font-size: 2rem;
      }
    }

    .tag {
      font-size: 1.2rem;
      font-weight: 400;
      margin-bottom: 1rem;
      color: ${theme.colors.inactive};
      @media (min-width: 1024px) {
        font-size: 1.4rem;
      }
      @media (min-width: 1920px) {
        font-size: 1.6rem;
      }
    }

    .description {
      font-size: 1.2rem;
      font-weight: 400;
      margin-bottom: 1rem;
      @media (min-width: 1024px) {
        font-size: 1.4rem;
      }
      @media (min-width: 1920px) {
        font-size: 1.6rem;
      }
    }

    .personal-info {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      > div {
        font-size: 1.2rem;
        font-weight: 400;
        margin-right: 1rem;
        color: ${theme.colors.inactive};
        @media (min-width: 1024px) {
          font-size: 1.4rem;
        }
        @media (min-width: 1920px) {
          font-size: 1.6rem;
        }
      }
    }
    
    .follow {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
      @media (min-width: 1024px) {
        margin-top: 1rem;
      }

      span {
        font-size: 1.2rem;
        @media (min-width: 1024px) {
          font-size: 1.6rem;
        }
      }
      .number {
        font-weight: 600;
      }
      .text {
        font-weight: 400;
        color: ${theme.colors.inactive};
      }
    }
  }
}
`

const Profile = () => {
  const theme = useTheme()
  const [indexTimeline, setIndexTimeline] = useState(0)
  const listTimeline = [
    'Tweets',
    'Replies',
    'Media',
    'Likes'
  ]
  return (
    <div css={style(theme)}>
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
        <div className="profile-info">
          <div className="flex">
            <div className="profile-picture">
              <img src={avatar} alt="profile-picture" />
            </div>
            <button className="edit_profile">Edit Profile</button>
          </div>
          <div className="body">
            <span className="pseudo">DOFUS</span>
            <span className="tag">@DOFUSfr</span>
            <div className="description">
              <CheckTextHashtag
                text="Compte Twitter francophone officiel du MMO #DOFUS, par #Ankama : suivez toute l'actualité du jeu !"
              />
            </div>
            <div className="personal-info">
              <div className="location">
                <MapPin size={16} /> Tokyo, Japan
              </div>
              <div className="website">
                <Link size={16} />
                {' '}
                <span className="link">dofus.com/fr</span>
              </div>
              <div className="joined">
                <Calendar size={16} /> Joined September 2009
              </div>
            </div>
            <div className="follow">
              <div>
                <span className="number">543</span>
                {' '}
                <span className="text">Following</span>
              </div>
              <div>
                <span className="number">123,543</span>
                {' '}
                <span className="text">Followers</span>
              </div>
            </div>
          </div>
        </div>
        <ListSelectTimeline
          listTimeline={listTimeline}
          indexTimeline={indexTimeline}
          setIndexTimeline={setIndexTimeline}
        />
        <TweetDisplay />
        <TweetDisplay />
        <TweetDisplay />
      </div>
    </div>
  )
}

export default Profile