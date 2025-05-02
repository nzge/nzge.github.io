---
layout: project
category: "software"
title: "Portfolio Site"
date: 2025-02-05
image: "portfolio.PNG"
description: "Static website powered by Jekyll"
repo: "https://github.com/nzge/nzge.github.io"
toc: true
---

A fusion of minimalist and retro (y2k, early internet, geocities/angelfire) aesthetics. A place for my personal creative expression while accomplishing the task of showing my work.

## Code

### sass
SCSS styling 

| File        | Description |
|------------------|------|
| dracula-syntax.scss | Dracula-themed code syntax highlighter |
| dracula-text.scss |  Dracula-themed markdown text  modifier |
| effects.scss | Effects (gradient background, typewriter text effect) |
| interactive-elements.scss | Interactive Elements|
| pages.scss | Page-related Formatting |
| sections.scss | Page section related Formatting |
| style.scss | General Styling|

### assets
#### jS
**wow.js**  
https://wowjs.uk  
Scrolling animations

**main.js**  
A collection of javascript functions that are paired with physical buttons styled in css and instantiated in HTML.

| Function         | Description |
|------------------|------|
| Go Back | Takes you back to the previous page |
| Sort | Display projects accomadating various sorting criteria |
| Toggle collapse | Toggle Collapse for code blocks |
| Slideshow | dynamically display slideshow images, captions, the slide number, and dot indicator|
| Back to top | make back to top button appear after scrolling down, and take you back to top if clicked |

#### CSS
**animate.css**\
https://animate.style/
CSS library for element animations

**main.scss**
Combines and compiles all sass files.

#### Media storage
Media stored in folders structured based on what project page they appear in.
Also includes storage of miscellaneous media (gifs, background images, icons/favicons, etc.)

### includes
Modularized HTML code sections to be added to pages using liquid templating language

For example:
```liquid
{% raw %}
  {% include test.html %}
{% endraw %}
```

**Header**
```cpp
{% include head.html %}
```

**Navbar**
```cpp
{% include navbar.html %}
```

**Table of Contents**  
Taken from https://github.com/allejo/jekyll-toc

**Side Menu**
```cpp
{% include side-menu.html %}
```

**Footer**
```cpp
{% include footer.html %}
```

### layouts
Broader scope page templates for markdown pages (about page, contact page, project pages, etc.)

**Default**  
Includes header, footer, navbar, and side menu.

**Project Category Page**  
Implements subcategory and project listing. Sorts the projects by date or name. Coded with Liquid templating

**Project Subcategory Page**  
Sorts the projects within a certain subcategory by date or name.

**Project**  
Template for project documentation.

**Post**  
Template for blog posts.

### config.yml
This config file is meant for settings that affect your whole blog, values which you are expected to set up once and rarely edit after that. For frequent value updates, use Jekyll's data files feature. For technical reasons, this file is *NOT* reloaded automatically when you use 'bundle exec jekyll serve'. A restart of the server process is required to observe changes.

https://learn-the-web.algonquindesign.ca/topics/markdown-yaml-cheat-sheet/#yaml
https://learnxinyminutes.com/docs/yaml/

Site settings used to personalize your new site. If you look in the HTML files, accessed via { { site.title } }, { { site.email } }, etc. Custom variables are allowed, accessible in the templates via { { site.myvariable } }.

```yaml
title: My Website
email: nathange784@gmail.com
description: >- # this means to ignore newlines until "baseurl:"
  my personal website
baseurl: "" # the subpath of your site, e.g. /blog
url: "https://nzge.github.io"
twitter_username: nzge
github_username:  nzge

#remote_theme: jekyll/minima
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
  math_engine: mathjax

highlighter: rouge

sass:
  sass_dir: _sass
  style: compressed
  
plugins:
  - jekyll-contentblocks
  - jekyll-archives
  - jekyll-sitemap
  - jekyll-feed
  - jekyll-github-metadata
  - jekyll-paginate
  - jekyll-seo-tag
  - jekyll-remote-theme
  - jemoji
  - htmlcompressor
  - htmlbeautifier
  # - jekyll-toc

collections:
  projects:
    output: true

defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
  - scope:
      path: ""
    values:
      layout: "default"

#include:
#  - assets/media/_icons
#  - assets/media/_nathan

# Exclude from processing. The following items will not be processed, by default.
# Any item listed under the `exclude:` key here will be automatically added to
# the internal "default list".

# Excluded items can be processed by explicitly listing the directories or
# their entries' file path in the `include:` list.
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/bundle/
  - vendor/cache/
  - vendor/gems/
  - vendor/ruby/
  - archive
```
### gemfile
Installation of bundled Jekyll plugins coded in Ruby
```ruby
# frozen_string_literal: true
source "https://rubygems.org"
gem "bundler"

group :jekyll_plugins do
  gem 'wdm', '>= 0.1.0' if Gem.win_platform?
  gem "jekyll"
  gem 'jekyll-contentblocks'
  gem 'jekyll-archives'
  gem 'jekyll-sitemap'
  gem 'jekyll-feed'
  gem 'jekyll-github-metadata'
  gem 'jekyll-paginate'
  gem 'jekyll-seo-tag'
  gem 'jekyll-remote-theme'
  gem 'htmlcompressor'
  gem 'htmlbeautifier'
  gem "webrick"
  gem 'jemoji'
  # gem 'jekyll-toc'
end

gem "github-pages", "~> 228", require: false

# gem "rails"
gem "minima", "~> 2.5"
gem "rouge", "~> 3.26"

```

