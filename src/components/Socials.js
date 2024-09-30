import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Socials() {
  return (
    <div className="socials">
      <h2>Latest Tweets</h2>
      <div className="tweets">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="FluxInc_"
          options={{ height: 400, theme: 'dark' }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TimeTravelingChimps"
          options={{ height: 400, theme: 'dark' }}
        />
      </div>
    </div>
  );
}

export default Socials;

