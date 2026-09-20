# Process overview

This is a running log, updated as each phase completes, rather than written
once at the end. I'm working the assignment as an explicit sequence of
phases (tracked in `planning/`) instead of jumping straight to a website, so
the log below follows that same order.

## What I built

`SLOP1439: How to Write a Call of Cthulhu Scenario` — a twelve-week studio
course in scenario design, not Mythos trivia or system rules. Each week
pushes one student-authored scenario draft through the same five-stage
pipeline a working Keeper uses: premise, truth and antagonist, structure,
clue/puzzle/check/NPC design, then a real playtest and final assembly.
The course's authority comes from my own decade of running and writing CoC
scenarios, cross-checked against Chaosium's and other published
Keeper-craft guidance rather than replacing it — where the two disagree
(week 6's clue taxonomy, most visibly), the course teaches both. Four
assessments track the same arc: a pitch, a full investigation
architecture, a report on an actual playtest with a real player, and the
finished, playtest-revised scenario.

## How I got here

### Phase 0 — Understanding the starter repo

A fresh, unmodified clone of the starter failed `pnpm check`: the four bare
`src/pages/{assessments,lectures,people,policies}/index.mdx` pages had no
layout at all, so axe reported 12 accessibility violations. Fixed by adding
`layout: ../../layouts/PageLayout.astro` to each page's frontmatter —
[`f047712`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-aSH201807/commit/f047712).

Before touching any course content, I wrote the four mechanically-checkable
spec assertions from the brief (course code keeps its `439` suffix, exactly
12 dated teaching sessions, ≥1 lecture linked to a deck that builds,
assessment weights sum to 100) —
[`303885c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-aSH201807/commit/303885c).
This meant the rest of the work had a red-to-green target instead of a vague
sense of "done" to guess at near the deadline.

### Confirming a workflow before starting content

Before picking a topic, I set process rules with my agent collaborator,
recorded as harness rules in `CLAUDE.md`: keep research material (`research/`)
separate from content decisions (`planning/`) and from the site itself; never
hand the agent a raw source document as design input, only my own synthesis
of it; and verify any source before treating it as fact or citing it, rather
than trusting an AI-assisted search at face value. The reasoning: it's easy
to get a generic, unearned-sounding course out of an agent if you feed it raw
material and ask it to design from scratch — the synthesis step
(source → key idea → what I actually think → implication for this course →
whether it becomes a harness rule) is what keeps the design decisions mine.

### Phase 1 — Choosing a topic

I chose "how to write a Call of Cthulhu scenario from scratch" — not CoC
rules or Cthulhu Mythos as subject matter, but the design process a Keeper
goes through to turn a vague horror premise into a runnable investigation
scenario. I'd considered an earlier candidate ("the art of bad design") but
didn't run a formal side-by-side comparison between the two: with about two
weeks to the deadline, I judged the CoC topic directly against what the
brief actually rewards (niche, 12-week depth, a coherent central idea,
assessment and harness potential) and it was strong enough on all of those
to commit to without spending a day scoring alternatives. The main risk this
accepts: I haven't stress-tested that the runner-up wasn't actually better,
only that this one clears the bar.

Worth being explicit about: I've actually run and written Call of Cthulhu
scenarios myself, for small home groups, for over a decade. Source #14 in
`research/subject/sources.md` is my own column-style notes on that
practice, added once I'd already built the source list below from
literature — it turned out to map almost exactly onto the 12-week
structure I'd drafted from secondary sources, which is why it became the
course's primary spine rather than a late addition bolted on top. The
published sources stay in the course as cross-checks and second
perspectives, not as the primary voice, and anywhere my own approach
differs from theirs (clue taxonomy, week 6, in particular) the course
teaches both and says so rather than picking a winner.

### Phase 2 — Literature search

Ran an AI-assisted search pass to build an initial source list — official
CoC scenario-writing guidance, scenario/mystery design theory, and a few
academic sources on tabletop role-playing game design — logged in
`research/subject/sources.md`. Every entry was marked `unverified` until
individually checked that the link resolves and the author/venue/content
match what's claimed, rather than trusting an AI-assisted search at face
value. All 9 entries verified 2026-09-13; one author attribution needed
correcting (a paper credited in shorthand to a single author actually has
seven).

### Phases 3–6 — Course philosophy, curriculum, assessments, IA

With about a day left before the deadline, I made an explicit call with my
agent collaborator rather than silently either blowing through my own
process gate or missing the deadline trying to honour it fully: keep the
real playtest requirement in Assessment 3 (the honest, harder version of
the assessment, not the easier one), and fast-track-finalize
`course-concept.md`, `curriculum.md` and `assessments.md` from the
existing v0 drafts plus my own source-#14 notes, rather than running a
separate formal course-design/pedagogy research pass. `notes.md` records
the week-by-week mapping from source #14's five sections onto weeks 2-9;
the three planning docs and `information-architecture.md` were finalized
directly from that mapping and the existing v0 structure it validated —
[`e222aaa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-aSH201807/commit/e222aaa).

### Phases 7–11 — Site content, human review, final QA

With the planning docs FINAL, built the actual site: 12 dated studio
pages, 6 lectures with one real deck, 4 assessment briefs, both people
pages, home and policies pages, and the four builder-facing index pages
rewritten for students rather than site-builders —
[`901dd2b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-aSH201807/commit/901dd2b).
The four starter images (`card.png`, `hero-home.avif`, and both people
photos) are deleted rather than replaced with placeholder art of my own;
the theme falls back cleanly to a title-only hero and image-free people
cards, which is an honest design choice given the time available rather
than a gap. `pnpm check` is green: 0 build errors, the axe accessibility
audit passes across all 32 pages, no broken internal links, the one deck
compiles, and all 5 spec/data-integrity tests pass.

### Revisiting the research-discipline rule mid-review

On a review pass, the studio pages read as thinner than the source material
actually supports. The original `CLAUDE.md` rule ("only a synthesized
`notes.md` entry, never a raw source, may feed content") was written to
stop an agent from generating a generic, unearned-sounding course out of
material it was just handed — a legitimate concern for the *literature*
(sources #1–13), which is third-party, copyrighted work. It over-applied to
source #14, my own decade of GM notes: there's no copyright or "unearned
authority" issue with drawing directly on my own writing. I amended the
rule to exempt source #14 outright, and separately to allow drawing
directly from `research/subject/reading-notes/*` (the verified-source
extractions, not the published articles themselves) provided the specific
source is named wherever its framework or example is used and the
reading-note's own wording isn't lifted near-verbatim — citation with
attribution, not synthesis-gating, is what actually protects against
plagiarizing the literature. Recorded in `CLAUDE.md`'s Research discipline
section.

### Thickening the studio pages (weeks 3–10)

Applying the amended rule above, weeks 3, 4, 5, 6, 7, 8, 9 and 10 each got a
paragraph or two of concrete, named-source material woven into the studio
body: source #14 directly (weeks 6–9, my own clue-delivery, puzzle,
failure-text and NPC rules) and cited reading-notes extractions from
already-verified literature (week 3 and 4 draw Blase's "strong scenario
question," six-question hidden truth, and active-timeline framework; week 5
draws Blase's five-part location template; week 10 draws Blase's escalation
stages and Petersen/Alexander's "Creepy Stuff Rule," via source #4 and #12).
Source #12 (Blase's horror-atmosphere guide) was still `unverified` in
`sources.md` when I went to cite it for week 10 — caught by the reading-notes
exception's own condition that only already-verified sources qualify, so I
verified it (link resolves, author/venue/content match) before using it, not
after. Weeks 1, 2, 11 and 12 were left alone: 1 and 2 are orientation/premise
weeks already reasonably dense, and 11–12 are playtest/assembly logistics
where forcing in a literature citation would be padding, not substance.

## Before you ship

`pnpm check:evidence` verifies that the starter's template comment and
`STARTER_CONTENT` markers are gone, that the four starter images have been
replaced or removed, that citations resolve to real commits, and that
`CLAUDE.md` is there. This repo carries no `reflections/` requirement — an
assignment's written account is this file. The check verifies the account
is traceable, not that it's good — that's the marker's call.