### deployment
```yaml
name: Build and Deploy Jekyll Site

on:
  push:
    branches:
      - main  # or your default branch

permissions:  # ✅ Explicitly grant write access
  contents: write
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'  # specify your Ruby version

      - name: Install dependencies
        run: |
          gem install bundler
          bundle install

      - name: Build the Jekyll site
        run: |
          bundle exec jekyll build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

## Build Log

> 4-29-25: Cool randomized gifs
>
> ![Alt text](/assets/media/portfolio_media/4-29-25.PNG){: 
style="height:300px;display: block; margin: auto;"}

> 4-12-25: Added logo to favicon and navbar
>
> ![Alt text](/assets/media/portfolio_media/4-12-25.PNG){: 
style="height:300px;display: block; margin: auto;"}

> 3-8-25: Added gradient background to front page
>
> ![Alt text](/assets/media/portfolio_media/3-8-25.PNG){: 
style="height:300px;display: block; margin: auto;"}

> 3-6-25: Colorful markdown formatting
>
> ![Alt text](/assets/media/portfolio_media/3-6-25.PNG){: 
style="height:300px;display: block; margin: auto;"}

> 2-29-25: Contact page
>
> ![Alt text](/assets/media/portfolio_media/2-29-25.PNG){: 
style="height:300px;display: block; margin: auto;"}


> 2-25-25: Project sorting/display structuring
>
> ![Alt text](/assets/media/portfolio_media/2-25-25.PNG){: 
style="height:400px;display: block; margin: auto;"}

---

## References

Inspiration:  
- ["Complete Responsive Web Design Tutorial - Minimal Portfolio Website" by Codegrid](https://www.youtube.com/watch?v=SFVhAfRHjTo&list=PLTqchMECawAr4xC0UPulEVUqBPYgZU0xG&index=4){:target="_blank"}
- ["Full Screen Overlay Menu (SVG Path Animation) Using HTML, CSS & GSAP" - Inspired By Niccolò Miranda](https://www.youtube.com/watch?v=qn1tcSaJ5XQ&list=PLTqchMECawAr4xC0UPulEVUqBPYgZU0xG&index=1){:target="_blank"}
- ["Swiss web design: simple, but it works. Here's why" by Phoebe Yu](https://www.youtube.com/watch?v=qdHipyZgOTY&t=509s){:target="_blank"}
- [Cameronsworld](https://www.cameronsworld.net/){:target="_blank"}
- [restorativland](https://geocities.restorativland.org/Area51/Dungeon/1092/){:target="_blank"}
- [Sadgrl webring](https://goblin-heart.net/sadgrl/cyberspace/webrings){:target="_blank"}
- [ZJ neocities](https://zj.neocities.org/){:target="_blank"}

Assets: 
- [https://geocities.restorativland.org/](https://geocities.restorativland.org/)
- [https://cyber.dabamos.de/](https://cyber.dabamos.de/)
- [https://gifcities.org/](https://gifcities.org/)

Learning Resourcess:
- [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/){:target="_blank"}
- [https://sass-lang.com/documentation/at-rules/import/](https://sass-lang.com/documentation/at-rules/import/){:target="_blank"}
- w3schools
  - css: [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp){:target="_blank"}
  - html: [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp){:target="_blank"}
  - js: [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp){:target="_blank"}
- [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS){:target="_blank"}