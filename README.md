# TypeScript for Managers

A very simple training for managers who want to understand the basics of programming in TypeScript.

The easiest way to use it is now in the browser, with a phone-first layout and short lessons.

## Start here

Open [index.html](/Users/adan/work/claude/code/tvl-tech-programming/index.html) in a browser.

If you need the teaching plan as well, use [CURRICULA.md](/Users/adan/work/claude/code/tvl-tech-programming/CURRICULA.md).

That page includes:

- 6 micro-lessons
- an editor
- a Run button
- a Run tests button
- previous and next lesson navigation
- built-in solutions

Participants can type directly in the browser, run the code, and check whether it passes the built-in tests immediately.

Note: the browser page loads the TypeScript compiler from a CDN, so it needs normal internet access.

## What this training teaches

- Variables: storing information
- `if` statements: making decisions
- Functions: reusing logic
- Arrays: working with lists
- Objects and types: modeling real-world data
- Turning a simple business rule into code

## Why this version is manager-friendly

- The examples use everyday management topics like priorities, capacity, projects, and weekly reports.
- Every lesson is short enough to complete on a phone.
- The browser page removes most setup friction.
- The editor, buttons, and lesson flow are designed for touch use.

## Browser-first learning path

1. Open `index.html`
2. Start with Lesson 1
3. Change one value
4. Press `Run code`
5. Predict the output before running again
6. Press `Run tests`
7. Move to the next lesson

## Optional file-based version

If you still want the filesystem version, the same lessons also exist as `.ts` files:

- `lessons/01-thinking-like-a-programmer.ts`
- `lessons/02-decisions.ts`
- `lessons/03-functions-and-arrays.ts`
- `lessons/04-objects-and-types.ts`
- `exercises/01-weekly-report.ts`
- `exercises/02-prioritization.ts`

You can run them with Node:

```bash
node lessons/01-thinking-like-a-programmer.ts
```

Or use the npm shortcuts:

```bash
npm run lesson:1
```

## Suggested workshop format

- 10 minutes: explain what code is
- 10 minutes: let everyone open the browser training on phone or laptop
- 30 minutes: walk through the 6 micro-lessons
- 15 minutes: let people repeat the challenge lesson on their own
- 10 minutes: discuss how these concepts show up in real software teams

For more structured options, see the curricula document for:

- a 35-minute mobile micro-learning path
- a 60-minute standard workshop
- a 2-session deep-dive
- a self-study path

## Good framing for managers

Programming is often just this:

1. Take some information
2. Apply a rule
3. Produce an output

That is already very close to how managers think about decisions, planning, and prioritization.
