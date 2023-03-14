import { useState } from "react";

import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";

import useUserControls from "../../redux/control/userControls";

import AppIcon from "../../components/ui/AppIcon";
import ReTweetPanel from "../../components/tweetbox/ReTweetPanel";

import { TweetType } from "../../types";

type TweetActionsType = {
  tweet: TweetType;
  tweetState: {
    state: "normal" | "retweet";
    actionedTweetTid?: string;
  };
};

function TweetActions(props: TweetActionsType) {
  const { tweet, tweetState } = props;

  const { user } = useUserControls();

  const [isReTweetBtnClick, setIsReTweetBtnClick] = useState(false);

  const hasReTweeted = !!tweet.retweeetBy.find((uid) => uid === user.uid);

  return (
    <div className="flex justify-around w-full bg-inherit ">
      {/* ............reply............ */}
      <div className="flex items-center">
        <AppIcon icon={BsChat} hoverColor="blue" />
        {tweet.replyBy.length > 0 && tweet.replyBy.length}
      </div>
      {/* ............retweet ............ */}
      <div className="relative bg-inherit">
        <button
          type="button"
          onClick={() => setIsReTweetBtnClick(true)}
          className="flex items-center"
        >
          {hasReTweeted ? (
            <AppIcon icon={AiOutlineRetweet} color="green" />
          ) : (
            <AppIcon icon={AiOutlineRetweet} hoverColor="green" />
          )}
          <span className={`${hasReTweeted && "text-green-400"}`}>
            {tweet.retweeetBy.length > 0 && tweet.retweeetBy.length}
          </span>
        </button>
        {isReTweetBtnClick && (
          <ReTweetPanel
            tweet={tweet}
            reTweetState={{
              state: hasReTweeted,
              retweetedTid: tweetState.actionedTweetTid,
            }}
            closeHandler={() => setIsReTweetBtnClick(false)}
          />
        )}
      </div>
      {/* ............like............ */}
      <div className="flex items-center">
        <AppIcon icon={BsSuitHeart} hoverColor="pink" />
        {tweet.likeBy.length > 0 && tweet.likeBy.length}
      </div>
      {/* ............view............ */}
      <div className="hidden sm:block">
        <AppIcon icon={BsTextRight} rotateDeg={90} hoverColor="blue" />
      </div>
      {/* ............share............ */}
      <AppIcon icon={RxShare2} hoverColor="blue" />
    </div>
  );
}

export default TweetActions;
