# Reading notes — Source #8

## Source

- **Title**: Tabletop Roleplaying Games as Procedural Content Generators
- **Authors**: Matthew Guzdial (U. Alberta), Devi Acharya (UC Santa Cruz),
  Max Kreminski (UC Santa Cruz), Michael Cook (Queen Mary U. London), Mirjam
  Eladhari (Södertörn U.), Antonios Liapis (U. Malta), Anne Sullivan
  (Georgia Tech) — 7 authors (corrected in `sources.md` from the shorthand
  "Guzdial et al." single-author attribution the initial search pass used)
- **Date**: 2020
- **Type**: peer-reviewed conference paper (9 pages)
- **Venue**: International Conference on the Foundations of Digital Games
  (FDG '20), September 15–18, 2020, Bugibba, Malta
- **URL**: https://doi.org/10.1145/3402942.3409605 (free PDF also at
  arXiv:2007.06108)

**Citation**: Guzdial, M., Acharya, D., Kreminski, M., Cook, M., Eladhari,
M., Liapis, A., & Sullivan, A. (2020). Tabletop Roleplaying Games as
Procedural Content Generators. In *Proceedings of the International
Conference on the Foundations of Digital Games (FDG '20)*, September
15–18, 2020, Bugibba, Malta. ACM. https://doi.org/10.1145/3402942.3409605

**Abstract** (p.1, verbatim): Tabletop roleplaying games (TTRPGs) and
procedural content generators can both be understood as systems of rules
for producing content. In this paper, we argue that TTRPG design can
usefully be viewed as procedural content generator design. We present
several case studies linking key concepts from PCG research – including
possibility spaces, expressive range analysis, and generative pipelines –
to key concepts in TTRPG design. We then discuss the implications of these
relationships and suggest directions for future work uniting research in
TTRPGs and PCG.

This is a raw extraction (points + examples), not synthesis — personal
judgment belongs in `notes.md`. Sections below follow the paper's own
order. The PDF's own page numbers (1–9) are the paper's page numbers (no
separate publisher/journal pagination to reconcile, unlike #7's
ludemes.pdf), so page citations below are simply `p.N`. This revision
expands every section to list each distinct point and example
individually, rather than folding several into one summarizing bullet.

---

## 1. INTRODUCTION (pp.1–2)

- p.1: TTRPGs defined as "a type of physical game similar to a board game,
  focused on players acting out particular roles."
- p.1: D&D introduced as "arguably the most famous TTRPG" — an asymmetric
  game where players are either adventurers or the "dungeon master" (DM),
  "a specific role for a player who poses challenges to the adventurers"
  [42]. Explicitly notes massive variety of TTRPGs exists beyond D&D, with
  large variance in what roles players take on.
- p.1: growing game-AI research interest in TTRPGs, broken into four named
  strands: (1) TTRPGs as a challenge for automated game-playing agents
  [39]; (2) a rich space for AI-assisted tools [16, 33]; (3) a space for
  ontological exploration [25]; (4) a recent topic of dedicated AI-focused
  workshops [32, 34].
- p.1: paper's specific focus stated — the overlap between TTRPGs and
  Procedural Content Generation (PCG); central contention: designing a
  TTRPG can be viewed as equivalent to designing a procedural content
  generator.
- p.1: TTRPG-as-generator model spelled out — takes human players +
  authored mechanics as input, outputs play experiences; these
  experiences frequently take the form of narratives. Worked example: a
  single D&D session telling the story of adventurers exploring a
  dungeon — players' in-game choices directly build the story, driven by
  the interests of all players and the mechanics of the game.
- p.1: three framing questions a TTRPG designer confronts, explicitly
  paralleled to PCG design questions (given as a bulleted list in the
  source):
  1. How does the system incorporate random noise (structured random
     values), and what kind of noise does it draw on, to ensure the
     output varies without feeling arbitrary?
  2. How does the system ensure that the mechanics (the
     processes/functions of a PCG system) do not lead to a broken or
     frustrating experience?
  3. How do players seed a generator with pieces of content (e.g., in
     D&D, pieces such as non-player characters, puzzles, and monsters),
     and how can the system be designed to output a space of desired
     experience (e.g., in D&D, a play session *feels* like an adventure)?
- pp.1–2: three explicit, separately-argued reasons TTRPG-as-PCG-design
  framing is valuable to PCG researchers (each given its own bullet in the
  source, reproduced individually here):
  1. TTRPG design is "a type of practical and common example of PCG
     design." This means TTRPG designers can be studied as PCG designers,
     giving an additional vector of study into content-generation design,
     expected to lead to a broader understanding of PCG generally.
  2. Because human players work with analog generation to produce
     stories in TTRPGs, they can be considered parts of analog
     mixed-initiative generators [35]. Valuable because mixed-initiative
     generators with human-and-AI partners are still under-researched;
     researching TTRPGs from this angle is expected to improve
     understanding of mixed-initiative systems broadly.
  3. TTRPGs can be viewed as generative systems composed of several
     distinct components (e.g., fighting mechanics, character creation).
     There is value in looking at these systems through the lens of more
     traditional PCG approaches; these components are expected to create
     rich areas to apply PCG, given a history of analogical generation of
     adventure scenarios dating back to the 1970s [55].
- p.2: roadmap for the rest of the paper — formally define TTRPGs through
  the lens of PCG and present additional connections between general PCG
  concepts and TTRPGs; discuss how current facets of PCG research relate
  to TTRPGs using clarifying examples; discuss how viewing TTRPGs as PCG
  opens additional avenues for future work.

## 2. A TTRPG PRIMER (pp.2–3)

- p.2: TTRPGs framed as "social activities, exercises in imagination,"
  usually played in a shared physical or digital space by a group of
  human players. Each player usually controls a Player Character (PC)
  that collaborates with other PCs toward a joint goal — examples given:
  completing a quest, solving a mystery, surviving.
- p.2: every TTRPG comes with rules/guidelines/mechanics providing a
  framework for creative play; many include dice- or card-based
  constrained randomness affecting the outcome of PCs' actions.
- p.2: typical play loop spelled out explicitly — players engage in "in
  character" conversation (as the PC, during play) and "out of character"
  conversation (as themselves), centered on the game world, followed by
  in-game actions and the game's resolution mechanic (determining success
  or failure).
