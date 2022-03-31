import { useEffect } from "react";
import styled from "styled-components";
import { scrollTop } from "../utils/index";
import { useMediaQuery } from "@material-ui/core";

const LivePageContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
`;

const IframeWrapper = styled.div`
  background: #000;
  height: 100%;
  width: 100%;
  padding-bottom: ${(props) =>
    props.sm ? "205px !important" : "0 !important"};
`;

const chat = () => {
  const maxWidth900px = useMediaQuery("(max-width:900px)");
  console.log(maxWidth900px);
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <LivePageContainer>
      <IframeWrapper sm={maxWidth900px}>
        <iframe
          style={{
            height: "100%",
            width: "100%",
            background: "url(./icons/logo.png)",
            backgroundSize: 120,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          src="https://master.d4qiiy6oasiod.amplifyapp.com/"
          title="Community chat portal"
          frameBorder="0"
          allowFullScreen
        />
      </IframeWrapper>
    </LivePageContainer>
  );
};

export default chat;
