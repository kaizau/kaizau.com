## Conventions

A work in progress.

### TODO

* Figure out way to prevent empty selectors from blowing up
* Better starting button styles
* Document stylus variables, helpers, etc.

### Stylesheets

Prefer classes over IDs.

`.CapitalCase` represents proper nouns — top-level UI elements that aspire to
be default tags. They receive styles directly and, without modifiers, should
look and behave the same no matter where they appear.

Related proper nouns share root words, moving from general to specific from
left-to-right (`.Button, .ButtonGroup`).

`.lower-dash-case` represents situational styles. These either modify proper
nouns as adjectives (`.Noun.adjective`) or as possessed objects (`.Noun
.object`). As such, they should only receive styles in relationship with a
proper noun or default tag. This means the same class could look very different
depending on where it appears.

Adjectives that may be used globally should be written as prepositional
phrases. "With" and "without" cover most cases (`.with-padding,
.with-invisibility`).
