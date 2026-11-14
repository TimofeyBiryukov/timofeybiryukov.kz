# Client work

Ordered by how strong a case study each one makes. None of the names below is
cleared for the public site yet; see [05-before-publishing.md](05-before-publishing.md).

---

## 1. Flow Immersive — 3D/XR data visualization (2017–now)

**What it is.** A platform for presenting data as 3D scenes ("flows") in the
browser and in AR/VR headsets, with multi-user meetings and an AI assistant that
builds and edits the visualizations. Web app at flow.gl.

**Role.** Long-running full-stack and infrastructure engineer. First commit
2017-04-05, last 2026-11-12.

**Evidence in git.**

| Repository | His commits / all | What it is |
|---|---|---|
| web-client | 2,932 / 18,133 (most of 43 authors) | Vue app over a custom Three.js fork, WebXR |
| flow-core | 666 / 908 | NestJS backend, about 87,000 lines of TypeScript |
| flow-infra | 496 / 553 | Ansible and Terraform for everything on AWS |
| flow-docker | 543 / 560 | Whole platform as a local Docker environment, about 24 services |
| flow-client | 475 / 537 | Account, admin and billing front end |
| socket-server | 70 / 88 | Multi-user room server |
| flow-webrtc | 57 / 72 | WebRTC audio server (mediasoup) |
| knowledge-server | 67 / 285 | Per-customer knowledge server with AI answers |

**Achievements.**

- **Backend rewrite and production cutover.** Rewrote the legacy API (99
  controllers) as a NestJS service next to the AI code, built a new staging stack,
  and cut production over on 2026-02-19: new database with an engine upgrade, new
  servers, load balancer and domain. The old servers, two databases and load
  balancers were removed four days later (2026-02-23).
- **AI assistant, three generations.**
  - 2023: a documentation assistant over the product docs, then "Ask PDF" and
    "Ask CSV" question answering (2023-05-22, 2023-07-17, 2024-01-29).
  - 2024: a code interpreter that writes and runs Python on the user's data in a
    sandbox with no network and capped memory (2024-03-18), deployed with its own
    servers and load balancer (2024-05-06).
  - 2025–2026: a rewrite as one AI service (production 2025-07-22), an agent that
    edits presentations (2025-09-04), and a planner that splits work between a
    small fast model and stronger models. Using the smaller model for planning
    made the first step about twice as fast (2026-03-21).
- **Multi-user meetings.** Redesigned the room server as a main process with a
  worker per room (2023-04-24 to 2023-06-05). His later write-up says crashes were
  fixed completely and sessions became much more stable (2025-09-18); that is his
  own assessment.
- **Self-serve billing.** Stripe subscriptions with Free, Pro, Team and
  Enterprise tiers, team seats, usage overage and an education plan with automatic
  .edu detection; production release 2026-07-10. A migration of existing education
  customers was built with dry runs and rollbacks (2026-10-28).
- **Knowledge servers on AWS.** Deployed per-customer knowledge servers and
  developer machines with Terraform (2026-10-13). Found that each query paid a
  40–50 ms start-up cost against 1–12 ms when warm, and fixed it by keeping
  connections open (2026-09-15, 2026-09-17). Cut one tenant's monthly cost by
  about a fifth by right-sizing (2026-11-05).
- **Operations.** Ubuntu and Node upgrades across the fleet, deploy tooling that
  works on three Ubuntu versions (2023-06-05), log migrations, a second domain on
  S3 and CloudFront (2025-03-05), email authentication (SPF, DKIM, DMARC).
- **Enterprise readiness.** Wrote the answers to two security questionnaires and
  prepared SSO, data-residency and on-premise installation material with Docker
  and Ansible examples for enterprise prospects (2024-02-01 to 2024-06-20).
- **Earlier product work.** Bulk user creation with a dry-run review step
  (2023-02-01), template categories and automatic thumbnails (2022-10-24), Google
  Sheets as a data source, a documentation site (2023-02-06).

**Outcome not recorded.** User and customer numbers; whether the enterprise deals
closed; before and after figures for most performance work.

**Stack.** Vue, Three.js, WebXR, NestJS, PostgreSQL, Socket.IO, mediasoup,
LangChain, LangSmith, OpenAI, Anthropic and Gemini models, Stripe, DuckDB, AWS
(EC2, ECS, RDS, S3, CloudFront, EFS), Ansible, Terraform, Docker, Bitbucket
Pipelines.

