# Orbit — Website & Landing Page Content Guide
**For launch. Written to be used, not filed.**

---

## 0. Content Philosophy

Before a single word goes on the page, lock in three principles:

1. **Specificity beats aspiration.** "Generates a complete React + Vite app with auto-healing" beats "Build faster with AI." Orbit has real, unusual capabilities — name them.
2. **Show the gap, then close it.** Every section should make the reader feel a pain (slow feedback loops, hallucinated imports, broken output) and then show Orbit as the resolution.
3. **Write like an engineer, not a marketer.** Your audience can smell filler. Precision is credibility.

---

## 1. Brand Voice

| Attribute | What It Means | What to Avoid |
|---|---|---|
| **Direct** | Subject → verb → object. No preamble. | "In a world where developers are looking for ways to..." |
| **Technical but accessible** | Use real terms (WebContainer, AST, pre-flight) — but always with a one-line payoff | Jargon walls with no follow-through |
| **Confident, not arrogant** | Make claims you can back up | "Revolutionary", "10x", "game-changer" |
| **Dry wit** | One well-placed sardonic line per section is enough | Trying too hard; emoji overuse |

**Voice test:** Read any headline aloud. If it could belong to Vercel, Linear, Supabase, or Raycast, rewrite it until it can only belong to Orbit.

---

## 2. Messaging Hierarchy

### 2.1 — Core Positioning Statement (internal use — not copy)
> Orbit is the only AI web development environment that validates, patches, and heals generated code before it ever reaches your browser — so you ship working apps, not debugging sessions.

Use this as the filter for every content decision. If a piece of copy doesn't serve this idea, cut it.

### 2.2 — The Three Pillars (build all content around these)

| Pillar | One-liner | Proof |
|---|---|---|
| **Generate** | Describe it. Get a complete React/TypeScript/Tailwind app. | Multi-agent pipeline: Planner → Reasoner → Executor |
| **Validate** | Pre-flight catches bad imports, broken JSX, fake icons before runtime | Pre-flight gate; ts-morph AST engine |
| **Heal** | 3-tier auto-healing catches errors so you don't have to | Terminal → npm → browser runtime error interception |

---

## 3. Landing Page Structure

### Section 1: Hero

**Goal:** Capture the problem + promise in under 5 seconds.

**Headline formula:** `[What it does] + [Why that matters to you]`

**Options to test:**

```
Option A (Problem-forward):
"Your AI writes broken code.
Orbit fixes that."

Option B (Capability-forward):
"Describe a web app.
Get working React. Not a starting point — the thing itself."

Option C (Precision-forward):
"The AI dev environment that validates
what it generates."
```

**Subheadline (1–2 sentences max):**
> Orbit generates complete React + TypeScript + Tailwind applications from natural language — then runs a multi-agent pipeline to catch broken imports, hallucinated dependencies, and runtime crashes before you ever see them.

**CTA:**
- Primary: `Start building` or `Open Orbit` (verb-first, low friction)
- Secondary: `See how it works` (anchors to demo/video below)

**Hero visual:**
Show a real generation — not an abstract animation. A side-by-side of a prompt going in and a running app coming out is worth more than any motion graphic. If you have a screen recording, embed it autoplay/muted/loop.

---

### Section 2: The Problem (optional but high-converting)

**Goal:** Name the frustration before selling the solution. Makes the reader feel understood.

**Headline:** `AI code generation has a reliability problem.`

**Body (short — 3 punchy lines):**
> You've seen it. The LLM confidently imports a component that doesn't exist. References an icon that was never in the library. Writes JSX with a `.js` extension that breaks Vite on boot.
>
> You fix it. You run it. It breaks again. Somewhere else.
>
> Orbit intercepts all of that before you ever have to.

---

### Section 3: How It Works

**Goal:** Explain the pipeline at a level that builds trust. Engineers want to know what's under the hood.

**Headline:** `Five agents. One reliable output.`

**Layout:** Horizontal flow diagram (or numbered vertical list on mobile)

```
[1] You describe what you want
      ↓
[2] Planner maps the task graph
      ↓
[3] Reasoner builds the component tree
      ↓
[4] Executor writes files + shell commands
      ↓
[5] Pre-flight validates before anything runs
      ↓
[6] AutoHealer catches what slips through
      ↓
[7] Running app in your browser
```

**Micro-copy under each node:** One line. What it does, not what it is.
- Planner: *Turns your prompt into a structured task graph*
- Reasoner: *Decides which components to compose and how*
- Executor: *Emits real file writes and install commands*
- Pre-flight: *Scans for bad extensions, hallucinated icons, broken regex*
- AutoHealer: *Patches terminal errors, npm failures, and browser crashes — automatically*

---

### Section 4: Features (Pick 4–6. Not more.)

**Headline:** `Built for the part where AI usually fails.`

**Feature card structure:** Icon + Bold label + 1-sentence payoff. That's it.

| Label | Copy |
|---|---|
| **Pre-Flight Validation** | Catches hallucinated imports, invalid JSX extensions, and broken patterns before code touches the runtime. |
| **3-Tier Auto-Healing** | Terminal errors, npm failures, browser crashes — each tier intercepted and repaired automatically. |
| **Runs in Your Browser** | Powered by WebContainers. No server, no setup, no waiting for a cloud build. |
| **Real TypeScript, Real AST** | ts-morph structural validation — not regex heuristics. If it's wrong, Orbit knows why. |
| **Slash Commands** | `/polish`, `/animate`, `/harden`, `/audit` — specialized passes for design, motion, security, and quality. |
| **Supabase Fullstack** | One command to provision auth, infer your schema, generate RLS policies, and inject a typed client. *(coming soon)* |

