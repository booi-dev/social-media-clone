import { useState } from "react";

import { BsChat, BsSuitHeart, BsTextRight } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { RxShare2 } from "react-icons/rx";

import useUserControls from "../../redux/control/userControls";

import AppIcon from "../../components/ui/AppIcon";
import BackDrop from "../../components/ui/BackDrop";
import ReTweetPanel from "./ReTweetPanel";
import TweetReplyBox from "./TweetReplyBox";

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
  const [isReplyBtnClick, setIsReplyBtnClick] = useState(false);

  // retweet
  const hasReTweeted = !!tweet.retweeetBy.find((uid) => uid === user.uid);

  // reply

  return (
    <>
      <div className="flex justify-between w-full pb-2 bg-inherit text-inherit border-x-[0px]  ">
        {/* ............reply............ */}
        <button
          type="button"
          onClick={() => setIsReplyBtnClick(true)}
          className="flex items-center"
        >
          <AppIcon icon={BsChat} hoverColor="blue" />
          {tweet.replyBy.length > 0 && tweet.replyBy.length}
        </button>
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
      {isReplyBtnClick && (
        <>
          <div className="fixed inset-0 h-screen py-10 min-w-[480px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:h-min z-20">
            <TweetReplyBox
              tweet={tweet}
              closeHandler={() => setIsReplyBtnClick(false)}
            />
          </div>
          <BackDrop
            handleClose={() => setIsReplyBtnClick(false)}
            color="white"
          />
        </>
      )}
    </>
  );
}

export default TweetActions;