- p.2: Game Master (GM) role — one participant acts as lead
  storyteller/referee, creating adventures, determining the results of
  adventurers' actions, and narrating what they experience. Explicitly
  noted this role "falls somewhere between player and designer," and is
  "sometimes not even identified as a player." Alternate names given:
  "Dungeon Master," "Storyteller," "Game Master" — paper adopts "GM."
- p.2: in games like D&D, the GM controls all NPCs, carrying out their
  dialog/interactions with PCs or other NPCs — creating an asymmetrical
  experience where players decide among paths the GM has laid out.
- p.2: variance example — *Legacy: Life Among the Ashes* [41]: each player
  controls both a specific PC *and* the "family" of that PC, making
  choices that influence how the family changes across generations
  (contrasted directly with the D&D GM-controls-everything-else default).
- p.2: "GMless"/"GMfull" games named as a distinct class where all players
  share equal agency over the storyworld. Two sub-examples given:
  - *Fiasco* [43] — players control one character only, acting out events
    "as in improv theater."
  - *The Quiet Year* [2] — players act more like a GM or direct
    storyteller, determining the world and actions of many characters
    within it.
- p.2: caveat that games usually don't fall cleanly into either extreme —
  worked example: in *Fiasco*, players not involved in a given scene
  still impact its high-level outcome (success or failure) by voting,
  "thus acting in part as a collective (and rotating) GM."
- p.2: notes the distribution of creative authority among players over
  different parts of the storyworld is "an active area of innovation in
  modern TTRPG design" [1].
- p.2: randomness rationale — given most tabletop RPGs have no digital
  component, RNG is typically included to keep outcomes surprising.
  Direct quote from Costikyan (2013) [12]: randomness "adds drama, it
  breaks symmetry, it provides simulation value, and it can be used to
  foster strategy through statistical analysis." Also cites [12] for the
  claim that tension specifically builds as players pick up physical dice
  and commit to a high-risk action.
- p.2: counterfactual illustration — without any randomness, "one could
  imagine a player who could just say 'I hit it and it dies' to end every
  fight," used to motivate why RNG matters mechanically.
- p.2: dice as the most frequent randomness mechanism, but not the only
  one — *Spindlewheel* [48] uses a custom deck of Tarot-like cards to
  determine whether a player's action succeeds and to what extent; such
  sources of interpreted noise are termed "Oracles" because their output
  must be "interpreted" by participants according to the game's
  mechanics.
- p.2: progression-system note — TTRPGs with leveling systems (also common
  in digital games) bias the relevant probability distributions in the
  player's favor as characters advance.
- pp.2–3: framing move — types of players and how they resolve actions
  are treated as "components of a generator," with players acting as
  agents working in/against the confines of the game world to produce the
  play experience; stated that the rest of the section covers
  player–character and player–player relationships since players are the
  primary drivers of the experience.
- p.2: acknowledges roles of players/GM are fairly clear-cut, but an
  important aspect is the *relationships* that emerge — between players
  in the group, and between players and their characters — since "at the
  core of the RPG experience is that of playing a role."
- pp.2–3: Bowman's (2010) typology [8] — nine categories of relationship
  between a character and the player who created it, based on the
  "sameness" between the player's primary identity and their character.
  Two named examples given explicitly:
  - **Fragmented Self** — augments or twists one normally minor part of a
    player's personality.
  - **Oppositional Self** — embodies behaviors the player may find
    abhorrent in daily life.
- p.3 (carrying from p.2): character concept may originate through
  external inspiration, conversations with the group, or the player
  themselves — but the player's relationship with their PC "evolves over
  the course of the stories told around the table, and based on the other
  players' responses."
