import { useState } from "react"
import { RefreshCw } from "react-feather"
import { css } from "@emotion/react"

import { Theme, fontSizes, useTheme } from "../../theme"
import Header from "../../components/global/header"
import Tweet from "./tweet"

const dashboard = (theme: Theme) => css`
.icon {
  display: flex;
  align-items: center;
  padding: 1rem;
  :hover {
    border-radius: 25%;
    background-color: ${theme.colors.backgroundSecondary};
  }
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1.5rem;
}

.bar-blue {
  display:flex;
  justify-content: center;
  align-items: center;
  span {
    border-radius: 25px;
    height: 3px;
    width: 50%;
    max-width: 100px;
    background-color: rgb(29, 155, 240);  
  }
}

.list-button-timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  div p {
    font-size: ${fontSizes.lg};
    font-weight: 500;
    padding-bottom: 0.5rem;
  }
  border-bottom: 1px solid ${theme.colors.borderPrimary};

  > * {
    text-align: center;
    padding-top: 0.5rem;
    flex-grow: 1;

    :hover {
      background-color: ${theme.colors.blur}};
    }
  }
}

.new-tweet {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${theme.colors.borderPrimary};
  font-size: ${fontSizes.base};
  color: ${theme.colors.active};
  cursor: pointer;
  :hover { 
    background-color: ${theme.colors.blur};
  }
}
`

export default function Dashboard() {
  const theme = useTheme()
  const [listTimeline, setlistTimeline] = useState(0)
  const wichTimeline = [
    'For you',
    'Following'
  ]
  // const { data: { ProfileConnected } = { } } = useQuery<{ProfileConnected: ProfileConnectedType}>(GET_PROFILE_CONNECTED)
  // console.log("ProfileConnected: ", ProfileConnected)

  // const { data : { ProfileSpotlight } = { } } = useQuery<{ProfileSpotlight: ProfileSpotlightType}>(GET_PROFILE_SPOTLIGHT)
  // console.log("ProfileSpotlight: ", ProfileSpotlight)

  // const { data : { Recommendation } = { } } = useQuery<{Recommendation: RecommendationArray}>(GET_RECOMMENDATION)
  // console.log("Recommandation: ", Recommendation)

  // const { data : { HomeTimeline } = { } } = useQuery<{HomeTimeline: HomeTimelineType}>(GET_HOME_TIMELINE)
  // console.log("HomeTimeline: ", HomeTimeline)

  // const { data : { UserTweets } = { } } = useQuery<{UserTweets: UserTweetType }>(GET_PROFILE_TIMELINE_TWEET)
  // console.log("UserTweet: ", UserTweets)

  return (
    <div css={dashboard(theme)}>
      <Header scrollToTop={true}>
        <div className="top-header">
          <div>
            <h3>Home</h3>
            <p>Pseudo</p>
          </div>
          <div className="icon">
            <RefreshCw size={22} />
          </div>
        </div>
        <div className="list-button-timeline">
          {
            wichTimeline.map((item, index) => (
              <div key={item} onClick={() => setlistTimeline(index)}>
                <p>{item}</p>
                {
                  index === listTimeline
                    ? (
                      <div className="bar-blue">
                        <span />
                      </div>
                    )
                    : null
                }
              </div>
            ))
          }
        </div>
      </Header>
      <Tweet />
      <div className="new-tweet">
        Show X new Tweets
      </div>
      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure repudiandae explicabo dolore sapiente inventore autem hic optio magni esse illum, enim temporibus velit aliquam cupiditate, facere, tempora quas deleniti dolor ab libero? Pariatur voluptates, facere maxime cumque sit obcaecati porro, sint eum alias unde, officia sed iusto placeat? Pariatur officiis quae tempora eius blanditiis suscipit architecto tenetur ipsum voluptatibus optio? Delectus ea accusamus veniam corporis quaerat officia laudantium, deserunt praesentium. Expedita deserunt voluptates sed, inventore porro magni eligendi eaque laboriosam tenetur? Dignissimos, atque. Consequatur culpa nesciunt, dolore iste inventore fuga dolorum qui quaerat odit architecto ullam voluptatibus eveniet sequi distinctio soluta perspiciatis possimus impedit, sunt ipsam unde! In voluptatem accusantium fuga aperiam, delectus saepe ullam cum nostrum excepturi provident, cupiditate veritatis quidem odio, quas magnam nesciunt. Impedit qui ipsa reiciendis distinctio assumenda iste incidunt blanditiis ducimus est enim. Voluptate unde minima consequuntur magni natus suscipit molestiae veritatis, debitis nesciunt consequatur aliquam odio aspernatur, architecto tempora commodi. Delectus ipsam blanditiis tenetur voluptatem aperiam, illum eveniet voluptates nulla sed similique dicta veniam itaque ut, deleniti recusandae ea nam exercitationem vel voluptas quod fuga! Sequi asperiores esse accusamus sunt perspiciatis expedita sapiente praesentium, nesciunt deleniti voluptates sint cupiditate! Autem aliquam unde accusamus odio dignissimos ipsum officia aliquid! Libero cum atque similique, repellat soluta dolore dolor illo ratione possimus corrupti mollitia minima facilis eos quod? Cum sed laboriosam veniam cumque, laudantium adipisci eaque. Sequi ex debitis nostrum autem amet veritatis itaque placeat officiis voluptatum aperiam. Dicta ea nisi maxime earum mollitia aperiam culpa sint dolorem nihil magnam ipsa omnis aliquid distinctio et nemo tenetur sed fugit officiis tempora illo, beatae recusandae saepe blanditiis. Vel eaque tenetur necessitatibus cum animi laborum modi! Itaque sunt fugiat amet commodi temporibus voluptas saepe minima deserunt quam, enim vero cum molestiae voluptatibus consectetur quibusdam? Repellendus, cumque error dolores minus architecto illo nam ut, quia eligendi aperiam voluptate dolorem consequuntur voluptatem facere, perspiciatis numquam! Vel laboriosam ex dicta magni tempore quisquam nisi quod, et, natus cupiditate voluptas doloremque quos amet. Maxime quae necessitatibus harum temporibus mollitia blanditiis ea, reprehenderit doloremque adipisci. Quos libero qui consequatur facere earum voluptas quo quia voluptatibus harum, voluptatum, natus minus esse ab recusandae vel nemo maxime quisquam pariatur veritatis. Dignissimos hic adipisci error veniam, tempora reiciendis itaque modi iusto porro libero! Ullam atque consequuntur perspiciatis temporibus minima quasi eos repellendus harum, unde aliquam nostrum laudantium sequi quidem est molestias, reiciendis excepturi, molestiae tenetur? Maiores distinctio veniam dicta fuga, esse eum impedit suscipit incidunt autem! Autem quibusdam perspiciatis quam reiciendis nemo voluptatum atque quo repellendus? Laboriosam doloremque debitis unde accusamus quis quod minima enim hic libero culpa. Similique incidunt debitis nihil itaque cupiditate, ipsam distinctio labore enim mollitia eligendi dolorem. Delectus perferendis harum illo. Voluptas similique mollitia delectus, eos voluptatem ratione magnam pariatur laboriosam totam recusandae dolorem corporis eligendi asperiores doloremque amet natus nulla fuga facere autem iste fugit cupiditate libero. Facilis perspiciatis nam, dignissimos sequi nulla voluptate tempora error laborum. Recusandae modi, inventore rerum, fugiat reiciendis, ducimus quo eaque quibusdam perspiciatis totam aliquam explicabo ipsum?</p> */}
    </div>
  )
}
