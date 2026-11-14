# Before anything goes public

This repository is public on GitHub, and so will the site be. The research notes
in this folder were written with that in mind, but the checks below still apply
to the branch and to the site copy.

## Needs the client's OK

All client code is private. A product being public does not mean the client
agrees to be named as a client, shown in screenshots, or described from the
inside.

| Client work | Ask whom | What to ask for |
|---|---|---|
| Flow Immersive | The company's lead | Naming the company; screenshots or a screen recording; which achievements can be described |
| Stacks, Take Next, MarketPoster, HammerConnect | The owners at Hammer | Naming the products and the company; screenshots; the Slack client |
| Pith | The site owner | Naming the migration work; a quote would be valuable here |
| Theory.us | The same owner | Whether to mention it at all |
| Ideonix | The founder | Likely leave out until the engagement is settled |
| Australian client projects | The client | Naming QHL and the others, or describing them without names |
| Human Pixel projects | — | Describe without names, or leave out |

If a client says no to naming, the case study still works anonymised: "a 3D data
visualization platform", "an AI sales tool for car dealerships".

**Testimonials.** The notes contain none. Ask for a sentence or two while asking
for permission; it is one message for both.

## Keep out of the site and out of this repo

- Hourly rates, monthly quotas, invoices and payment disputes.
- Client-internal figures: pricing tables, cloud bills, telephony spend, usage
  numbers, per-tenant costs. Percentages and "before and after" are safer than
  absolute sums, and still need the client's OK.
- Customer and prospect names of clients: enterprise prospects, tenants, schools,
  dealers, named end users.
- Security weaknesses and incidents told from the inside: authentication issues,
  leaked keys, users seeing other accounts' data. "Led incident response" is fine;
  the incident's details are not.
- Team matters: burnout, layoffs, performance notes, process disputes.
- Private people: teammates' and family names, contact details.
- Home network details: addresses, device lists, VPN endpoints, router configs.
  The smart-home and router repos contain these, so show excerpts, not the repos.
- Any identifier that sits in the notes in plain text (client IDs, account IDs,
  price IDs, hostnames).

## Handle with care

- **MarketPoster.** It reads third-party listing sites and automates posting to
  Facebook Marketplace. Describe the outcome for dealers ("list a whole lot in
  minutes"), not the scraping mechanics.
- **Pith.** The arXiv access workarounds are an operations detail to leave out.
- **Switch modchip.** Fine as proof of fine soldering; keep it short and away
  from anything that reads as a piracy guide.
- **Current site.** `script.js` publishes a phone number and the personal email.
  Decide whether the new site keeps both or routes contact through Calendly and a
  form.

## Before pushing this branch

1. Read these files once for anything a client would mind.
2. Decide whether client names stay in the research files or are replaced with
   descriptions until permission arrives.