- p.3: beyond one's own character, players influence each other's actions
  and emotions "tremendously" during a session; group dynamics flagged as
  important to track.
- p.3: disruptive-player problem — players who choose to be disruptive
  (e.g., causing harm to other players' characters) "can swiftly ruin the
  co-operative effort" of telling a good story, and "are sometimes dealt
  with harshly by a GM" [67].
- p.3: Robin D. Laws's seven player types [30] — two named explicitly:
  - **Power Gamer** — optimizes their character to take the most out of
    the game's rules.
  - **Method Actor** — prefers resolving ethical dilemmas based on their
    character's carefully fleshed-out psychological profile.
- p.3: session-management framing — in a GM-run game, identifying
  players' different priorities and providing each an opportunity to
  shine is "a major aspect of session management."
- p.3: genre/preference layer — on a grander scale, players have
  preferences in genre (modern, horror, science-fiction, fantasy, and
  further sub-categorizations); identifying the group's desired
  genre/themes, intended duration, and limits/sensitivities/taboo themes
  "requires that the group is in constant and honest communication both
  before and during a TTRPG."
- p.3: as players' relationships with characters evolve during play, so
  do the group's dynamics and preferred themes/decision-making styles —
  and these changes affect the type of stories told during play.
- p.3: one-shots vs. campaigns distinction. In campaigns, the same group
  meets regularly, the GM guides players through a longer adventure, and
  players progress the same characters over time. Pre-written adventures
  are called "modules," especially popular among D&D players; contrasted
  with players inventing their own worlds/characters/adventures
  week-to-week.
- p.3: closing forward-looking claim — the authors "expect that modules
  for a TTRPG would be an excellent generation challenge for PCG
  researchers," who would have to balance generating a branching
  narrative with appropriate combat and puzzles for that narrative.

## 3. TTRPGS UNDER A PCG LENS (p.3)

- p.3: core framing — TTRPGs viewed as "hugely complex procedural content
  generators, systems composed of many moving parts and sub-generators."
  Three named components: (1) the players, bringing individual interests,
  personalities, and storytelling predispositions; (2) everything
  previously established in the game world (prior sessions, or
  pre-authored in a module); (3) the particular mechanics of the game.
  Together these create "a near unlimited but biased space of possible
  output stories."
- p.3: "each component matters" — worked contrast: absent the players,
  D&D's mechanics alone suggest a high-fantasy story like *The Lord of the
  Rings* [64] or *Game of Thrones* [38]; but players impact the system
  too, so some run D&D in science-fiction, mystery, or superhero
  settings, adapting the mechanics to their own interests.
- p.3: explicit scope limitation — the authors state they "lack the space
  and expertise to more formally break down the ways in which player
  psychology impacts the generation process," and so focus on the other
  system elements for the rest of the paper.
- p.3: output-based generator taxonomy cited — Hendrikx et al.'s Game
  Bits / Game Space / Game Scenarios framework for grouping content
  generators by their outputs [22]; TTRPGs are framed within this as
  generators that "typically output a story."
- p.3: terminology adopted from Genette (1983) [19] for the rest of the
  paper, given as three explicit definitions:
  - **Story** — a temporal sequence of events.
  - **Narrative** — a story the way it is told.
  - **Narration** — how to tell a story, i.e., the art of storytelling.
- p.3: acknowledges the design space of TTRPGs is one of "narrative
  potential" [29], but immediately qualifies that TTRPGs do not always,
  or do not exclusively, produce stories. Three graded examples given:
  - *The Quiet Year* [2] — outputs both the history of a small town over
    a year *and* a physical map of that town.
  - *Oh No Bro, You Thought Too Hard About The Bangers And You Fell Into
    The Banger Singularity* [17] — produces a playlist, "explicitly no
    narrative."
  - **Lyric Games** [21] — a class of TTRPGs drawing on poetry/essay
    forms to produce games "which are only meant to be read"; the
    reading process itself becomes the form of play, an exercise of
    imagining what playing them would be like, with the reading
    experience as the only output.
- p.3: explicit scoping decision — "for scope and complexity reasons," the
  paper primarily focuses on TTRPGs that output stories, i.e., TTRPGs
  considered as story generators [28].
- p.3: aside on games-in-general — the "games output stories" framing may
  apply more broadly than TTRPGs. Three cross-media examples given:
  - Chess games retold as poetic stories, e.g. "To The Lady That Scorned
    Her Lover" by Henry Howard [68].
  - A recent TTRPG producing stories via a game of chess — Takuma Okada's
    *Chess: Two Kingdoms* [44].
  - Modern chess-like video games, e.g. *Fire Emblem* (Nintendo, 1990),
    that lead to player stories and inspire fanfiction [71].
  Paper explicitly narrows back to TTRPGs "for reasons of scope."

**3.1 TTRPG Mechanics as PCG Approaches** (pp.3–4)

- p.3: framing — different PCG approaches produce different outputs;
  despite the complexity of a TTRPG-as-story-generator (given the
  inherent complexity of an arbitrary group of human players), different
  design-time decisions bias the kinds of stories the game tends to
  output. Section focuses specifically on designed mechanics as
  representations of distinct PCG approaches.
- p.3: "Flavors of Noise" concept from PCG [51] — what kind of random
  noise is used as a generator's basis (examples given from PCG:
  *Perlin*, *Simplex* noise). Same concept said to appear "most
  frequently in games with dice mechanics" [12].
