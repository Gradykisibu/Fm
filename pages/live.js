import { useEffect } from "react";
import styled from "styled-components";
import { scrollTop } from "../utils/index";

const LivePageContainer = styled.div`
  height: 80vh;
  width: 100%;
  margin-bottom: 30px;
`;

const IframeWrapper = styled.div`
  background: #000;
  height: 100%;
  width: 100%;
`;

const live = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  let liveIframe = "https://hearthis.at/activefm/live";
  const liveHour = new Date().getHours();
  const isWednesday = new Date().getDay() == 3;
  const isThursday = new Date().getDay() == 4;
  // const isFriday = new Date().getDay() == 2;
  const isLiveDay = isWednesday || isThursday;
  const isOnePM = liveHour == 13;
  // const isTen = liveHour == 12;

  // console.log("Time : " , isTen);
  // console.log("Day : " , isFriday , new Date().getDay());
  return (
    <LivePageContainer>
      <IframeWrapper>
        {isLiveDay && isOnePM ? (
          <iframe
            scrolling="no"
            id="hearthis_at_track_6677554"
            width="100%"
            height="150"
            src="https://app.hearthis.at/activefm/live/embed/?hcolor=&color=&style=2&block_size=2&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css="
            frameBorder="0"
            allowTransparency
            allow="autoplay"
          >
            <p>
              Listen to{" "}
              <a href="https://hearthis.at/activefm/live/" target="_blank">
                ACTIVE FM LIVE
              </a>{" "}
              <span>by</span>
              <a href="https://hearthis.at/activefm/" target="_blank">
                ACTIVE FM
              </a>{" "}
              <span>on</span>{" "}
              <a href="https://hearthis.at/" target="_blank">
                hearthis.at
              </a>
            </p>
          </iframe>
        ) : (
          <iframe
            style={{
              height: "100%",
              width: "100%",
              background: "url(./icons/logo.png)",
              backgroundSize: 120,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            src="https://www.youtube.com/embed/rjDXZO-Ek24"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </IframeWrapper>
    </LivePageContainer>
  );
};

export default live;