**Note on "coming soon":** Only include it if you can ship it within 2 weeks of launch. Otherwise cut it — it creates doubt around the features that *are* live.

---

### Section 5: Demo / Output Gallery

**Goal:** Prove it with evidence, not claims.

**Options (in order of impact):**
1. **Live interactive demo** — let users type a prompt and see generation happen (highest friction to build, highest conversion)
2. **Screen recording / GIF** — real session, real output, no cuts
3. **Before/After** — "Prompt in → App out" static screenshots with captions
4. **Generated app showcase** — gallery of 4–6 real apps Orbit produced

**Caption formula for screenshots:**
> `[What was typed] → [What was generated in X seconds]`
> Example: *"A Kanban board with drag-and-drop and local persistence" → 14 files, running in 4.2s*

---

### Section 6: Social Proof (even if thin at launch)

If you have zero users, use these instead:
- Your own quotes reframed as design principles: *"We built Orbit because every other tool handed us broken code and called it a starting point."*
- Numbers from your own testing: *"Generated 200+ apps in internal testing. AutoHealer fired on 34% of them."* (raw stats are credible)
- A single waitlist number if you have one: *"2,400 developers on the waitlist"*

When real testimonials come in, use this format:
> [Specific outcome] — [Name, Role, Company]
> *"Orbit generated a working Supabase auth flow in one prompt. I've tried four other tools. None of them got past the import errors."*

---

### Section 7: Pricing (if applicable at launch)

**If launching free/waitlist:**
> **Free while we're in early access.**
> We're onboarding developers in batches. Claim your spot.
> `[Get early access]`

**If launching with tiers:** Keep pricing copy minimal. Let the tier names and feature lists do the work. Avoid adjectives like "powerful" or "advanced" — just describe what's included.

---

### Section 8: Final CTA

**Headline:** Short. Imperative. Confident.
```
Options:
"Start building something."
"Your next app starts here."
"Open Orbit."
```

**Body (optional — 1 sentence):**
> No setup. No broken output. Just describe what you want.

**CTA button:** Same as hero — `Start building` or `Open Orbit`

---

## 4. Above-the-Fold Checklist

Before launch, every item must be answerable with YES:

- [ ] Can a developer understand what Orbit does in 5 seconds?
- [ ] Is there at least one concrete technical claim (not just a benefit statement)?
- [ ] Is the primary CTA above the fold on desktop AND mobile?
- [ ] Is there visual proof (screenshot, recording, live demo) within the first two sections?
- [ ] Does the hero headline pass the "could only be Orbit" test?
- [ ] Are all "coming soon" features clearly labeled?
- [ ] Is load time under 2.5s? (Especially critical if you're selling dev tooling)

---

## 5. SEO & Metadata

### Page Title
```
Orbit — AI Web Development That Actually Works
```
or
```
Orbit — Generate, Validate & Heal React Apps with AI
```

### Meta Description (155 chars max)
```
Orbit generates complete React + TypeScript + Tailwind apps from natural language — with pre-flight validation and auto-healing built in. No broken output.
```

### OG Image
- 1200×630px
- Dark background (matches brand)
- Headline + product screenshot or logo
- No more than 12 words of text

### Target keywords (long-tail, not competitive head terms)
- `ai web development environment`
- `ai react app generator`
- `bolt alternative`
- `lovable alternative`
- `webcontainer ai coding`
- `auto-healing code generation`

---

## 6. Copy Patterns to Use

**Use these:**
- Short declarative sentences under complex ideas: *"Pre-flight runs before the WebContainer boots. It catches what the LLM missed."*
- Concrete numbers: file counts, seconds, error rates
- Parallel structure in lists: all gerunds, all noun phrases, all imperatives — pick one and stay consistent
- Em dashes for a beat: *"Orbit doesn't just generate code — it guarantees it runs."*

**Avoid these:**
- Passive voice in CTAs or headlines
- Stacked adjectives: "powerful, flexible, scalable AI-driven platform"
- Rhetorical questions as headlines: "What if your AI actually worked?"
- Words: *seamless, robust, cutting-edge, next-gen, world-class, unlock, supercharge*

---

## 7. Content for Secondary Pages

### /how-it-works
Full pipeline walkthrough. Diagrams. Be technical. This is where engineers go to decide if they trust you.

### /docs (or /guide)
Getting started in under 5 minutes. First prompt → running app. Measure and optimize this flow obsessively.

### /changelog
Launch with at least 3 entries. Shows the product is alive. Dates matter.

### /about (optional at launch)
Why you built it. Keep it under 200 words. End with what you're building toward.

---

## 8. Launch Day Checklist

- [ ] Hero copy finalized and reviewed by someone outside the project
- [ ] At least one real screen recording embedded
- [ ] OG image tested with Twitter/LinkedIn card preview tool
- [ ] All "coming soon" items labeled
- [ ] 404 page is not the framework default
- [ ] Console has zero errors on production build
- [ ] Analytics installed (even just a script tag — you need day-one data)
- [ ] Waitlist or signup flow tested end-to-end on mobile

---

*This document is a working guide, not a spec. Override anything that doesn't fit what you observe once real users arrive.*