- p.3: D&D d20 example — most actions resolved by rolling a 20-sided die,
  meaning any player has an *equal* chance of a critical fail (rolling a
  1) and a critical success (rolling a 20) — i.e., a flat/uniform noise
  distribution.
- p.4: contrasting example — the Powered by the Apocalypse (PbtA) system
  resolves most actions by rolling two 6-sided dice, with an explicit
  three-tier resolution: 6-or-less = failure; 7–9 = partial success (or
  success at some cost); 10-or-more = complete success. Because the
  probability distribution of 2d6 is centered on 7, the *most common*
  result is a bare partial success. Explicitly tied to design intent: this
  fits the original PbtA game *Apocalypse World* [6], "in which players
  played survivors just barely getting by in a post-apocalyptic
  wasteland."
- p.4: grammar-based generation — cited as "one of the most common
  methods for story generation within PCG research and practice" [28].
  Mapped onto the **Belonging Outside Belonging (BOB)** TTRPG system [3],
  which drops dice/explicit randomness entirely and instead uses "weak,"
  "regular," and "strong" PC moves functioning like grammar rules:
  - A **weak move** can be used at any time; it produces a problem in the
    narrative and gives the player a token.
  - A **strong move** requires the player to already hold a token
    (precondition) and produces a solution to a problem.
  - These two move types "play off one another," chaining like grammar
    rules applied in sequence to produce a story.
- p.4: worked example — in *Dream Askew* [3], the PC class "The Iris" has
  weak move "Draw unwanted attention to your movements" and strong move
  "Get out of harm's way." A player playing The Iris can use the weak
  move to create trouble, then resolve it with the strong move once a
  token is earned. Explicit closing analogy: "Just as a grammar for
  natural language generation strings together words or sentences based
  on rules, the BOB system strings together player actions to produce
  narrative."

## 4. RELEVANT TTRPG FACETS FOR PCG RESEARCH (p.4, framing paragraph)

- p.4: having argued TTRPGs are complex PCG systems (Section 3), this
  section identifies a number of open PCG research areas and maps each to
  TTRPGs, "in order to make the argument about the value of TTRPGs to PCG
  research." Explicitly notes two different kinds of facet appear: some
  represent a genuinely novel vector for PCG research; others represent
  how one might *study existing* PCG research topics using TTRPGs as the
  domain.

**4.1 Possibility Space and Safety Tools** (pp.4–5)

- p.4: possibility/generative space defined as "the theoretical space of
  all possible output of a generator." Being able to impact this space —
  the "controllability" problem — named as "a core research problem for
  PCG" [53, 70]; cites Danesh [11] as a recent approach seeking to
  empower PCG users to more directly alter this space.
- p.4: TTRPGs shape the possibility space of play through "specific
  practices, designs, and mechanics"; this shaping "can help to provide
  boundaries for the world, limiting what can occur during play." Two
  timing modes distinguished: boundaries shaped ahead of time through
  choice of mechanics (already covered in 3.1), and boundaries shaped
  *during* play by integrating setting-specific limitations into the game
  mechanics.
- p.4: **Microscope's "palette" mechanic** [49], described in detail as
  the worked example of during-play boundary-shaping: during setup,
  players define a "palette" of things they do and do not want to see
  during play. The palette has two columns — "Yes" and "No" — into which
  players add "ingredients" that will (or will not) belong in the created
  history. Each player may add one ingredient per round; rounds continue
  until one passes with no additions. The "Yes" column is reserved for
  elements players would like to see that might be *unexpected* given the
  setting but that the table agrees can show up. The "No" column is used
  for elements that might be *expected* given the setting but that
  players want banned — these will not be brought up in the history
  generation at all, whether from disinterest in the topic or a negative/
  traumatic association with it.
- pp.4–5: "safety tools" named as the general term for this style of
  player-driven boundary-setting across the possibility space of a
  session. Distinguishes *system-specific* tools (like Microscope's
  palette, above) from *system-agnostic* tools, i.e., general rules
  agreed on by players regardless of which game is being played. Named
  system-agnostic examples:
  - "Session 0" — GMs holding a pregame session for players to establish
    agreements for the course of the game.
  - **Lines and veils**, developed by Ron Edwards [15] — a way for
    players to individually set personal limits. *Lines* = defined hard
    limits, "things that will not occur at all in the events of the
    game." *Veils* = a way of still allowing certain themes without
    foregrounding them — "a fade-to-black moment or actions that might
    still occur in the background." Worked example given: a scene
    between two romantically involved characters fading to black before
    any explicit content.
