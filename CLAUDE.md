# Harness

## Process discipline

This project is built in explicit phases, not straight to a website. The
phase order and current status live in `planning/` and are narrated in
`PROCESS.md`. Do not implement or edit site content (pages under `src/`)
until `planning/course-concept.md`, `planning/curriculum.md`, and
`planning/assessments.md` are all marked **FINAL** (their `DRAFT v0` header
removed). If asked to build site content before that, say so instead of
proceeding — the content isn't locked yet and building on top of a draft
wastes the work.

## Research discipline

- Everything in `research/*/sources.md` is unverified until its `status`
  column says otherwise. Do not treat an entry as fact just because it's in
  the file.
- Only a synthesized entry from `research/*/notes.md` — never a raw source
  document (a whole paper, thesis, or article) — may be used as input for
  course content, a `CLAUDE.md` rule, or a `spec/` check.
- Any source actually cited in `PROCESS.md` or built into site content must
  be verified first: the link resolves, and the author/venue/content match
  what's claimed about it.

## Course identity

- Course code is `SLOP1439`. The `439` suffix must never change; only the
  leading level digit may.

Course-content-specific rules (e.g. what every teaching week must contain)
get added here once the curriculum and assessment design are locked — not
before.
