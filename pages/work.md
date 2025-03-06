---
layout: default
title: Work
---

<div class="container">
  <section id="projects">
    {% for project in site.pages %}
      {% if project.path contains 'projects/project_categories' %}
        <div class="project wow animate__animated animate__fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
          <p>{{ project.description }}</p>
        </div>
      {% endif %}
    {% endfor %}
  </section>
</div>
