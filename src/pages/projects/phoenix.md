---
layout: "../../layouts/ProjectLayout.astro"
title: "POB Phoenix"
pubDate: 2025-09-16
description: "Personnel cataloging tool for offshore operations."
author: "Samuel Torres"
time: "May-July 2021"
path: "projects/phoenix"
tags: ["ux-design", "full-stack"]
---

In the summer of 2021, I created a full stack web application, POB Phoesnix for Arena Energy as my internship project. The project was completed in roughly 3 months, and I learned a lot about taking a product from 0-1.

This is used to record daily personnel data (like name, weight, occupation) of workers on Arena Energy oil rigs and lift boats in the Gulf of Mexico and beyond. This data was useful for day to day operations and emergency situations where you need to know who on board for evacuation, like the [Eugene Island Area Block 158 #14 Platform incident](https://www.bsee.gov/sites/bsee.gov/files/2023-11/EI%20158%20-14%20Panel%20Report.pdf) that happened during my internship. This website has extensive offline functionality to account for the flaky internet connection at sea.

Previously, this data was captured across spreadsheets for each structure, and copy and pasted manually for each day by Operations Assistants. This new solution allows for data validation and an easier workflow for copying the entries from a previous log.

# Stack

- ASP.NET/C#
  - Custom web interface that views/updates SQL records
- Microsoft SQL Server
  - Stores all of the data
