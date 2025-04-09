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
          <div class=" wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
            <h2><a href="{{ project.url }}" class="project-link">{{ project.title }}</a></h2>
            <p>{{ project.description }}</p>
          </div>
        {% endunless %}
      {% endif %}
    {% endfor %}
  </section>
</div>
