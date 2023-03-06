import {
  differenceInMinutes,
  differenceInHours,
  differenceInSeconds,
  format,
} from "date-fns";

import { TweetType } from "../redux/slice/tweet";

export type EnhancedTweetType = TweetType & {
  createOn: Date;
  timeSince: string;
};

const addExtraProperties = (targetTweet: TweetType) => {
  //   console.log(targetTweet);
  const timeElapseInHour = differenceInHours(
    new Date(),
    new Date(targetTweet.timespan)
  );

  const timeElapseInMin = differenceInMinutes(
    new Date(),
    new Date(targetTweet.timespan)
  );

  const timeElapseInSeconds = differenceInSeconds(
    new Date(),
    new Date(targetTweet.timespan)
  );

  const decideElapse = () => {
    let elapse: string;
    if (timeElapseInHour >= 8) elapse = format(targetTweet.timespan, "d-MMM");
    else if (timeElapseInHour >= 1) elapse = `${timeElapseInHour}h`;
    else if (timeElapseInMin >= 1) elapse = `${timeElapseInMin}m`;
    else elapse = `${timeElapseInSeconds}s`;

    return elapse;
  };

  return {
    ...targetTweet,
    createOn: new Date(targetTweet.timespan),
    timeSince: decideElapse(),
  };
};

export default addExtraProperties;
