---
layout: '../../layouts/ProjectLayout.astro'
title: 'POB Phoenix'
pubDate: 2025-09-16
description: 'Personnel cataloging tool for offshore operations.'
author: 'Samuel Torres'
time: "May-July 2021"
path: "projects/phoenix"
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'picture of home server'
tags: ["ux-design","full-stack"]
---

I built this full stack web application for Arena Energy in the Summer of 2021.

### What is it?

- The POBPhoenix is a detailed and interactive personnel list for Arena Energy structures
- This list can be used to:
    - Track man hours
    - Assist with transportation
    - Assess in case of an emergency
- Built in C# (Blazor) as per supervisor’s request
    - Accesses and modifies personnel data through a MicrosoftSQLServer

### Advantages over Excel Spreadsheets

- Data Validation
    - Standardized Employer and Job Description
- Stored in a relational SQL Database
    - Combines data previously captured in multiple spreadsheets into one source
- Saves time for Operations Assistants
    - Duplicate facility information feature
    - Autofill feature for new entries