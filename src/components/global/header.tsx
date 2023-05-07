import { css } from "@emotion/react";
import { fontSizes, fontWeights } from "../../theme";

const styleHeader = () => css`
&.top-page {
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  cursor: pointer;
  h3 {
    font-weight: 600;
  }
  p {
    font-size: ${fontSizes.sm};
    font-weight: ${fontWeights('sm')};
  }
}
`;

export default function Header({ children, scrollToTop }: { children: React.ReactNode, scrollToTop: boolean }) {  
  const bottomToTop = () => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
      });  
    }
  };

  return (
    <div css={styleHeader()} onClick={bottomToTop} className="top-page">
      {children}
    </div>
  );
}
