+++
description = "Build a table of contents and left-side navigation for your documentation pages."
layout = "LayoutDocumentationPage"
title = "Navigation"

[[collection]]
after = "docs/components"
name = "docs"
parent = "docs/index"
+++

## Left-side navigation

You can render the navigation to browse through the documentation pages. The navigation is generated based on the `[[collection]]` section in the front matter - you can see the full example of how to use it in the `LayoutDocumentationPage.rhai` file.

## Table of contents

You can render the page headings as the page navigation. In this project example, the navigation is displayed on the right and includes only headings at level 2. You can change the level in the `LayoutDocumentationPage.rhai` file.