- p.5: **the X-Card**, created by John Stavropoulos [57] — a card with a
  large "X" placed at the center of the table during play (not
  pre-play, unlike lines/veils/session 0). Mechanism: if any player is
  uncomfortable, or wants to shift the direction of the story mid-play,
  they can tap or raise the X-Card and *all* players drop the current
  storytelling thread.
- p.5: explicit caveat — these safety-tool approaches "are not
  fool-proof," and are "only part of shaping a culture of safety at a
  table." Reasoning given: the *interplay* of players and mechanics in a
  TTRPG can surface topics that "no one individually could have
  anticipated coming up" — framed by the authors as a consequence of the
  complexity of a TTRPG understood as a story generator.
- p.5: parallel drawn to PCG's declarative constraint-based approaches —
  specifically answer set programming (ASP), which provides explicit
  tools for excluding undesirable outcomes from the possibility space.
  ASP's "integrity constraints" [54] describe properties a user does
  *not* want generated artifacts to have, and prevent artifacts with
  those properties from being generated. Cited application: the ASP-based
  abstract game generator **Gemini** [59], which lets a user supply a
  "design intent" containing integrity constraints that block off
  undesirable parts of Gemini's full possibility space.
- p.5: important qualifier — the authors note that *generally* only the
  developers/designers of a PCG generator have access to shape its output
  this way; it is "unusual to allow for such direct shaping of a
  generator's output after development/during use." Named exception:
  **Horswill's Imaginarium tool** [25], which applies declarative
  constraint-based PCG to generate TTRPG-encounter entities (monsters,
  NPCs, treasure items), letting the *end user* specify constraints that
  explicitly forbid outputs with undesirable properties.

**4.2 Expressive Range** (pp.5–6)

- p.5: expressive range defined as originally proposed by Smith and
  Whitehead [56], as "a means of visualizing the possibility space of a
  generator." Noted to have seen substantial PCG research interest both
  as an evaluation tool [58] and a design tool [11].
- p.5: authors argue expressive range can be researched in TTRPGs too,
  and demonstrate this via two concrete examples.
- p.5: **Example 1 — James Malloy / *A Space Between*** (detailed via the
  TTRPG design podcast *Stop, Hack, and Roll* [37]). Game description: a
  two-player game in which each player draws a number of cards each turn
  to simulate the lives of a space trucker and someone important to them
  on Earth. Malloy's process: tagged each card with a specific emotion he
  intended it to invoke, then laid out cards according to emotion —
  effectively visualizing his game's possibility space. This let him
  alter existing cards and author additional ones, changing the generator
  to better fit his design intent. Authors frame this specific
  tag-then-visualize iteration technique as "an open area for expressive
  range research."
- p.5: **Example 2 — Matthew Guzdial / *That's Me TV*** [20], described
  as a "more direct" application of expressive range, given Guzdial's own
  PCG background. Game description: players gather two resources
  (audience and profit) taking turns roleplaying as the audience and
  producers of a children's TV show; players take one of a specific set
  of actions per role and roll dice to determine effects. Method:
  Guzdial simulated out possible end-states of the game and visualized
  them as a scatterplot (**Figure 1**, p.5 — an audience-vs-profit plot;
  red circles = "bad" endings, black circles = "good" endings). He then
  used this visualization to tweak the game's mechanics until its
  expressive range matched his design intention. Authors' framing: this
  is "a much more typical application of expressive range as a design
  tool," but represents "a novel application domain for the approach"
  (i.e., a TTRPG rather than a digital generator).

**4.3 The Fruitful Void** (pp.5–6)

- p.5: term "fruitful void," attributed to Vincent Baker [7], defined as
  "a central theme that is deliberately left unsystematized, but toward
  which all of the game systems are designed to guide a player's thought
  and action." **Figure 2** (p.5) is a fruitful-void diagram of the
  tabletop game *Dogs in the Vineyard*, showing named mechanics —
  Escalation, Dice, Stakes, What's Wrong, Fallout, Raising & Seeing —
  arranged as arrows orbiting an unsystematized central point, "to keep
  play 'in orbit' around" that theme; figure is explicitly based on a
  figure from [7].
- p.5: worked example — *My Life with Master* [14]: the game's primary
  theme, "defiance," is never systematized directly and is left to player
  interpretation. Instead, systematic mechanics ("fear," "weariness,"
  "self-loathing") are carefully chosen to guide player thoughts *toward*
  defiance "without foreclosing player interpretation."
- p.5: stated rationale/benefit, discussed among TTRPG designers — players
  tend to care most about story elements "they had a hand in inventing or
  shaping," so a game's central themes "tend to come across most
  strongly when players arrive at an interpretation of these themes for
  themselves based on play" (rather than being told the theme outright).
- p.5: explicit parallel to PCG — this echoes PCG findings that generated
  artifacts need a simultaneous balance of (a) ambiguity/room for human
  interpretation and (b) guidance so the artifact remains interpretable
  at all.
