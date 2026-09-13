# Process overview

This is a running log, updated as each phase completes, rather than written
once at the end. I'm working the assignment as an explicit sequence of
phases (tracked in `planning/`) instead of jumping straight to a website, so
the log below follows that same order.

## What I built

Not yet locked in — `planning/course-concept.md` is still a draft. Once the
course concept, curriculum, and assessment design are finalized this section
becomes the one-paragraph summary of the finished course and the idea behind
it.

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

Worth being explicit about: I haven't written or run a CoC scenario myself.
The interest is in the subject as a design problem, not first-hand Keeper
experience. That means the course's authority has to come from the sources
in `research/subject/`, read and synthesized honestly, rather than from
personal practice I don't have — a different (and in some ways harder)
position to design a course from than if I'd actually run these at a table.

### Phase 2 — Literature search

Ran an AI-assisted search pass to build an initial source list — official
CoC scenario-writing guidance, scenario/mystery design theory, and a few
academic sources on tabletop role-playing game design — logged in
`research/subject/sources.md`. Every entry was marked `unverified` until
individually checked that the link resolves and the author/venue/content
match what's claimed, rather than trusting an AI-assisted search at face
value. All 9 entries verified 2026-09-13; one author attribution needed
correcting (a paper credited in shorthand to a single author actually has
seven). Reading and synthesizing each source into `research/subject/notes.md`
is the remaining Phase 2 work — an entry gets added here once that's done.

## Before you ship

`pnpm check:evidence` verifies that the starter's template comment is gone,
that citations resolve to real commits, that a crit week's reflection entry
is in `reflections/`, and that `CLAUDE.md` is there. It checks that the
account is traceable, not that it's good — that's the marker's call.
