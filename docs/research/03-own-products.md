# Own software

Things Timofey built for himself. These are free to show; the only question is
which are finished enough.

## Peek — narrated terminal tutorials from one command (2026)

`peek <command>` produces a vertical 1080x1920 video that teaches a command-line
tool: a recorded terminal session with captions, a spoken voice-over and keyboard
sounds.

- **How it works.** It looks the command up, asks Claude for a structured script,
  generates the voice locally, records the session inside a sealed container (no
  network, capped memory), renders it in a headless browser and mixes the audio.
- **Details worth showing.** The voice is generated first and its length paces
  the typing. A small server inside the container lets network commands be
  demonstrated with the network off. Typing has deliberate typos. Each stage can
  be re-run alone.
- **Size.** About 6,200 lines of Python plus 3,000 lines of tests, 66 commits in
  under three weeks, CI with linting and type checks. 22 commands rendered so far
  (awk, curl, jq, rsync, tar and others).
- **Around it.** A landing site at clipeek.dev (Astro, public repo) and channels
  on YouTube, TikTok and Instagram under `clipeekdev`.
- **State.** Working tool at version 0.0.1, private repo. Audience numbers not
  recorded.

Good portfolio piece: it has a video to show, and it demonstrates AI used with
engineering discipline.

## Full Send — rally deckbuilder game (2026)

A rally-themed roguelike card game: gas and brake cards manage speed and angle
through corners, with pace notes like a co-driver's.

- Love2D (Lua) prototype: about 28,000 lines of game code and 77 headless test
  and tool scripts.
- Seeded stage generation, a chase camera over a road with height, a scoring
  meter, crash penalties, eight corner types including jumps and chicanes.
- A separate design vault with 140 commits going back to January 2026.
- 211 commits in about five weeks. In playtesting.

## Ozemstvo — browser router for Windows (2022–2024)

A Windows app that registers as the default browser and opens each link in the
browser or profile chosen by rules (video sites in one browser, work meetings in
another).

- C# and WPF, rules matched by host, port and path, several matchers per rule,
  dark theme.
- Public repo, 161 commits, pre-releases up to v0.7.

## Event Alert — calendar events as full-screen alarms (2026)

A native Android app (Kotlin) that turns calendar events into full-screen alerts
with snooze, so a meeting cannot be missed the way a notification can. Works on
the device only. Public repo with a release built by CI.

## Open source and upstream contributions

| Project | What it is | Signal |
|---|---|---|
| `wsl-link` | Run Windows commands from inside WSL | npm, 6 stars |
| `express-param-injector` | AngularJS-style parameter injection for Express handlers | npm, 5 stars |
| `express-socket.io-wrapper` | Serve an Express API over Socket.IO | npm (`es-wrapper`), 3 stars, 3 forks |
| `Nodal-Extended` | Extension of the Nodal framework | Public |
| `nuxt-stripe-module` #34 | Runtime configuration support | Merged upstream, 2021 |
| `sails.io.js` #48, `skipper-s3` #30 | Small fixes in Sails.js projects | Merged upstream, 2015–2016 |

Modest numbers; best used as one line ("open source since 2014, three packages on
npm") and not as a section of its own.

## Smaller or unfinished

- **Second brain automation (2026).** An Obsidian vault with an agent that files
  daily notes into project hubs every night, and a skill that lets coding agents
  look things up in it. This research was done through it.
- **magic_router (2026).** A Docker and Ansible toolkit that backs up, restores
  and configures OpenWrt routers.
- **Invoicix (2021–2023).** An invoicing app in .NET with a web client; private,
  149 commits. State unknown.
- **Roof visualizer, squid-game firmware.** Private experiments; not enough known.