- pp.5–6: **Tableau Machine** [47] — a system generating visual art based
  on the real-time activities of a household's residents. A *correctly*
  installed version produced "intriguingly ambiguous artworks that
  prompted reflection and extrapolation about the agent's 'state of
  mind'" among users. An *incorrectly* installed version — generating
  random artworks without incorporating real household data — failed to
  prompt this reflection. Authors read this pairing as simultaneously
  demonstrating "the power of 'ambiguity as a resource'" [18] *and* "the
  need for systematic guidance of generative systems that produce
  ambiguous artifacts" — i.e., ambiguity alone (divorced from real
  grounding/systematic guidance) is not sufficient.
- p.6: a study of player storytelling around simulation-driven digital
  games [27] found player stories are often driven by "extrapolative
  narrativization" — players elaborating on concrete, system-modeled
  scenario elements by adding their own interpretations. That same study
  found the generative game **Prom Week** [40] successfully supports this
  kind of storytelling — but *not* when its underlying social simulation
  was altered to produce random outcomes instead of systematic ones
  (directly parallels the Tableau Machine finding above: randomness alone
  ≠ productive ambiguity).
- p.6: Kate Compton, cited via a footnoted tweet, describes one genre of
  successful Twitter bots as generating "imagination playgrounds" —
  "strategically ambiguous scenarios with room deliberately left for
  human interpretation of the ambiguous elements."
- p.6: authors' synthesis of this subsection — these examples suggest PCG
  designers "might benefit from embracing the fruitful void and seeking
  to produce and present generated artifacts in such a way that
  encourages a human 'filling in the blanks.'"

**4.4 PCG Pipelines in TTRPGs** (pp.6–7)

- p.6: PCG pipelines defined as approaches that tie together several
  different generators [36] "such that the whole system is able to
  produce output that no one generator could individually." Said to
  appear regularly in PCG research, "especially in PCGML systems" [61],
  giving two named sub-patterns: an ML-based generator's output parsed by
  a rule-based generator [60]; or an ML generator's learned space
  explored by a search-based generator [65].
- p.6: TTRPG parallel stated directly — in some campaigns, one system
  generates worlds/histories while a separate system is used to actually
  play in that generated world.
- p.6: **Microscope** [49] — players collaboratively generate a history
  with different time periods, events, and scenes; the resulting
  generated history becomes the setting for a later campaign.
- p.6: **The Quiet Year** [2] — "can also be used in a similar fashion" to
  Microscope. Concrete cited case: the podcast *Friends at the Table*
  used *The Quiet Year* to generate a city called "Marielda," which they
  then used as the setting for a game of *Blades in the Dark* [66] — an
  explicit real-world example of one TTRPG's output piping into another
  TTRPG's play.
- pp.6–7: **Engine of Ages** — a collaborative history generator for the
  game system *13th Age*, found in *The Book of Ages* supplement [50].
  Mechanism: players generate the history of the world across twelve
  prior "ages" before the actual campaign begins, by defining factions
  and how their relationships change over time, plus high and low points
  in each faction's history. Generated elements are determined by die
  rolls that decide which age, and what kind of fact, is being added.
  This process *also* determines legends, legacies, and lairs the players
  can later encounter during the campaign — explicitly noted as "more
  closely" tying this world-generator game to the main campaign than the
  Microscope/Quiet-Year examples above (i.e., a tighter pipeline
  coupling).
- p.7: **Character creation as a pipeline stage** — many TTRPGs use
  generators in character creation. D&D 5th Edition [42] suggests dice
  rolls to decide personality traits/quirks, aspects of personal history,
  and starting trinkets. *Cyberpunk 2020* [46] uses a branching tree of
  lookup tables (branching on earlier dice rolls) to build a character's
  background and history, plus a separate series of tables repeatedly
  rolled against to construct a year-by-year backstory. Authors' framing:
  lookup tables are "a useful structure for player-centric generativity"
  because they're easy for players to operate but can still encode
  complex distributions via branching techniques like Cyberpunk 2020's.
- p.7: **Encounter/obstacle generation as another pipeline application** —
  simplest form is a pre-authored X·Y table where each cell describes an
  encounter or obstacle. Noted as especially popular in the "Old School
  Revival" TTRPG design tradition, "to the point where there exists a
  collection of examples playing with this form called *The Strategic
  Review*" [52]. More complex named example: the *Mouse Guard RPG* [13]
  (players as a band of heroic mice) — its rulebook recommends building
  encounters from a combination of threats across four categories
  (weather, wilderness, animals, or other mice), specifically
  recommending picking two hazards to use and keeping two more in reserve
  "in case of a needed additional twist or challenge."
- p.7: closing observation on why pipelines are under-researched in PCG
  despite being common — the authors suggest one reason may be that
  getting different *digital* PCG generators to interoperate is
  difficult [36], since they likely use different programming languages,
  representations, and codebases. TTRPGs are framed as "a domain for
  pipeline research without these challenges, and with many recorded
  examples to serve as touchstones."

