---
layout: default
title: Work
---

{% assign base_path = 'projects/project_categories/' %}

<div class="container">
  <section id="projects">
    {% for project in site.pages %}
      {% if project.path contains base_path %}
        {% assign sub_path = project.path | remove_first: base_path %}
        {% unless sub_path contains '/' %}
          <div class="project project-item">
            <h2><a href="{{ project.url }}" class="project-link">{{ project.title }}</a></h2>
            <p>{{ project.description }}</p>
          </div>
        {% endunless %}
      {% endif %}
    {% endfor %}
  </section>
</div>