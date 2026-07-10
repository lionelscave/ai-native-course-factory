# AI Native Course Factory

Repo for building, packaging, marketing, and delivering AI-native transformation courses and executive programs.

## Purpose

Create a reusable course factory for Lionel’s AI-native transformation business:

- AI-Native Transformation Foundations
- AI-Native Economics and Control Plane
- Executive workshops
- Live cohorts
- Corporate/team delivery
- Done-with-you AI-native transformation sprints

## Core thesis

AI-native transformation is not random AI tool adoption. It is the shift from scattered tools to an operating system for intelligence, action, governance, memory, workflows, economics, and control planes.

## Repo structure

```text
course/                 Curriculum, modules, lessons, assessments, worksheets
beautiful-ai/           Beautiful.ai slide/deck manifest and production workflow
platform/               Course delivery platform schemas and app integration specs
business/               Business model and offer architecture
marketing/              Positioning, funnels, content strategy, landing copy
revenue/                Pricing, launch plan, revenue roadmap
examples/               Example course/package manifests
tools/                  Manifest/build/validation tools
.github/workflows/      CI validation
```

## Quick start

```bash
npm test
```

## Product ladder

1. Free lead magnet: AI-Native Economics Scorecard
2. Self-paced course: AI-Native Transformation Foundations
3. Live cohort: From AI Tools to AI Operating System
4. Corporate workshop: AI-Native Control Plane Workshop
5. Premium sprint: Done-with-you AI-Native Transformation Sprint

## Beautiful.ai integration model

Each module maps to a Beautiful.ai deck URL or placeholder via `beautiful-ai/deck-manifest.json`. The delivery app reads this manifest to embed/link slides per lesson.