**4.5 Digital Mixed-Initiative Agents** (pp.6–7)

- p.6: recap/framing — as covered in 4.4, many TTRPG systems are built
  from smaller generators (name generators, map generators, loot/treasure
  generators, character generators, etc.), some of which "have been
  reproduced or augmented with digital tools." These digital tools are
  described as "equivalent to a more traditional mixed-initiative PCG
  system" — i.e., co-creative design, where a human designer works
  alongside a digital PCG tool [35]. Authors state they expect "a great
  deal more work to be done in this space" beyond the examples given.
- pp.6–7: **Invisible Sun** [10] — a TTRPG normally played in person around
  a table, with numerous physical components (books, card decks, boards,
  maps, dice, etc.). To address the common problem of getting all players
  physically together, its developers created a companion mobile
  application enabling "side scenes" for individuals or small groups of
  characters away from the table — even without the GM present. The app
  facilitates communication and gives access to decks used for character
  development play. Generative role, specifically: a player may draw a
  random card from a deck within the app to help guide a scene. Authors'
  assessment: the app "is only providing a digital version of the
  physical components that are used for storytelling generation" — i.e.,
  a fairly shallow generative role, mostly digitizing an existing physical
  mechanic.
- p.7: **Weave** [9] — contrasted directly with Invisible Sun: Weave
  *requires* its mobile app to play at all, so "the mobile application
  plays a much larger role in story generation." Its only physical
  components are dice and two decks of tarot-like cards with abstracted,
  symbolic imagery/themes. Mechanism: the storyteller picks a "playset"
  in the app, which bounds the generative space; playsets are described
  as similar to campaign settings, but — unlike D&D campaign books —
  playsets "do not contain a general story structure." Cards are scanned
  by the app, which interprets each card based on the chosen playset and
  the role the card is playing in the moment. Worked example given in
  detail: drawing the "Gatekeeper" theme card produces a different
  concrete meaning depending on playset — in *Goblins 'R Jerks* (players
  are goblins), it means "the goblins have run out of things to loot, and
  must find new ways to survive"; in *Gloomies* (a 1980s-cartoon-themed
  playset), it means "a best friend of one of the players has gone
  missing and it is up to the party to find out what's going on." Same
  card, playset-conditioned interpretation — a much deeper generative
  role for the digital layer than Invisible Sun's.
- p.7: **Spindlewheel** [48] (first introduced on p.2 as an Oracle-based
  tarot-card system) — has an associated Twitter bot that lets anyone
  query for a certain number of cards, usable to play a Spindlewheel game
  remotely/solo. Explicitly noted that *all* official Spindlewheel games
  can still be played without the bot, using physical cards in a shared
  space — the bot is optional infrastructure, not a requirement. Named
  exception: the micro-game *How To Build A Place You Love* [45] (a
  "tiny, tweet-sized game") is specifically designed to be played via this
  bot.
- p.7: authors' closing synthesis for the subsection — anticipate these
  kinds of digital companion tools "may be a natural way for PCG
  researchers to interface with TTRPGs." Specifically note that, as in
  the Invisible Sun and Spindlewheel examples, "there's no need to design
  a new game from scratch to integrate digital PCG" — i.e., digital PCG
  can be *added onto* an existing, already-popular TTRPG. Conclude that
  developing such a companion application for a particular TTRPG "could
  allow for a broad range of PCG research."

## 5. DISCUSSION (p.7)

- p.7: summarizing statement — the preceding sections showed "a variety of
  examples" of how generative-systems-design concepts appear in, or have
  been applied to, TTRPGs, and vice versa. Explicitly claims the broader
  history of tabletop roleplaying has "many innovative applications" of
  these ideas beyond what the paper covered, and that this space has
  "largely been under-explored by digital PCG researchers."
- p.7: identified throughlines across all the case studies — "a clear
  theme... is one of working within constraints." Historical
  reasoning given: for most of TTRPG design history, it wasn't possible
  to assume every player had a portable computing device — digital
  assistance is only recently emerging (cross-references Section 4.5).
  Consequence: classic tabletop generative approaches use only what's
  "readily available at the table" — objects like dice and coins. This
  both *restricts* the kinds of generative systems that can be built, and
  has *driven innovation* toward unpredictable-but-simple-to-use systems.
- p.7: on digital augmentation specifically — framed as "exciting" for
  broadening opportunities for researchers/designers, but immediately
  qualified: digital augmentation "is not always available to all
  players," and some players simply prefer physical objects and
  non-digital processes. Explicit recommendation: future research
  integrating digital PCG should consider "both digital and physical
  innovation, or hybrid ways to retain a sense of presence in the physical
  space while benefiting from the support of digital tools."
- p.7: closing observation — the breadth/variety of generative techniques
  shown, "just a handful of examples that stretch across decades, from
  niche games to large franchises," is offered as evidence of how
  "enduring and popular" generative systems are in TTRPGs, and how much
  exploratory design work already exists to draw on. Ends by asserting
  "many exciting possibilities for future work" that should benefit both
  TTRPG design and digital PCG.

