# TypeScript for Managers Curricula

This document turns the browser training into a few ready-to-run learning paths.

Use the browser experience in [index.html](/Users/adan/work/claude/code/tvl-tech-programming/index.html) as the teaching surface for all of them.
The current version is mobile-first and built around 6 micro-lessons.

## Core learning outcomes

By the end of the training, participants should be able to:

- explain what a variable, function, conditional, array, and object are
- read a short TypeScript example without feeling lost
- change simple values and predict how output will change
- understand how business rules become software rules
- use basic tests as feedback instead of guessing

## Audience

- managers
- delivery leads
- founders
- product leaders
- operations leaders who work closely with engineering teams

## Assumptions

- no prior programming experience
- basic comfort using a browser and editing text
- curiosity is more important than technical depth

## Curriculum 1: Mobile Micro-Learning

Best for:

- phone-first learning
- async learning bursts
- leadership teams with very limited time

Duration:

- 35 minutes

Learning goal:

- make code feel approachable through very short editing loops

Flow:

1. Introduction and framing: 5 minutes
2. Lessons 1 and 2: 8 minutes
3. Lessons 3 and 4: 10 minutes
4. Lesson 5: 5 minutes
5. Lesson 6 challenge: 5 minutes
6. Debrief: 2 minutes

Facilitator emphasis:

- keep every segment small
- have people type on their own phones if possible
- ask them to change one thing only before each run
- use tests as quick feedback, not assessment

Success looks like:

- participants complete at least four lessons comfortably on a phone
- participants understand that code can be learned in small increments

## Curriculum 2: Executive Primer

Best for:

- leadership offsites
- client workshops
- intro sessions where time is tight

Duration:

- 45 minutes

Learning goal:

- make code feel understandable and less intimidating

Flow:

1. Introduction and framing: 5 minutes
2. Lesson 1 and Lesson 2: 12 minutes
3. Lesson 3: 8 minutes
4. Lesson 4: 8 minutes
5. Lesson 6 together: 7 minutes
6. Debrief: 5 minutes

Facilitator emphasis:

- keep the pace fast
- do most of the typing live
- ask participants to predict outputs before clicking `Run code`
- use `Run tests` to show that software can check work immediately

Success looks like:

- participants can explain that code is data plus rules plus output
- participants can point at a simple `if` statement and describe what it does

## Curriculum 3: Standard Workshop

Best for:

- internal manager enablement
- cross-functional training
- onboarding for non-technical stakeholders

Duration:

- 60 minutes

Learning goal:

- build enough confidence to read, edit, and discuss simple code

Flow:

1. What programming is and is not: 10 minutes
2. Lessons 1 and 2: 10 minutes
3. Lessons 3 and 4: 10 minutes
4. Lesson 5: 10 minutes
5. Lesson 6 challenge: 10 minutes
6. Pair practice and replay: 10 minutes
7. Debrief and applications to daily work: 10 minutes

Facilitator emphasis:

- let participants type for themselves
- pause after each lesson for one business example from the room
- treat tests as support, not judgment

Suggested discussion prompts:

- "What rule from your work could become an `if` statement?"
- "What repeated update could become a function?"
- "What real-world thing in your work could be represented as an object?"

Success looks like:

- participants complete the final challenge with some guidance
- participants use tests to validate their answers
- participants start translating business concepts into code concepts

## Curriculum 4: Deep-Dive Team Session

Best for:

- management teams working closely with engineers
- delivery organizations
- product and engineering alignment sessions

Duration:

- 2 sessions of 60 minutes each

Learning goal:

- connect code concepts to planning, reporting, prioritization, and software collaboration

### Session 1

Topics:

- what code expresses
- variables and types
- decision rules
- business logic as software logic

Flow:

1. Introduction: 10 minutes
2. Lessons 1, 2, and 3: 25 minutes
3. Live examples from management work: 15 minutes
4. Short reflection: 10 minutes

Homework:

- re-run Lessons 1 to 3
- modify at least three values
- write down one rule from real work that could become code

### Session 2

Topics:

- reusable logic
- lists and objects
- validating logic with tests
- limits of simple training code versus real systems

Flow:

1. Quick recap: 10 minutes
2. Lessons 4 and 5: 20 minutes
3. Lesson 6 challenge and replay: 20 minutes
4. Debrief on software collaboration: 10 minutes

Success looks like:

- participants can describe how engineers break problems into inputs, rules, and outputs
- participants become more precise in requirements conversations
- participants better understand why ambiguity creates software risk

## Curriculum 5: Self-Study Path

Best for:

- asynchronous learning
- pre-work before a live workshop
- lightweight onboarding

Duration:

- 30 to 45 minutes

Instructions for participants:

1. Open `index.html`
2. Complete the six lessons in order
3. For each lesson, change at least one value and re-run the code
4. Use `Run tests` before moving on
5. Use `Next lesson` to keep moving without losing momentum
6. Review the solutions only after trying on your own

Reflection questions:

- What looked most familiar from your day job?
- Which code pattern felt easiest to understand?
- Which part would help you communicate better with engineers?

## Module map

### Module 1: Variables

Training asset:

- Lesson 1

Manager translation:

- facts and inputs

Key takeaway:

- code starts by naming information clearly

### Module 2: Conditionals

Training asset:

- Lesson 2

Manager translation:

- escalation rules, budget rules, decision gates

Key takeaway:

- business logic often becomes `if` statements

### Module 3: Functions

Training asset:

- Lesson 3

Manager translation:

- repeatable communication or logic

Key takeaway:

- functions package repeatable logic

### Module 4: Arrays

Training asset:

- Lesson 4

Manager translation:

- lists of people, tasks, or projects

Key takeaway:

- arrays hold collections you can count or inspect

### Module 5: Objects and simple models

Training asset:

- Lesson 5

Manager translation:

- projects, initiatives, team members, risks

Key takeaway:

- objects help software describe real things with explicit fields

### Module 6: Practice and validation

Training assets:

- Lesson 6

Manager translation:

- turning reporting and prioritization into precise logic

Key takeaway:

- tests provide fast feedback and reduce ambiguity

## Assessment approach

This training should feel practical, not academic.

Use lightweight assessment:

- Can the participant explain the code in plain language?
- Can the participant change a value and predict the output?
- Can the participant pass the exercise tests?
- Can the participant connect the lesson to a business process?

## Recommended facilitator language

Helpful phrases:

- "You do not need to think like an engineer yet. Just describe the rule."
- "Let the test tell you whether the code behaves the way you intended."
- "We are not optimizing for syntax memorization. We are optimizing for understanding."
- "If you can explain the rule clearly, you are already doing an important part of programming."

## What not to do

- do not overload the session with terminology
- do not introduce tooling setup during the live workshop
- do not turn syntax mistakes into high-pressure moments
- do not drift into advanced TypeScript topics
- do not present tests as grading
