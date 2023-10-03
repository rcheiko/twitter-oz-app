import { css } from "@emotion/react"

import { Theme, useTheme } from "../../theme"

const style = (theme: Theme) => css`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-bottom: .2rem solid ${theme.colors.borderPrimary};

.text {
  font-size: 1.6rem;
  font-weight: 500;
}

.grey {
  color: ${theme.colors.inactive};
}

> * {
  text-align: center;
  padding-top: 0.5rem;
  flex-grow: 1;
  :hover {
    background-color: ${theme.colors.blur}};
  }
}

.bar-blue {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: .5rem;
  span {
    height: .4rem;
    border-radius: 2.5rem;
    width: 50%;
    max-width: 10rem;
    background-color: rgb(29, 155, 240);  
  }
}

.transparent {
  span {
    background-color: transparent;
  }
}
`

const ListSelectTimeline = ({
  listTimeline, indexTimeline, setIndexTimeline
}: {
  listTimeline: string[],
  indexTimeline: number,
  setIndexTimeline: (index: number) => void,
}) => {
  const theme = useTheme()

  return (
    <div css={style(theme)}>
    {
      listTimeline.map((text, index) => (
        <div key={text} onClick={() => setIndexTimeline(index)}>
          {
            index === indexTimeline
              ? (
                <>
                  <span className="text">{text}</span>
                  <div className="bar-blue">
                    <span />
                  </div>                
                </>
              )
              : (
                <>
                  <span className="text grey">{text}</span>
                  <div className="bar-blue transparent">
                    <span />
                  </div>
                </>
              )
          }
        </div>
      ))
    }
  </div>
  )
}

export default ListSelectTimeline