---

## 2. Pith — moving a research site to AWS and keeping it up (2026)

**What it is.** pith.science, an open preprint site with machine review built
in: papers from arXiv are read and reviewed by AI models at volume.

**Role.** Infrastructure and reliability engineer. 408 of 2,795 commits since
2026-06-06, the largest contributor to the infrastructure and CI folders, 20
merged pull requests.

**The problem (2026-05-19).** One shared server, no development environment, no
tests or CI, a single 10,000-line server file, and a goal of thousands of reviews
a day.

**Achievements.**

- **The migration (July 2026).** Moved production to AWS with everything in
  Terraform: containers on ECS, a managed PostgreSQL database kept in sync with
  the old server until cutover, deploys from GitHub Actions, a staging environment
  refreshed nightly from production, alarms, rewritten documentation and a
  step-by-step rollback runbook (2026-07-17, 2026-07-27).
- **Scaling.** Found the database spending most of its CPU on one bookkeeping
  query, fixed it, and raised the worker fleet from 128 to 160 with headroom to
  about 300 (2026-08-15). Doubled the daily review lane from 4 to 8 tasks, about
  32 reviews an hour at roughly 2.5 cents each (2026-10-13).
- **Incidents.** Outage response and fix for a cache stampede (2026-08-24),
  removal of a database write on every page view that had taken the site down, a
  queue of 2.5 million items cleared (2026-09-14).
- **Operations.** Moved model calls to a different provider without downtime
  (2026-09-08), a Slack bot with daily statistics (2026-09-03), faster deploys and
  automatic clearing of stuck jobs (2026-09-28), a fallback route for arXiv access.
- **His own summary** from the post-migration report: the old server hid
  failures; now job failures show up in monitoring, fixes ship through git, and
  web and database scale separately.

**Outcome not recorded.** Total papers reviewed; throughput before the migration.

**Stack.** Python, FastAPI, PostgreSQL, Terraform, AWS ECS Fargate and RDS,
GitHub Actions, CloudWatch, several LLM providers.

---

## 3. MarketPoster and HammerConnect — Chrome extensions, built alone (2026)

**What it is.** A Chrome extension for car dealers: it reads vehicle listings
from listing sites and dealer websites and fills in Facebook Marketplace's vehicle
form, one car or a whole lot. A second extension, HammerConnect, turns Facebook
buyer conversations into leads in the dealer's CRM.

**Role.** Sole author: 281 of 281 commits, 77 tagged releases.

**Achievements.**

- **Speed.** Spec on 2026-03-16, first build to the client on 2026-03-18, bulk
  posting two days later, version 2 in the Chrome Web Store on 2026-03-30.
- **The AI part.** A backend pipeline that turns a messy listing into exactly
  the options Facebook's form accepts, with fact-based descriptions.
- **The whole product.** Backend with sign-in, an admin panel with usage
  figures, magic-link onboarding with a welcome page and video tutorial
  (2026-05-19), versioned API so old extension versions keep working, CI/CD that
  builds and tags every release, a release runbook (2026-11-10), per-post
  diagnostics for support (2026-11-12).
- **Upkeep.** Ongoing fixes as listing sites and Facebook change their pages, and
  support for more dealer website platforms.

**Outcome not recorded.** Number of dealers and installs.

**Stack.** TypeScript, Chrome MV3, Vite, NestJS, Prisma, PostgreSQL, LangChain,
OpenAI, GitHub Actions, AWS.

---

## 4. Stacks and Take Next — AI sales dialer and CRM (2024–2026)

**What it is.** A browser-based sales tool: dial, text, see live transcripts and
AI suggestions during a call, let a manager listen in or take over. It grew into a
CRM with contacts, inbox, calendar and AI summaries, then into an AI responder for
car dealerships, then into "Take Next", a queue that hands a rep the next best
lead.

**Role.** Frontend lead and delivery lead. 3,881 of 10,657 commits, the most of
13 authors; nearly all of the web client and all of the Slack client; 58 merged
pull requests. He wrote every release announcement, planned sprints, reviewed
code and interviewed frontend developers.

**Achievements.**

- **Prototype to product in three months.** First sketch 2024-06-14; first
  release for testing 2024-09-01; inbound calls, a dedicated production server
  and a single authenticated WebSocket by 2024-09-23.
