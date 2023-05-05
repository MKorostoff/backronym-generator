export default function Intro() {
  return (
    <div className="intro">
      <h1>The FFW Backronym Generator</h1>
      <p className="intro-text">
        The letters "FFW" can stand for many things: friends from work, fantastic futuristic websites, or even funny floppy walrus. This generator will help you find the perfect backronym for your needs. Once you find a backronym you like, you can submit it to the leaderboard for others to vote on, thus leading us to discover the best backronym for FFW.
      </p>

      <p className="intro-text">
      This is a hobby project, to learn all the new Nextjs APIs premiered this week at <a href="https://vercel.com/ship" target="_blank">vercel ship</a>. It was thrown together by Matt Korostoff in about 3 hours. It's meant to be the smallest possible app that would leverage <a href="https://vercel.com/docs/storage">vercel storage</a>, <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions">server actions</a>, <a href="https://nextjs.org/docs/getting-started/react-essentials#client-components">client/server components</a>, and <a href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata">file based metadata</a>. It's not really meant to be <em>useful</em> just sort of a fun way to show off some new things you can do with Nextjs/Vercel.
      </p>

      <p className="intro-text">
      Please don't share outside of FFW, it's just meant as a developer reference. <a href="https://github.com/MKorostoff/backronym-generator">Source code here</a>.
      </p>
    </div>
  )
}
