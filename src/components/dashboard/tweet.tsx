import { css } from "@emotion/react";
import { Theme, colors, useTheme } from "../../theme";
import avatar from "../../assets/avatar.jpg"
import Avatar from "../avatar";
import { useEffect, useRef, useState } from "react";
import { Calendar, Image, PieChart, Plus, PlusCircle, Smile, Trash2, X } from "react-feather";

const tweet = (theme: Theme) => css`
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 1rem 1.5rem;

.area-tweet {
  display: flex;
  flex-direction: column;
  flex: auto;

  .text-area-tweet {
    flex: auto;
    resize: none;
    overflow-y: hidden;
    border: none;
    outline: none;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.backgroundSecondary};
    border-radius: 1rem;
    padding: 1rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .action-tweet {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    > * {
      cursor: pointer;
      padding: 0.75rem;

      svg {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &:hover {
        background-color: ${colors.blur};
        border-radius: 50%;
    }
  }
}

.delete {
  height: 0;
  position: relative;
  left: 95%;
  bottom: 75px;
  cursor: pointer;
  svg:hover {
  background-color: ${colors.blur};
    border-radius: 50%;
  }
}
`

export default function Tweet() {
  const theme = useTheme()

  const [val, setVal] = useState("");
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";  
    }
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div css={tweet(theme)}>
      <Avatar src={avatar} />
      <div className="area-tweet">
        <textarea className="text-area-tweet" ref={textAreaRef} value={val} onChange={onChange} rows={3} placeholder="What's Happening?" />
        <div className="delete">
          <X onClick={() => setVal("")} />
        </div>
        <div className="action-tweet">
          <div>
            <Image size={18} />
          </div>
          <div>
            <Smile size={18} />
          </div>
          <div>
            <PieChart size={18} />
          </div>
          <div>
            <Calendar size={18} />
          </div>
          <div>
            <PlusCircle size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}