- **A release almost every week** from September 2024: SMS and number rotation
  (2024-10-15), admin area and daily backups (2024-11-13), contacts with HubSpot
  import (2024-11-26), AI SMS suggestions and calendar (2024-12-16), voicemail and
  notifications (2025-01-22), call forwarding, a chat bot and plain-language
  statistics (2025-02-19). The release notes run from cycle 15 to cycle 59.
- **Process.** Introduced a staging server with a one-week freeze before
  production and CI/CD (2024-11-20), merged frontend and backend into one
  repository (2024-11-05), later proposed a one-week sprint with a two-week
  release cycle.
- **Dealership port.** Rebuilt the client's existing dealer AI product inside
  Stacks: dealer onboarding wizard, AI conversations, prompt playground, email
  and XML lead sources, bulk inventory. Milestone declared complete on 2025-06-04.
- **Take Next.** Companies, cold and hot lead ranking, follow-ups and HubSpot
  integration, released 2025-08-21; a full UI redesign proposal with mockups
  (September 2025).
- **Slack client.** Take Next rebuilt as a Slack app with slash commands and an
  AI agent in a short internal hackathon (January 2026).
- **Wind-down done properly.** When the project moved to maintenance: access
  audit, plan downgrades, a one-person release pipeline (2026-02-23), and an AWS
  clean-up that removed the test environment and spare capacity (2026-06-01).
- **His year-end note, 2024:** "Thousands of commits made, hundreds of tickets
  complete, tens of features delivered."

**Outcome not recorded.** Number of users and dealers; the total monthly saving
from the clean-up.

**Stack.** Nuxt, Vue, Pinia, Naive UI, TypeScript, Twilio Voice and SMS,
Deepgram, OpenAI, Django, PostgreSQL, Redis, HubSpot, Stripe, Terraform, AWS ECS,
GitHub Actions; NestJS and Slack for the Slack client.

---

## 5. Theory.us — AI chat app in three days (December 2024)

A chat application that answers questions in the voice of a physics theory, with
streaming answers, memory, LaTeX math, share links and dark mode. Built from
scratch with two teammates in a three-day cycle and released on 2024-12-28, then
polished for mobile with a landing page (2025-02-08). It was switched off at the
client's request soon after release; whether it went public again is not recorded.

---

## 6. Ideonix — governed decision-support prototype (2026)

A prototype that answers a business owner's questions from uploaded documents
with tracked claims and evidence. 56 of 363 commits and 8 merged pull requests in
two months.

- Found that uploaded PDFs were never actually read, added parsing and raised the
  per-document budget from 16,000 to 60,000 characters; 1,174 unit tests green
  (2026-08-20).
- Found and fixed a failure on every live request that mocked tests had hidden
  for three days (2026-09-28).
- Added fixtures and automated QA (2026-08-31).

Status is unsettled; treat as optional for the site.

---

## 7. Work for an Australian client (2020–2025)

Several smaller products for one long-term client.

| Project | What it was | State |
|---|---|---|
| QHL | Property subscription portal with Xero accounting and Stripe | Maintained on and off until 2024 |
| Proactive | Issue-reporting app for organisations | Deployed, finished |
| GRV3 | Complaints platform where organisations subscribe and people file complaints | Finished |
| Colour configurator | 3D building colour picker (roof, walls, trim) with image export, in Three.js | Launch not recorded |
| Admin app | Nuxt and Supabase admin with magic-link sign-in | 2025 |
| Trader | Trading data server and backtest experiments | Exploratory |

---

## 8. Other engagements

- **TagSpace portal (2022–2023).** Stripe subscriptions for an AR location-tag
  portal on .NET: checkout, billing portal, webhooks, plan limits, sign-up hook
  that creates the customer. Whether it reached production is not recorded.
- **Human Pixel (2024).** Two months on an asset-finance broker dashboard with a
  Zoho CRM integration (SIM3) and an invoice and recipe-costing app (Foo1), plus a
  bot that keeps client and developer ClickUp boards in sync. Mostly diagnosis and
  fixes in inherited code.
- **Call transcriber (2024).** A demo that transcribes a live call and feeds it
  to an LLM for tips. It became the seed of Stacks.
- **One Stop Services (2021).** A ticketing service; only repository names are
  known.
- **Planetary scanner (2024).** Reviewed a specification for book-scanner
  software; no sign the job was taken. Leave out.
