# Profile

## One paragraph

Timofey Biryukov is a freelance engineer based in Kazakhstan who works through his
own company, Quick Solutions LLC (ТОО Quick Solutions). For the last nine years he
has been the long-running full-stack and infrastructure engineer behind a
production 3D/XR data-visualization platform, and since 2024 he has led delivery
on an AI sales product, moved a research site to AWS and kept it running, and
built and shipped a Chrome extension alone. Outside client work he designs and
builds hardware: a custom keyboard with his own PCB and firmware, a leverless
arcade controller, Zigbee and Wi-Fi devices for his home.

## Headline numbers

All of these are checkable in git or on GitHub.

| Number | What it is | Source |
|---|---|---|
| 14 years | GitHub account, created 2012-10-26 | GitHub profile |
| 9+ years | On Flow Immersive, first commit 2017-04-05, still active | `web-client` git log |
| ~11,100 | Commits attributed to him on GitHub | GitHub commit search |
| 2,932 of 18,133 | Commits in Flow's web client, the most of 43 authors | git |
| 3,881 of 10,657 | Commits in Stacks, the most of 13 authors | git |
| 281 of 281 | Commits in MarketPoster, 77 tagged releases | git |
| ~112 | Merged pull requests, 3 of them to upstream open source | `gh search prs` |
| 72 | Repositories (20 public, 52 private) | `gh repo list` |
| 3 | npm packages published | npm |
| 23 | CI firmware releases for his own keyboard | GitHub releases |

## Timeline

| Period | Work |
|---|---|
| 2012 | GitHub account created |
| 2014–2016 | First open source: `data-binder`, `express-param-injector`, `express-socket.io-wrapper`; small fixes merged into Sails.js projects; a home IoT server for Arduino/ESP8266 (`smart-hleb`) |
| 2017–now | Flow Immersive: web client, backend, infrastructure, real-time, AI. Light years in 2019–2020 |
| 2020–2024 | Projects for an Australian client: QHL, Proactive, GRV3, colour configurator, analytics; `wsl-link` on npm |
| 2021 | One Stop Services (ticketing service, private org); `nuxt-stripe-module` upstream PR |
| 2022–2023 | Stripe subscriptions for the TagSpace portal; Ozemstvo (own Windows app); FPV drone |
| 2023–2024 | First AI features at Flow; DIY hardware year: Wi-Fi switch, HitBox, Marine keyboard PCB |
| 2024 | Human Pixel projects (SIM3, Foo1, ClickUp bot); Stacks begins as a dialer prototype |
| 2024–2025 | Stacks: frontend and delivery lead through 30+ release cycles; Theory.us chat app in three days |
| 2026 | Flow backend migration to production; MarketPoster; Pith AWS migration and operations; Ideonix; Peek, Event Alert, Full Send |

The years before 2017 and the 2019–2020 gap are thin in every source. See
[06-open-questions.md](06-open-questions.md).

## What the evidence supports selling

Each line is a service a visitor could buy, with the projects that prove it.

| Service | Proof |
|---|---|
| **Rescue and migrate a production system** | Pith: one shared server to Terraform-managed AWS with staging, CI/CD, alerts and a rollback runbook. Flow: legacy API rewritten and cut over to a new backend, old servers removed. Stacks: two production migrations |
| **Build AI features that ship** | Flow: document assistant, PDF and CSV question answering, a sandboxed code interpreter, a planning agent that edits 3D presentations. Stacks: live call transcription with AI tips, AI SMS replies, plain-language statistics. MarketPoster: LLM pipeline that maps listings to a strict form |
| **Take a product from idea to store** | MarketPoster: spec to first build in two days, Chrome Web Store release in two weeks, 77 releases since. Theory.us: chat app built and deployed in three days |
| **Lead a team and a release process** | Stacks: wrote every release note, ran sprints and reviews, introduced a staging week and CI/CD |
| **Cut cloud cost** | Stacks: test environment and spare capacity removed. Flow: per-tenant cost table and downsizing. Pith: database right-sizing |
| **Real-time and telephony** | Flow: multi-user rooms, WebRTC audio. Stacks: browser dialer, inbound and outbound calls, SMS, voicemail, call forwarding on Twilio |
| **Billing** | Stripe subscriptions on three products: TagSpace, Flow (self-serve tiers, teams, education plan), Stacks |
| **Hardware and firmware** | Marine keyboard (KiCad PCB, QMK firmware, laser-cut case), HitBox controller, ESP32 Zigbee and Wi-Fi devices, Home Assistant |

## Technology, by how much evidence there is

- **Heavy**: JavaScript and TypeScript, Vue and Nuxt, Node (NestJS, Express),
  PostgreSQL, AWS (EC2, ECS, RDS, S3, CloudFront, Route 53), Docker, Ansible,
  Terraform, GitHub Actions and Bitbucket Pipelines, Stripe, Twilio, LangChain and
  LangSmith, OpenAI, Anthropic and Gemini models, WebSockets and Socket.IO.
- **Solid**: Python (FastAPI, Django projects, own CLI), Three.js and WebXR,
  WebRTC (mediasoup), Redis, Chrome extensions (MV3), DuckDB.
- **Own projects**: C# and WPF, Kotlin (Android), Lua (Love2D), C (QMK, ESP-IDF),
  KiCad, Fusion 360, ESPHome, Home Assistant, OpenWrt.

## Positioning notes

- The current site says "Hello World, I am { Programmer }" over a code
  screenshot. Everything on it is contact details behind console commands; there
  is no work shown at all.
- The strongest story is range with proof: the same person migrates a production
  database, leads a release, and solders the keyboard he types on.
- The work is international: clients in the United States and Australia, served
  from Kazakhstan in English and Russian.
- The existing Calendly booking link (30 minutes) is the natural call to action.
