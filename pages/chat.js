import { useEffect } from "react";
import styled from "styled-components";
import { scrollTop } from "../utils/index";

const LivePageContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
`;

const IframeWrapper = styled.div`
  background: #000;
  height: 100%;
  width: 100%;
`;

const chat = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <LivePageContainer>
      <IframeWrapper>
        <iframe
          style={{
            height: "100%",
            width: "100%",
            background: "url(./icons/logo.png)",
            backgroundSize: 120,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          src="https://active-fm-chat.vercel.app/"
          title="Community chat portal"
          frameBorder="0"
          allowFullscreen
        />
      </IframeWrapper>
    </LivePageContainer>
  );
};

export default chat;
