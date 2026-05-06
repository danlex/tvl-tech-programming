# TypeScript for Managers Training Manual

This manual turns the browser training into a facilitator-ready package.

Use the interactive experience in [index.html](/Users/adan/work/claude/code/tvl-tech-programming/index.html) as the main delivery surface.

## What a manual needs

This manual is structured around a few common patterns from training and instructional design:

- clear learning objectives
- alignment between objectives, activities, and assessment
- step-by-step delivery guidance
- materials and setup instructions
- facilitator preparation notes
- participant tasks
- follow-up and review guidance

That means this manual is not just a lesson list. It is meant to answer:

- what this training is for
- who it is for
- what learners should be able to do
- how a facilitator should run it
- how learners practice
- how success is checked
- how the material should be maintained over time

## 1. Purpose

This training helps managers become more comfortable reading, changing, and discussing simple TypeScript code.

The goal is not to teach professional software engineering. The goal is to make code feel understandable enough that managers can:

- follow basic logic
- ask sharper questions
- write clearer requirements
- work more effectively with technical teams

## 2. Audience

Primary audience:

- managers
- founders
- delivery leads
- product leaders
- operations leaders working with engineering teams

Assumptions:

- no prior programming experience
- comfortable using a browser on phone or laptop
- willing to learn in short practice loops

## 3. Learning objectives

By the end of the training, participants should be able to:

1. identify a variable, conditional, function, array, and object in a short TypeScript example
2. change a value in code and predict how the output will change
3. explain a simple code snippet in plain language
4. connect a business rule to a basic programming rule
5. use built-in tests as feedback for whether the code behaves as intended

## 4. Training format

Delivery surface:

- browser-based training in `index.html`

Recommended format:

- phone-first, but works on desktop
- short lessons
- one concept per lesson
- immediate feedback through `Run` and `Run tests`

Current training flow:

1. Pick a lesson
2. Read the mission
3. Make one change
4. Press `Run`
5. Check the output
6. Press `Run tests`
7. Move to the next lesson

## 5. Materials and setup

For facilitator:

- browser access
- internet access for the in-browser compiler
- the live training page
- optional projector or screen share

For participants:

- phone or laptop
- browser
- internet connection

Pre-session check:

- confirm the page loads
- confirm `Run` produces output
- confirm `Run tests` shows pass/fail results
- confirm the selected lesson changes correctly

## 6. Facilitator preparation

Before running the session, the facilitator should:

1. complete all seven lessons once
2. test the page on both phone and desktop
3. decide whether the session is live, paired, or self-paced
4. prepare one business example for each major code concept
5. decide how much time to spend on discussion versus editing

Facilitator stance:

- calm
- plainspoken
- precise
- encouraging

Avoid:

- jargon-heavy explanations
- long theory sections
- advanced TypeScript details
- treating tests like grades

## 7. Session map

### Option A: 35-minute micro-session

1. Intro and framing: 5 minutes
2. Lessons 1 and 2: 8 minutes
3. Lessons 3 and 4: 10 minutes
4. Lessons 5 and 6: 7 minutes
5. Lesson 7 challenge: 5 minutes
6. Debrief: 2 minutes

### Option B: 60-minute workshop

1. Intro and framing: 10 minutes
2. Lessons 1 and 2: 10 minutes
3. Lessons 3 and 4: 10 minutes
4. Lessons 5 and 6: 10 minutes
5. Lesson 7: 10 minutes
6. Discussion and debrief: 10 minutes

## 8. Module guide

### Lesson 1: Variables

Concept:

- storing information

Participant action:

- change one named value

Facilitator prompt:

- "What facts in your work could become variables?"

Success check:

- learner can explain that changing a variable changes the output

### Lesson 2: Conditionals

Concept:

- rules and branching

Participant action:

- change the condition input

Facilitator prompt:

- "What is a real escalation rule from your world?"

Success check:

- learner can explain why a different branch ran

### Lesson 3: While loops

Concept:

- repetition while a condition stays true

Participant action:

- change how fast the loop counts down

Facilitator prompt:

- "What work in your world repeats until a condition is finished?"

Success check:

- learner can explain why the loop stops

### Lesson 4: Functions

Concept:

- reusable logic

Participant action:

- change the function input

Facilitator prompt:

- "What repeated status update could become a function?"

Success check:

- learner can explain input and output

### Lesson 5: Arrays

Concept:

- lists and counting

Participant action:

- add one item to the list

Facilitator prompt:

- "What lists do you work with often?"

Success check:

- learner can explain that arrays hold collections

### Lesson 6: Objects

Concept:

- grouping related information

Participant action:

- change one field

Facilitator prompt:

- "What fields define a project in your work?"

Success check:

- learner can explain that an object models a real thing

### Lesson 7: Challenge

Concept:

- converting a business rule into code

Participant action:

- finish the prioritization rule

Facilitator prompt:

- "What should count as high impact and low effort?"

Success check:

- learner can pass the tests and explain the rule

## 9. Delivery instructions

For each lesson, the facilitator should:

1. read the lesson title aloud
2. restate the mission in plain language
3. ask learners to predict what will happen before running
4. have learners make one change only
5. press `Run`
6. compare the output to the expected result
7. press `Run tests`
8. ask one short reflection question

This keeps the training consistent and low-stress.

## 10. Assessment

This training uses lightweight assessment, not formal grading.

Check for:

- whether the learner made the requested code change
- whether the output changed as expected
- whether the learner can explain the change
- whether the tests pass

Good signs of progress:

- the learner predicts output before running
- the learner notices which line matters
- the learner can restate the rule in business language

## 11. Troubleshooting

### If learners say “Run does nothing”

Check:

- whether the output panel changed
- whether the output scrolled into view
- whether the code has a syntax error
- whether the browser loaded the compiler library

### If learners are confused by the lesson

Do:

- narrow the task to one exact line
- show one example
- ask what they expected to happen

### If learners are intimidated

Do:

- remind them they are not expected to write code from scratch
- keep the activity focused on reading and small edits
- use the tests as feedback, not judgment

## 12. Manual maintenance

Review this manual when:

- lesson flow changes
- lesson count changes
- tests change
- page UI changes
- curriculum timing changes

Update checklist:

1. confirm lesson names still match the page
2. confirm mission text still matches each exercise
3. confirm timings are realistic
4. confirm facilitator prompts still fit the lesson content
5. confirm output and test expectations are still correct

## 13. Related documents

- [README.md](/Users/adan/work/claude/code/tvl-tech-programming/README.md)
- [CURRICULA.md](/Users/adan/work/claude/code/tvl-tech-programming/CURRICULA.md)
- [FACILITATOR_GUIDE.md](/Users/adan/work/claude/code/tvl-tech-programming/FACILITATOR_GUIDE.md)
