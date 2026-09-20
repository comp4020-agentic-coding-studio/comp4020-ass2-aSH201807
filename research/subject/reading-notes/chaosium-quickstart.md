# Reading notes — Source #1

## Source

- **Title**: Call of Cthulhu, 7th Edition Quick-Start Rules
- **Author(s)**: Sandy Petersen, Paul Fricker, Mike Mason, Lynn Willis
- **Date**: August 2013
- **Type**: official free rulebook/quick-start booklet, published by a game
  company — includes a complete pre-written scenario ("The Haunting") and,
  at the end, a serialized actual-play retelling of that same scenario from
  a Chaosium Kickstarter campaign
- **Venue**: Chaosium Inc. (publication #23131, ISBN 978-1-56882-388-1)
- **URL**: https://chaosium.itch.io/call-of-cthulhu-quickstart-rules

**Citation**: Petersen, S., Fricker, P., Mason, M., & Willis, L. (2013).
*Call of Cthulhu, 7th Edition Quick-Start Rules*. Chaosium Inc.

**Abstract/summary**: The source has no abstract — this is my one-paragraph
summary: a 41-page free intro booklet covering (1) what CoC is and how a
session runs, (2) character creation, (3) the core d100 skill/Sanity/combat
system, (4) a full ready-to-run scenario, "The Haunting," about a haunted
Boston rowhouse, presented as a location-by-location Keeper's guide with
embedded "Keeper's Notes" teaching GM technique inline, and (5) a narrated
actual-play retelling of that same scenario showing how one real playthrough
diverged from the script.

Raw extraction, not synthesis. Locator = the booklet's own printed page
numbers (pp.X–Y), which match the PDF content (confirmed via `pdftotext`).
Full tier applied uniformly throughout — every distinct point and concrete
example gets its own bullet, including the character-creation and core
rules sections.

---

## 1. Credits & Welcome (pp.2–3)

- Standard credits page; 7th-edition authors listed as Petersen/Mason/Fricker/Willis.
- "Welcome" page pitches CoC as Chaosium's flagship Lovecraftian-horror RPG, in print 30+ years.

## 2. Introduction (p.4)

- States plainly that this booklet trims content from the full Keeper Rulebook "for the sake of brevity."
- Sidebar "Never Played a Roleplaying Game Before?" walks through a fictional example session (John's group, ~7pm–11pm): character creation → Keeper describes an opening scene (a "haunted" property job offer) → players narrate/roleplay → dice resolve dramatic conflicts → session ends, hooks for next week. Used as a model of the whole play loop before any rules are given.

## 3. Overview of the Game (p.5)

- Keeper = GM/director analogy ("like a director making a film in which the actors don't know how the story will develop"); players = "investigators," improvise like actors.
- Play framed as cooperative, not competitive: shared goal of uncovering/foiling a plot; losing = failing the goal (not necessarily character death).
- What you need to play: booklet, roleplaying dice (D4/D6/D8/D20/D100), paper, pencils, 2+ people, a quiet space, 3–4 hours.

## 4. Creating an Investigator (pp.6–11)

### 4.1 The eight characteristics (p.6)
- Strength (STR): raw physical power.
- Constitution (CON): health and hardiness.
- Power (POW): force of will, spirit, mental stability.
- Dexterity (DEX): physical agility and speed.
- Appearance (APP): charm and physical appeal.
- Size (SIZ): combined height and weight.
- Intelligence (INT): cunning, ability to make leaps of logic/intuition.
- Education (EDU): knowledge accumulated through formal education or "the School of Hard Knocks."
- Point array to allocate freely among the eight: 40, 50, 50, 50, 60, 60, 70, 80.

### 4.2 Half and fifth values (pp.6–8)
- Halve each characteristic (round down) to get its "half" value.
- Divide each characteristic by 5 (round down) to get its "fifth" value.
- Record all three together on the sheet, e.g. STR 60 (30/12).

### 4.3 Roleplaying dice sidebar (p.6)
- Required dice set: D100 (percentage), D4, D6, D8, D20.
- Notation convention: the number before "D" is how many dice to roll and sum (e.g. 2D6 = roll two six-siders, add them).
- A trailing "+N" adds a flat modifier after summing the dice (e.g. 1D6+1 ranges 2–7).
- Multi-term damage notation (e.g. 1D6+1+2D4) means: roll every listed die, sum all results, add any flat modifier.
- D100 reading: two D10s rolled together, one read as "tens," one as "units"; e.g. tens=30 + units=05 reads as 35%.
- A roll of tens=00 + units=0 reads as 100%.
- A roll of tens=00 + any nonzero units reads as under 10% (e.g. tens=00, units=3 → 3%).

### 4.4 Secondary attributes (pp.8–9)
- **Luck**: 3D6×5, rolled once at creation; used to test whether external circumstances favor or hinder the investigator.
  - p.8: worked example — Brian rolls under his Luck score to find keys already in a car's ignition while fleeing zombies.
- **Magic Points (MP)**: equal to POW÷5; spent on casting spells/powering arcane devices/effects; regenerate at 1 point/hour; once MP is exhausted, further magical expenditure is drawn directly from hit points, manifesting as Keeper-chosen physical damage.
- **Damage Bonus and Build**: STR+SIZ looked up on a table to yield both a damage bonus applied to melee attacks and a Build rating.
  - p.8: Damage Bonus/Build table — 2–64: −2 dmg/Build −2; 65–84: −1 dmg/Build −1; 85–124: no dmg bonus/Build 0; 125–164: +1D4 dmg/Build +1; 165–204: +1D6 dmg/Build +2.
  - p.8: worked example — Brian's STR 60 + SIZ 70 = 130, giving Damage Bonus +1D4 and Build +1.
- **Hit Points (HP)**: (SIZ+CON)÷10, rounded down; HP drops as damage is taken.
- **Sanity (SAN)**: starting value equals POW; used as a percentile roll representing composure in the face of horror; fluctuates as Mythos encounters occur.

### 4.5 Occupation and skills (pp.9–10)
- Player first conceives an occupation for the investigator; occupation determines skill selection; any concept is valid if agreed with the Keeper (favorites named: Professor, Journalist, Occultist, Archeologist).
- Two paths offered: pick a listed sample occupation and use its fixed skill list, or freely choose 8 skills appropriate to a custom occupation.
- Eight sample occupations and their fixed skill lists are given in full:
  - Antiquarian — Appraise, Art/Craft (any), History, Library Use, Other Language, one interpersonal skill (Charm/Fast Talk/Intimidate/Persuade), Spot Hidden, one other skill.
  - Author — Art (Literature), History, Library Use, Natural World or Occult, Other Language, Own Language, Psychology, one other skill.
  - Dilettante — Art/Craft (any), Firearms, Other Language, Ride, one interpersonal skill, three other skills.
  - Doctor of Medicine — First Aid, Other Language (Latin), Medicine, Psychology, Science (Biology), Science (Pharmacy), two other academic/personal-specialty skills (worked example given: a psychiatrist might pick Psychoanalysis).
  - Journalist — Art/Craft (Photography), History, Library Use, Own Language, one interpersonal skill, Psychology, two other skills.
  - Police Detective — Art/Craft (Acting) or Disguise, Firearms, Law, Listen, one interpersonal skill, Psychology, Spot Hidden, one other skill.
  - Private Investigator — Art/Craft (Photography), Disguise, Law, Library Use, one interpersonal skill, Psychology, Spot Hidden, one other skill (examples given: Computer Use, Locksmith, Firearms).
  - Professor — Library Use, Other Language, Own Language, Psychology, four other academic/personal-specialty skills.
- Cthulhu Mythos skill cannot receive points during character creation — text states this is because all beginning investigators are assumed ignorant of the Mythos threat.
- Occupation Skill point array (assign among the 8 occupation skills + Credit Rating): one skill at 70%, two at 60%, three at 50%, three at 40% — overriding the skill's printed base value.
- After Occupation Skills, pick 4 Personal Interest skills (non-occupation) and add +20% to each's base value.
- Recommends recording skills in the same full/half/fifth format as characteristics.
- p.10: worked example — Brian (soldier) picks Climb, Dodge, Fighting, Firearms, Stealth, First Aid, Survival, Other Language as occupation skills, sets them per the array (Climb 60/Credit Rating 40/Dodge 60/Fighting 70/Firearms 50/First Aid 40/Other Language 50 [Spanish]/Stealth 50/Survival 40), then boosts four hobby skills by +20% (Drive Auto 40, Jump 40, Mechanical Repair 30, Spot Hidden 45), recorded as full (half/fifth) e.g. "Spot Hidden: 45 (22/9)."

### 4.6 Credit Rating (p.10)
- CR 0: penniless, living on the streets.
- CR 1–9: poor, bare minimum.
- CR 10–49: average, reasonable comfort.
- CR 50–89: wealthy, some luxury.
- CR 90–98: rich, great wealth/luxury.
- CR 99: super rich, money no object.
- p.10: worked example — Brian's CR 40 = "average income."

### 4.7 Backstory (p.10)
- Each backstory entry should be short and "pithy"; 2–3 entries is enough, not every field needs filling.
- Two example entries given verbatim: "Born and raised in Arkham," "Never without my trusty pistol," "Science can explain everything."

### 4.8 Final touches (p.10)
- Checklist reminder: confirm name, sex, age, and all remaining fields are filled in before play.

## 5. Game System (pp.11–18)

### 5.1 When a skill roll applies (p.11)
- Skill rolls are for dramatic situations, not routine ones — explicit contrast given: walking down a well-lit hallway (no roll) vs. running down a rubble-strewn corridor while chased by monsters (roll).
- Player and Keeper agree a goal before rolling; success on the roll achieves that goal.
- A successful roll checks a box next to that skill on the sheet (one check max per skill between improvement rolls).
- End-of-scenario skill improvement: roll percentage dice against each checked skill; rolling *over* the skill's current value grants +1D10 to that skill. Text draws out the implication explicitly: "the more you know about something, the harder it is to learn anything new."
  - p.11: worked example — Brian's checked Spot Hidden (45%) rolls 43 post-scenario (no improvement, since he needed to roll *over* 45); a roll of 73 would have granted +1D10.
- If no listed skill fits a test, use the most relevant characteristic in its place.

### 5.2 Difficulty levels and Pushing (pp.11–12)
- Regular success: roll ≤ full skill value.
- Hard success: roll ≤ half skill value.
- Extreme success: roll ≤ one-fifth skill value.
- Fail < Regular < Hard < Extreme, from worst to best.
- Pushing: after a failed roll, if the player can justify it through in-fiction action, they may reroll once — but a second failure lets the Keeper impose a "dire consequence."
- p.11–12: worked example — prying open a crypt door (Hard STR roll) fails; player asks to push by using a spade as a lever; Keeper allows it but warns that failing again means the door stays shut *and* "something" may come for them.

### 5.3 Opposed skill rolls (p.12)
- Both sides roll; higher success tier wins (Regular beats Fail, Hard beats Regular, Extreme beats Hard).
- Tie on success tier: higher skill value wins.
- Tie on skill value too: both sides roll 1D100, lower result wins.

### 5.4 Bonus and penalty dice (pp.12–13)
- Mechanism: roll an extra "tens" d10 alongside the normal pair (3 dice total: 1 units + 2 tens).
- Bonus die: use whichever tens die gives the *better* (lower) reading.
- Penalty die: use whichever tens die gives the *worse* (higher) reading.
- One bonus die and one penalty die cancel each other out.
- p.11–12: worked example (bonus) — Malcolm vs. Hugh, opposed Charm rolls for a lady's hand; Malcolm gets a bonus die for having visited twice with gifts vs. Hugh's one visit with none; Malcolm's units=4 pairs with tens dice reading 44 or 24, he takes the lower (24, Hard success) and wins.
- p.12–13: worked example (penalty) — Felix vs. Harrison, opposed STR "Ordeal of Pain"; Harrison takes a penalty die for a recent major wound; his units=1 pairs with tens 20/40 → 21 or 41, and being a penalty he must take the *higher* (41 becomes effectively the worse reading used); both land Regular successes but Felix's higher STR (65 vs. 55) wins the tie.

### 5.5 Luck rolls (p.13)
- Used when external circumstances/fate are in question, not covered by a more specific skill or characteristic.
- Succeed by rolling ≤ current Luck value.
- Group Luck roll: only the player with the lowest Luck among those present rolls.
- p.13: worked example — no roll needed to find *a* cab, but a Luck roll is needed to get one before losing sight of a pursued car at 2am in a bad part of town; Credit Rating could contextually help but isn't itself sufficient.

### 5.6 Sanity (SAN) (pp.13–14)
- Triggered by encountering Mythos horrors or mundane-but-horrific sights (example given: finding a mutilated friend's corpse).
- Mechanic: percentile roll vs. current SAN; rolling ≤ SAN loses the *smaller* listed amount, rolling over SAN loses the *larger* amount; notation format "0/1D6" or "2/1D10" (before slash = loss on success, after slash = loss on failure).
- Losing 5+ SAN in one roll = major emotional trauma: roll D100 vs. INT; success = full understanding + temporary insanity for 1D10 hours.
- Failing a Sanity roll (not the 5+ trauma case) hands the Keeper momentary control of the character's next action (example given: unwittingly screaming, or squeezing a trigger).
- While temporarily insane, the Keeper may add a phobia or mania to the sheet (examples given: fear of the dark, fear of confined spaces, kleptomania) or amend an existing backstory entry.
- While temporarily insane, the Keeper may present hallucinations; the player can spend a "Reality Check" (a Sanity roll) to test one — success sees through it, failure sinks deeper into the delusion.
- Recovery is described as long and arduous, potentially requiring asylum care or psychotherapy; a partial refund is generally awarded at a scenario's successful conclusion.
- States explicitly that full SAN-degradation rules are omitted from this booklet; the Keeper will explain effects as they arise in play.

### 5.7 Combat — turn order and round structure (p.14)
- Initiative order = descending DEX, across investigators, NPCs, and monsters alike.
- A "round" is explicitly defined as a soft unit — "long enough for everyone to take one significant action" — not a fixed real-world time, and its pacing is left to the Keeper's judgment of narrative flow.
- Three combat skills: Fighting, Dodge, Firearms.
- Fighting and Firearms can each have specialization sub-skills (examples: Fighting (Brawl), Firearms (Rifle/Shotgun)), chosen at character creation.
- Fighting (Brawl) explicitly covers unarmed combat plus simple weapons like pocket knives and clubs.
- Combat rolls cannot be pushed — a failed attack simply waits for the character's next turn next round.

### 5.8 Resolving an attack (p.14)
- On being attacked, the defender chooses to fight back (Fighting skill, needs to beat the attacker's success tier) or dodge (Dodge skill, attacker needs to beat the defender's tier).
- Winning side avoids all damage; the losing side takes damage (unless the winner was dodging, in which case no damage is dealt either way).
- Fighting back is capped: the best a defender who fights back can achieve is "regular" damage (i.e. cannot deal extreme-success bonus damage purely by successfully defending).
- p.14–15: worked example — a ghoul attacks Brian twice in one round: first attack, Brian dodges — ghoul rolls Extreme, Brian's Dodge is only Hard, so Brian takes the ghoul's maximum possible damage (10, from 1D6+1D4) because the attack was an extreme success; second attack, Brian fights back and wins the opposed roll (Hard beats the ghoul's Regular), avoiding injury and dealing 1D3 damage to the ghoul.

### 5.9 Weapons and damage (p.14)
- Unarmed (human): 1D3 + Damage Bonus.
- Small knife: 1D4 + Damage Bonus.
- Machete: 1D8 + Damage Bonus.
- Small club: 1D6 + Damage Bonus.
- Baseball bat: 1D8 + Damage Bonus.
- Handgun: 1D10.
- Shotgun: 4D6 at close range, 2D6 otherwise; shotguns never impale.
- Rifle: 2D6+4.
- Extreme success damage rule: blunt weapons deal maximum weapon damage plus maximum damage bonus (if any); impaling weapons (blades, bullets) deal maximum weapon damage plus damage bonus plus one extra full damage-die roll (worked numeric example given: a handgun extreme success can deal up to 1D10+10).

### 5.10 Firearms specifics (p.15)
- A readied firearm acts at DEX+50 for turn-order purposes.
- Firing 2–3 shots from a handgun in one round applies one penalty die to each shot.
- Point-blank range (within one-fifth of the shooter's DEX, in feet) grants one bonus die.
- Diving for cover: roll Dodge; success imposes a penalty die on the attacker's rolls against you; diving for cover always costs you your own next attack (this round if unused, next round if you'd already acted).

### 5.11 Fighting maneuvers (pp.15–16)
- Used when the stated goal is something other than pure damage.
- Three example maneuver goals given: disarm an opponent; knock an opponent to the floor; seize and hold an opponent (holder imposes one penalty die on the held opponent's actions until they break free).
- Resolved as a normal Fighting (Brawl) attack roll; opponent may dodge or fight back as usual.
- Build comparison modifies difficulty: attacker with smaller Build than the target takes one penalty die per point of Build difference, capped at two penalty dice; if the opponent's Build exceeds the attacker's by 3+, the maneuver is stated to be flatly ineffective (the attacker "lacks the strength and size required").
- p.15–16: worked example — Brian (Build 0) tries to shove a ghoul (Build 1) out a window, takes 1 penalty die, rolls 02/22 and must use the higher (22, Hard success), beats the ghoul's Regular success on its fight-back roll, and succeeds.

### 5.12 Outnumbered (p.16)
- Once an outnumbered character has fought back or dodged once in the current round, all further melee attacks against them in that round gain a bonus die.
- Explicitly stated not to apply to firearms attacks.

### 5.13 Hit Points, Wounds, and Healing (pp.16–17)
- HP cannot go negative; is simply floored at zero.
- At zero HP, character falls unconscious and, depending on circumstances, may die.
- Major wound trigger: taking damage ≥ half max HP in a single hit; requires a CON roll or fall unconscious.
- A character with a major wound reduced to zero HP is "Dying": must make a successful CON roll at the end of the following round and every round after, or die; only a successful First Aid use can lift the Dying condition.
- Healing rate, no major wound: 1 HP/day.
- Healing rate, with major wound: a CON-based healing roll at the end of each week; success regains 1D3 HP (2D3 on an extreme success); the major-wound condition itself clears on an extreme success or once current HP reaches half of max or more.
- First Aid: heals 1 HP; on a Dying character it grants no immediate HP but extends life long enough for the Medicine skill to be used.
- Medicine: heals 1D3 HP, takes at least an hour plus appropriate equipment/supplies; on a Dying character, likewise no immediate HP gain but permits a healing roll at the end of one week.
- Taking damage ≥ max HP in a single blow = instant death (no roll).
- p.17: worked example — Brian starts at 12 HP; Monday barroom brawl deals 4+2+4=10 damage (down to 2 HP, no major wound), heals 1/day; Thursday (now 5 HP) falls out a window for 7 damage — a major wound; First Aid stabilizes him; after 7 days a successful CON roll regains 1D3 HP; at end of second week an extreme success regains 2D3 HP, reaching 5 HP total and clearing the major-wound marker, after which healing reverts to 1 HP/day.

### 5.14 Other Forms of Damage (pp.16–17)
- Used when the Keeper must judge damage from an event with no specific weapon statline; rate the incident against the table's severity band, applied per single incident/round of exposure (repeated exposure = repeated rolls).
- Table bands and example causes, low to high severity:
  - Minor (1D3 / 1D6 / 1D10): punch/kick/head-butt, mild acid, breathing smoky air, a thrown fist-sized rock, falling 10ft onto soft ground.
  - Moderate: falling 10ft onto grass, club, strong acid, breathing water, vacuum exposure, small-caliber bullet, arrow, burning-torch fire.
  - Severe: .38 caliber bullet, falling 10ft onto concrete, axe, flamethrower fire / running through a burning room, 6–10 yards from an exploding grenade/dynamite, mild poison.
  - Deadly (2D10, "50% chance of dying"): hit by a car at 30mph, 3–6 yards from an exploding grenade/dynamite, strong poison.
  - Terminal (4D10): hit by a speeding car, within 3 yards of an exploding grenade/dynamite, lethal poison.
  - Splat (8D10, "outright death almost certain"): high-speed head-on collision, hit by a train.

## 6. The Haunting — Scenario (pp.18–37)

### 6.1 Framing (p.18)
- Explicitly "designed for new Keepers and players."
- Keeper advice is embedded inline throughout as labeled "Keeper's Notes," rather than collected in a separate GM-only section.
- Boxed/indented passages are read-aloud text; player handouts are cross-referenced in the text and collected together at the end for photocopying.
- Setting is 1920s Boston, with an explicit aside that it "could be transported to a modern setting if desired."

### 6.2 The Keeper's Secret (p.18)
- One paragraph, Keeper-only, states the entire truth up front: Walter Corbitt's body is buried in the house's basement; his mind survives via Mythos magic and can animate the corpse; he preys on residents; he'll mislead/scare investigators before resorting to murder.
- Investigators' explicit goal: learn about Corbitt to solve the mystery.

### 6.3 Preparing for Play (pp.18–19)
- Character creation is run using the scenario's own premise as the pitch (hired to check out a haunted house).
- Suggested investigator concepts given as options, not a requirement: private detectives, amateur sleuths, journalists, friends of the landlord.
- Keeper told to record each PC's name/APP/Credit Rating/backstory notes for later reference.
- Explicit pacing advice: keep character creation "reasonably brisk," avoid getting bogged down in unnecessary detail.

### 6.4 Location 1: Introduction (p.19)
- Staging location left to the Keeper's discretion — "isn't overly important."
- Handout 1 (the job offer from landlord Mr. Knott) delivered as read-aloud boxed text; includes cash advance, keys, address as concrete hooks.
- Players are offered a 3-way fork of research locations (Boston Globe / Central Library / Hall of Records) and told "the choice is yours"; Keeper's Note nudges them toward research before the house, but doesn't force it.
- Keeper's Note on pacing travel: "no need to go in to detail when it comes to moving between locations — just cut to the investigators arriving."

### 6.5 Location 2: The Boston Globe (pp.19–21)
- Gatekeeper NPC (Arty Wilmot) is designed to be pre-determined unhelpful; Keeper's Note flags this as an exception to the normal rule of rolling against an NPC's own resistance — his refusal is "pre-ordained."
- A menu of four skills is offered for the same social obstacle depending on the player's roleplayed approach: Charm (friendliness), Intimidate (aggression), Persuade (rational argument), Fast Talk (conning).
- Keeper's Note calibrates difficulty explicitly: because Arty's own relevant skills are below the "professional" 50% threshold, the task is Regular difficulty, not Hard.
- The push-a-roll mechanic is demonstrated concretely: on failure, ask if they want to persist; the resulting consequence differs by which skill was used (Intimidate failure → a fight breaks out; Charm/Persuade failure → Arty orders them out, escalating to calling security).
- Once inside, NPC Ruth Blake (records keeper) hands over one extra fact with explicitly *no* roll required — Keeper's Note: "don't bother with dice here, the information isn't crucial."
- Handout 2 is guaranteed once access is gained (no further roll), with the text explicitly reasoning that gating it further "would be churlish" after the access roll already succeeded.

### 6.6 Location 3: Central Library (p.21)
- Time-cost research mechanic: one Library Use roll per half-day; failures aren't pushed, just retried, but cost more in-game time.
- Soft time pressure, not hard failure: if research runs past a full day, employer NPC Mr. Knott calls to check progress and "urge" them on.
- Each success hands out the next handout in a fixed sequence (Handouts 3–6) — the clue order is pre-set regardless of which specific roll succeeded first.

### 6.7 Location 4: Hall of Records (p.22)
- Explicitly reuses Location 3's mechanic verbatim: "Use the same guidelines as for the Central Library."
- Reward (Handout 7) contains both a forward lead (Rev. Michael Thomas / Chapel of Contemplation) and an explicit dead end (Chapel's 1912 closure); a deeper cross-reference is gated behind players thinking to ask, softened by a free hint if they've "been courteous to the clerk."

### 6.8 Location 5: Higher Courts / Central Police Station (pp.22–23)
- Another multi-skill menu for one obstacle (Law / Credit Rating / Persuade / Charm / Fast Talk), each with a distinct in-fiction justification and NPC reaction.
- Law route uses a *concealed* Keeper roll never revealed to the players, creating a possible unseen bribe subplot (the contact NPC, Kim Debrun, is either helpful or corrupt depending on a roll the players never see).
- Fast Talk route flagged explicitly in-text as "risky" (using a fake ID at a police station).
- Consequence flavor for overreaching here differs from Location 2: police antipathy/shakedown, not just ejection.

### 6.9 Location 6: The Neighborhood (pp.23–24)
- Informal NPC (Mr. Dooley, cigar/newspaper vendor).
- Initial reaction gated by a roll vs. APP or Credit Rating; if that fails, a *different* investigator can retry via Charm/Fast Talk/Persuade/Intimidate.
- Keeper's Note supplies a bullet list of talking points (family moved in → father's accident/madness → "burning eyes" babble → mother's madness → sanitarium → kids sent to Baltimore) for the Keeper to improvise dialogue around, rather than scripted lines.
- Explicit license given: "not everything spoken by a non-player character has to be true," Dooley may exaggerate.

### 6.10 Location 7: Roxbury Sanitarium (p.24)
- Information is deliberately split between two NPCs: the mad father (Vittorio) delivers an atmospheric, non-literal clue (a false-sounding "bible quote" that is actually a real mechanical hint — Corbitt is vulnerable to his own dagger); Keeper's Note explicitly says not to force the connection, "leave it up to the players."
- The more lucid mother (Gabriela) gives plain factual clues (an evil, watching presence; its focused hatred of Vittorio) but is capped — "unable to give specific information" — and the Keeper is told to end the interview quickly since further questions "will greatly upset her" (an explicit pacing/consent device).
- The children (off-page in Baltimore) are an optional, low-value visit that only reinforces an existing clue rather than adding new information.

### 6.11 Location 8: Chapel of Contemplation (pp.24–26)
- Read-aloud boxed description sets a ruined/overgrown atmosphere; a cult symbol is delivered as an image handout (Handout 9), not text.
- An ambient unexplained sensation ("tingles in their foreheads") is used purely as foreshadowing, with no mechanical effect.
- Environmental hazard chain: failed Luck roll → failed Jump roll → fall through weakened floorboards into a hidden chamber; each failure point has its own push option and a distinct consequence style (a last-second edge-grab; on a *pushed* failure, losing/breaking a personal possession rather than escalating raw damage).
- Discovery chain: skeletons found → (pushable) Spot Hidden reveals a hidden journal + tome under a cabinet → the journal delivers a narrative reveal (Corbitt is buried "with the wishes of that one who waits in the dark") → the tome (a copy of the Liber Ivonis) needs either a 50%+ Read Latin skill or a successful roll, plus 3 hours, for a cursory read.
- Reading the tome is explicitly costed: +2% Cthulhu Mythos skill, paired with a permanent −2 to Maximum Sanity (99→97) — a direct mechanical enactment of "the more you know, the more it costs."

### 6.12 Location 9: The Old Corbitt Place (pp.25–32)
- Exterior description leans on environmental storytelling: the house "withdraws into the shadows," curtained windows, extra bolts, nailed-shut windows — all before anything supernatural happens.
- Structured as a literal floor plan (Ground Floor: 6 rooms; Upper Floor: 3 bedrooms + bathroom; Basement: 4 rooms); Keeper is told to sketch it as players explore.
- Most rooms are pure flavor with zero mechanical hooks (junk, a table still set for 3, spoiled food) — establishing that not every room needs a clue.
- The Living Room / general haunting is handled as an à la carte menu of unexplained phenomena (thumping, pooling blood, scratching, a moving bed) the Keeper can "pick any... and have them happen as and when you wish" — a toolbox, not a script.
- **Bed Attack** set-piece (Spare Bedroom): lure via a rattling window → Spot Hidden to notice → Dodge to avoid; 1D6+2 damage if hit; witnesses make a Sanity check (1/1D4); Keeper's Note stresses fairness — pick the target by lowest Luck or at random, not GM whim.
- **Basement stairs** set-piece (Room 1): Corbitt actively sabotages the environment (cuts power, moves the stairs); each descending investigator makes a combined DEX-or-Climb roll; failure offers a stay-or-push choice; a cooperative variant lets a successful investigator grant the next one a bonus die at shared risk (both fall if that pushed roll fails) — the text explicitly calls this out as good design: "exactly as dice rolls should do."
- (Pushable) Spot Hidden finds Corbitt's magic knife among the junk; the text names the foreshadowing technique directly: "you can foreshadow the consequence of failure by pointing out the many sharp things among the mess."
- **The Floating Knife** set-piece: an autonomous weapon costing Corbitt 1 Magic Point/round to animate; the attack-vs-Dodge resolution is spelled out success-tier by success-tier (Fail/Regular/Hard/Extreme each mapped to a specific damage outcome, including a fumble-only-miss rule if the target is unaware); a Sanity check is required just for witnessing it. Separate rules cover players trying to physically wrestle it away (opposed Fighting-maneuver vs. Corbitt's POW) and holding onto it afterward (opposed STR vs. POW, contested every round).
- Basement Room 2 is an empty flavor room — a deliberate pacing beat between two intense set-pieces.
- Basement Room 3: a rat-pack encounter behind a hidden wall, using an "abstracted mob" monster pattern (one stat block represents ~10 rats; individual rats "not worthy opponents"; the pack effectively ends once 1–2 are killed) plus a hidden clue (scratched wall text) deliberately marked "Obvious" — no roll required — explicitly contrasted with the earlier "Obscure" clue design elsewhere.
- An optional Corbitt spell interjection (Dominate) is noted as something the Keeper can trigger at this exact beat "at any time, whether he has moved or not" — the antagonist is given agency independent of what the players choose to do.
- Basement Room 4 (Corbitt's hiding place): the boss reveal, with a dramatic physical description of his dormant body; a deliberately unresolved side-plot (mysterious horoscope-like papers) is explicitly labeled in-text as "a scenario seed for Keepers to use in future adventures" — a named craft move for planting sequel hooks inside a one-shot.
- Climactic combat: a mass Sanity roll (1/1D8) when Corbitt rises, gated by the same two-stage SAN→INT pattern used earlier for temporary insanity; explicit initiative bookkeeping (drawn-gun DEX+50, Dominate-casting DEX+50); an outnumbering bonus die is spelled out; melee vs. firearms attackers are handled with separate resolution notes.

### 6.13 Temporary Insanity apparatus (pp.32–33)
- "Bouts of Madness" 1D10 table: ten concrete effects (amnesia, psychosomatic disability, violence, paranoia, mistaken-identity via the character's own backstory "Significant Person" field, faint, flee, hysterics, new phobia, new mania). Table entry #5 notably reaches back into the character's own backstory data from character creation to personalize the effect.
- A "Delusions" subsystem covers the specific case of insanity lasting until the investigator leaves the house and rests; two concrete GM-authored delusion scripts are given, plus a player-invoked "Reality Check" (a Sanity roll) to test/escape a delusion, with explicit success (drop it) / failure (lose more SAN, escalate) consequences.
- This Mythos-caused insanity additionally adds a flat +5% to Cthulhu Mythos skill.

### 6.14 Conclusion, Rewards, Extension (pp.33–34)
- Three explicit branch endings are given: full success (Corbitt destroyed, landlord pays promptly); partial failure (Corbitt survives, later kills the landlord when he checks the house himself, investigators become murder suspects); character death/madness is framed as an acceptable outcome with a suggested closure device — a short epilogue per player, including a "recovered but insane" framing option.
- Reward on victory: 1D6 Sanity restored to survivors, the tome kept as loot, fee-plus-bonus paid by the landlord.
- "Extension" section hands the Keeper two unresolved threads (the Chapel conspiracy cover-up; the horoscope papers) explicitly as reusable material "for further adventures of your own devising" — the same sequel-seeding move as 6.12, now stated as general advice rather than embedded in one room.

### 6.15 Corbitt stat block & spells (pp.34–35)
- Full antagonist writeup: stats/attacks, plus a disease-risk side effect on his claw attack (a Luck roll, then a CON roll, feeding an escalating CON-loss "delirium" track over repeated days).
- Armor comes from his Flesh Ward spell: absorbs damage point-for-point, degrades as it's used, cannot be renewed once exhausted or recast until spent — paired with an explicit, narratively-telegraphed kill condition that bypasses the armor entirely (his own dagger, discovered via the sanitarium clue, kills him outright).
- Roleplaying hooks are given as short directive bullets (malice, divides the party, seeks Mythos knowledge) rather than dialogue — the same toolbox-not-script pattern as the haunting-manifestation menu in 6.12.
- Dominate spell variant: opposed POW roll, a fixed daze duration, explicit behavior constraints (won't order suicide; will order homicidal/reckless acts), amnesia on waking.
- Explicit "flavor over crunch" authorial aside: Corbitt isn't literally a vampire and could eat carrots instead of blood — "drinking blood is just more fun" — an explicit permission to reskin monster flavor without touching the mechanics underneath.

### 6.16 Player Handout Section (pp.35–37)
- Handouts 1–9 reprinted together at the back of the booklet for photocopying — a production/format convention, not new content.

## 7. "The Haunting, a Retelling" (pp.37–41)

- Explicitly framed as a real actual-play record: a serialized story Chaosium ran during a Kickstarter campaign, "to show how the story line you create might depart from the scripted adventure."
- Two named pregens (Harvey Walters, Jenny Johnson) are walked through the entire scenario as continuous narrative prose.
- Notable divergences from the base scenario worth logging as evidence (not synthesis):
  - At the Globe, Jenny succeeds via Charm while Harvey supplements with a bribe (a flask of whiskey) — an improvised approach not spelled out as an explicit option in the base Location 2 text.
  - At the courts, Harvey fails then pushes a Persuade roll via an on-the-fly flirtation angle with Kim Debrun — again, texture invented at the table, not scripted.
  - The group's path skips several base-scenario locations outright — no separate dramatized visit to the Hall of Records or the Central Police Station — showing the location menu is genuinely pick-and-choose, not a checklist to be completed.
  - The Bed Attack, rat swarm, wall-breaking, and knife-strike set-pieces all play out with different narrative color (Harvey catches the flying knife through his own palm; Jenny lands the crowbar blow herself; Corbitt's Dominate is reflavored as him directly commanding Jenny to "Kill Harvey") while preserving the same mechanical skeleton described in section 6.12.
  - The retelling ends on the same dangling-hooks device as the base text's "Extension" section (the horoscope papers), reinforcing that as the intended payoff regardless of how the middle of the scenario is actually played.
- Functions as a live demonstration that the scenario's underlying skeleton — a menu of research paths, a handful of must-hit set-pieces, and a Keeper toolbox of ambient/optional effects — survives arbitrary reordering and omission at an actual table.
