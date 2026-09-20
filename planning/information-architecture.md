# Information architecture

FINAL.

## Top-level navigation

Home, Studios (`sessions`), Lectures, Assessment, People, Policies — six
entries, matching the theme's existing nav slots. The `sessions` collection
is relabelled "Studio"/"Studios" everywhere a reader sees it (`sessionLabels`
in `src/site-config.ts`); the underlying collection, URL and API path stay
`sessions`.

## Pages and collections

- `/` — home: what the course is, what you'll walk out with, who it's for,
  cards into Studios / Assessment / People.
- `/sessions/` + 12 dated entries (`01-what-is-a-scenario` …
  `12-assembly-and-handoff`) — the weekly studio: what to bring, what
  happens in the room, what to do after.
- `/lectures/` + 6 dated entries (weeks 1, 2, 4, 6, 8, 10) — short input
  pieces feeding the following studio; week 1 carries the only slide deck.
- `/assessments/` + 4 entries (`scenario-pitch`, `investigation-architecture`,
  `playtest-report`, `final-scenario`) — brief, submission, marking, in the
  order they're due.
- `/people/` + 2 entries (`marisol-quaye`, `idris-fenn`) — convenor and
  tutor, what each owns, how and when to reach them.
- `/policies/` — one page: late work/extensions, academic integrity, the
  Assessment 3 playtest requirement, who to ask for what.

## Why this shape

Six weeks of lectures against twelve weeks of studios reflects that this is
a studio course: the lecture supplies a framework once, the studio is where
it gets applied to a student's own draft every week, including the six
weeks with no paired lecture. Four assessments, not more, map onto the
four real checkpoints in the design pipeline the course teaches (premise,
architecture, playtest, finished scenario) rather than one per fortnight —
adding more would fragment marking without adding a new checkpoint worth
grading separately.

## Cross-referencing (`related:`)

Every studio that a lecture directly feeds links to it, and vice versa;
every assessment links to the studio its brief grows out of. This keeps
the site's graph meaningful rather than decorative — a reader on any page
can find the one or two pages actually relevant to it, not an exhaustive
list.

## Spec compliance

No automated check inspects IA directly; `pnpm check`'s build step still
verifies every `related:` ref resolves and the axe accessibility audit
passes against whatever nav and page structure this describes.
