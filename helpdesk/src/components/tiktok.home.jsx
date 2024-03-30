import React from "react";
import { useEffect } from "react";

//Code to grab and embed a tiktok page
export default function TikTokEmbed({ username }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@${username}`}
      data-unique-id={username}
      data-embed-type="creator"
      style={{ maxWidth: '780px', minWidth: '288px' }}
    >
      <section>
        <a target="_blank" href={`https://www.tiktok.com/@${username}?refer=creator_embed`}>
          @{username}
        </a>
      </section>
    </blockquote>
  );
};