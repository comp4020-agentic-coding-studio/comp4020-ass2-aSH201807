---
name: reading-notes
description: Produce a standalone raw-extraction reading-notes file for one source in research/*/sources.md — used whenever the task is "read source #N and take notes," before any synthesis happens in notes.md.
---

# Reading notes

Produces `research/<subject-or-examples>/reading-notes/<slug>.md`: a
**raw-extraction** record of one source — its points and concrete examples,
in the source's own order — with no personal judgment. This is the layer
between "source is verified in `sources.md`" and "source is synthesized in
`notes.md`." See `research/README.md` for the sources → notes.md pipeline
this feeds into, and `CLAUDE.md`'s Research discipline section for why the
separation matters (only `notes.md` synthesis, never a raw source file, may
become input to course content, a `CLAUDE.md` rule, or a `spec/` check).

## Hard rules

1. **Never synthesize here.** No "what I think," no implication for the
   course, no harness rule. If a genuine reaction shows up while reading,
   it belongs in `notes.md`, not this file.
2. **Always present the full draft in chat first.** Do not create or
   overwrite the file until the user has explicitly confirmed the draft
   (content, format, and depth) is acceptable. This applies to every reading
   -notes file, not just the first one — confirm each one individually.
3. **Depth follows accessibility, not ambition.** Don't pad a paywalled or
   metadata-only source to look as thorough as a fully-read one — an honest
   thin file is more useful than a padded one. See "Depth tiers" below.
4. **When asked for "more detail,"** expand by splitting existing bullets
   into their individual distinct points/examples (one bullet per point or
   example) rather than writing new interpretation — the extra detail comes
   from granularity, not synthesis.

## Workflow

1. **Find the source.** Check `research/<subject>/pdfs/` (Glob) for an
   already-downloaded file before fetching anything new. For a web source,
   use WebFetch on the URL from `sources.md`.
2. **Read it in full** before writing anything — the whole PDF (Read tool
   returns per-page `<document_content page="N">` blocks) or the whole
   fetched page. Don't extract from a partial read.
3. **Pick a depth tier** (below) based on what's actually accessible.
4. **Draft the file content and post it in the chat response**, using the
   template below. Ask whether the format/granularity is acceptable.
5. **Only after explicit confirmation**, write the file to
   `research/<subject-or-examples>/reading-notes/<slug>.md`.
6. If a fact-check turns up a correction to `sources.md` (e.g. an author
   count, a missing co-author, a wrong date), fix `sources.md` in the same
   pass and note the correction inline in this file's Source block.

## Depth tiers

| Tier | When | What it looks like |
|---|---|---|
| **Full** | Full text accessible, academic or long-form (paginated PDF or a substantial web guide) | Section-by-section walk in the source's own order; every distinct point and every concrete example gets its own bullet (don't fold several into one summarizing bullet); each bullet or section carries a locator (see below). This is the #4/#5/#7/#8 style. |
| **Light** | Full text accessible but short/simple, or a hub/index page | Section headings + key points, examples called out, no need for exhaustive per-bullet splitting unless asked. |
| **Metadata-only** | Paywalled, or only an abstract/TOC is publicly visible | Bibliographic block + verbatim abstract + any visible section headings/keywords + one short paragraph naming what's usable at this depth and what's inaccessible. Do not invent content for the locked sections. This is the #9 style. |

## Locator convention

- **Paginated PDF** (a real page number is printed on each page): cite
  `(pp.X–Y)` for a section range, `p.N:` prefix for an individual bullet.
  If the PDF's own page numbers already match the paper's page numbers (a
  short conference paper, e.g. #8), use them directly. If the PDF carries a
  separate publisher/journal pagination stamped on the page (e.g. a journal
  reprint, e.g. #7's ludemes.pdf), cite that printed pagination, not the
  PDF's physical page count.
- **Un-paginated web article**: the section heading itself is the locator
  — no page numbers exist to cite.
- **Metadata-only source**: no locator needed beyond naming which section
  heading a keyword/topic belongs to, since content isn't available to cite
  into.

This granularity (page-range or heading, not sentence/citation-level) was
confirmed sufficient by the user — don't over-engineer finer locators
unless asked.

## File template

```markdown
# Reading notes — Source #N

## Source

- **Title**: ...
- **Author(s)**: ...
- **Date**: ...
- **Type**: e.g. peer-reviewed journal article / conference paper / blog
  post / web guide / book chapter (paywalled) — say plainly if the type
  affects how much of it is accessible
- **Venue**: (if academic and applicable)
- **URL**: ...

**Citation**: (a formatted citation in a consistent style)

**Abstract/summary**: verbatim if the source provides one; otherwise your
own single explicitly-labeled paragraph ("the source has no abstract — this
is my one-paragraph summary of the whole piece").

A short meta-note: confirms this is raw extraction not synthesis, states
which locator convention applies to this specific source, and (for
metadata-only sources) states plainly what's inaccessible.

---

## 1. <Section name, in the source's own order> (<locator>)

- <point or example, one per bullet, locator-annotated>
- <point or example>

## 2. <next section> (<locator>)

...

(Optional closing subsections as needed: a reconstructed running worked
example that threads through multiple sections, a flag for `sources.md` if
something was discovered that changes a source's status, etc. — follow the
existing files' patterns rather than inventing new closing-section types.)
```

## Reference examples

`research/subject/reading-notes/petersen-alexandrian.md` (#4, light/full —
short blog post), `blase-rpg.md` (#5, full — long guide with a running
worked example), `riel-monahan-ludemes.md` (#7, full — paginated journal
article), `guzdial-pcg.md` (#8, full — paginated conference paper, fully
itemized to bullet-per-point/example), and `carbonell-dread-trident.md` (#9,
metadata-only — paywalled book chapter) are the worked precedents this
skill was extracted from. When in doubt about format, match one of these
rather than inventing a new structure.
