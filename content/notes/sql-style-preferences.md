---
title: SQL style preferences
tags: sql, style, coaching
date: 2026-07-16
---
Prefer explicit column lists over `SELECT *` in anything meant for a portfolio
or an interview walkthrough — it reads as more deliberate. Window functions
and CTEs over nested subqueries where possible, since they're easier to
narrate out loud. Always mention the *why* behind an index, not just that
one exists.
