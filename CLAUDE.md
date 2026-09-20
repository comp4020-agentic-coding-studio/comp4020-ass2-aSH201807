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
- **Exception, source #14**: `research/subject/personal-notes-raw.txt` is
  the course author's own original writing, not a third-party source, so
  the copyright/plagiarism and "unearned authority" concerns behind the rule
  above don't apply to it. Content may draw directly on its specific
  frameworks and worked examples, including copying its wording verbatim
  (translated where the site content is in a different language from the
  source), without going through a separate `notes.md` synthesis step first.
- **Exception, `research/subject/reading-notes/*`**: these are extractions
  from already-verified, publicly-published sources (#1, #4–13), not raw
  copies of the works themselves. Content may draw a framework, term or
  worked example from one of these files directly into course content
  without waiting for a full `notes.md` synthesis entry first, on two
  conditions: (1) the specific source is named where it's used (as week 6
  already does for Blase's core/supporting/advantage framework) — an idea
  or framework can be taught with attribution, but the reading-note's own
  wording may not be lifted near-verbatim, since these files are explicitly
  raw extraction rather than paraphrase (see each file's own header); (2)
  the source's `sources.md` status is already `verified`. This still
  doesn't license copying the underlying published article itself — only
  these already-verified extractions of it.

## Course identity

- Course code is `SLOP1439`. The `439` suffix must never change; only the
  leading level digit may.

Course-content-specific rules (e.g. what every teaching week must contain)
get added here once the curriculum and assessment design are locked — not
before.
