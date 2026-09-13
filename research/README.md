# Research working folder

This is a **working resource library** for designing the course in this
assignment, not itself graded content. Nothing here is assumed to ship on the
final website — decide per-item, later, what (if anything) gets referenced
from `planning/`, `CLAUDE.md`, `spec/`, or `PROCESS.md`.

## Structure

- `subject/` — subject-matter research for the course topic itself (currently:
  designing a Call of Cthulhu scenario from scratch).
- `examples/` — analysis of existing real courses (COMP4020 itself, and other
  distinctive courses) as design case studies — **principles to transfer, not
  pages to copy**. The assignment brief explicitly warns against rebuilding
  COMP4020's IA with a find-and-replace.

No standalone "what makes a good course" (general pedagogy) folder —
decided against maintaining a separate literature line for that. Where a
pedagogy/learning-theory principle is actually needed to justify a design
decision, it's cited inline in `subject/notes.md` at the point it's used
(e.g. source #7, *Learning from Ludemes*, already bridges subject matter and
learning theory — it's about how TTRPG mechanics map to learning processes —
so it can carry that weight without a separate research line).

## Rules for this folder

1. **Sources first, synthesis second.** Each subfolder's `sources.md` is a raw
   intake list — title, author, link, what it claims to be. `notes.md` is
   where synthesis happens, one entry per source, in this shape:

   ```
   ## Source
   Author / Year / Title / URL

   ## Key idea
   (what it says)

   ## What I think
   (do I agree, and why — my judgment, not the source's)

   ## Implication for my course
   (what this means for THIS course, specifically)

   ## Harness implication
   (does this become a CLAUDE.md rule? a spec check? neither?)
   ```

2. **Unverified until checked.** Anything imported from an AI-assisted search
   (this repo's first batch of CoC/TRPG sources came from a ChatGPT session)
   is a draft claim, not a fact — the link, the author, and the described
   content need to be checked before anything here is cited in `PROCESS.md`
   or built into the site. See the `status` column in each `sources.md`.

3. **Don't hand raw sources to the coding agent.** Only the `notes.md`
   synthesis (or a specific principle pulled from it) should ever become part
   of a prompt to the implementation agent — not a whole paper or thesis.