## 6. FUTURE WORK (pp.7–8)

- p.7: stated purpose of section — "initial thoughts on potential areas of
  explicitly PCG research in the domain of TTRPGs," beyond what's already
  been discussed in the paper.
- p.7: **Direction 1 — replace generative TTRPG components with digital
  PCG components.** Example given: PCG applied to aid GM preparation
  before or during a session. Notes one such example *already exists*:
  Horswill's **FIASCOMATIC** [24], which generates playsets for the game
  *Fiasco* — but the authors "expect that significantly more research
  could be conducted in this area." Additional claim: TTRPGs could be "a
  particularly challenging domain for standard PCG approaches" because
  they combine story generation *and* functional "playability"
  constraints simultaneously.
- p.7: **Direction 2 — player modeling transplanted to TTRPGs.** Player
  modeling defined as "an attempt to automatically understand the players
  of a digital game" [69], often paired with adaptive PCG methods [70]
  such as dynamic difficulty adjustment [26]. Proposed TTRPG-equivalent
  research: attempting to produce or tweak content on the fly to better
  serve TTRPG players — named examples of what this could target:
  ensuring new encounters remain surprising, and incorporating the
  specific histories of the PCs. Explicit design requirement stated:
  "such generators should be able to identify and cater to individual
  tastes and preferences *within* the group" — e.g., by developing
  archetypal personas [23] of player types such as "the 'power gamer'"
  (directly echoing Robin Laws's typology from Section 2).
- p.8: **Direction 3 — broaden beyond grammar-based generative
  techniques.** Observation: most traditional TTRPG generative approaches
  "are grammars or grammar-like in structure" (example given: rolling
  against lookup tables), whereas PCG more broadly spans a spectrum
  usually partitioned into search-based and constraint-based generative
  techniques [63]. Authors explain *why* grammars dominate physically:
  they're well-suited to physical systems because they "usually produce
  discrete outputs, are built out of similarly discrete components, use
  simple probabilities and rely on little computation." Speculative
  design idea offered as an example of what applying other PCG methods
  might look like: "a TTRPG could be produced in which the entire story
  was initially purely randomly generated, and then players acted as the
  search operators over a space of stories, tweaking the initial story to
  fit their own internal heuristics." Notes that while state-of-the-art
  PCG algorithms have already targeted dungeon generation specifically
  [4, 5, 31], "there is relatively little research on the story-making
  aspect of TTRPGs" — i.e., a gap between content-generation research
  (dungeons/levels) and narrative-generation research (the story itself).
- p.8: **Direction 4 — the TTRPG data-availability problem.** Framed via
  a general digital-games-research problem: data availability, whether
  for statistical/model-training purposes or for manual analysis,
  criticism, and comparison. Cites the *Video Game Level Corpus* [62] as
  an example of a useful shared corpus that "can help attract new
  researchers to an area," ease comparison between different work via
  shared baselines, and pool effort otherwise spent tracking down hard-to
  -find data. Explicit claim that TTRPG data is "perhaps even harder to
  come by" than digital-game data: player traces for digital games can be
  captured automatically (even remotely) and parsed into standard
  formats, whereas TTRPG session transcripts are "very time-consuming and
  expensive to record" and carry "many more ethical issues" around
  acquisition and anonymization (implicitly: recording real people's
  voices/conversations vs. logging keystrokes). Conclusion: a shared
  TTRPG-data corpus "would therefore be of even greater value than its
  digital counterpart," and the authors believe establishing one "will be
  important in stimulating research in the area."

## 7. CONCLUSIONS (p.8)

- p.8: restates the paper's central thesis — viewing TTRPG design as a
  form of PCG design "holds great potential."
- p.8: summarizes the paper's three stated contributions in order: (1)
  introduced TTRPGs "for a PCG audience"; (2) demonstrated how TTRPGs can
  be viewed under a PCG lens; (3) identified relevant areas of PCG
  research *within* TTRPGs.
- p.8: closing belief statement — PCG research into TTRPGs "will allow
  for a broader understanding of PCG approaches, techniques, and
  concepts" generally (i.e., the benefit is framed as flowing back to PCG
  as a field, not only to TTRPG design).

## ACKNOWLEDGMENTS (p.8)

Michael Cook's funding acknowledged (Royal Academy of Engineering Research
Fellowship). No content relevant to course design.

## REFERENCES (pp.8–9)

71-item bibliography. Full reference list not transcribed here — every
citation actually discussed in the paper's body has already been captured
inline, in the section above where the paper cites it, with the bracketed
number preserved (e.g. [8], [30], [12], [7], [15], [47], [27], [49], [2],
[50], [42], [46], [13], [10], [9], [48], [24], [69], [70], [63], [62],
etc.) so the specific claim each citation supports stays traceable back to
its numbered reference without needing the full list reproduced separately.
