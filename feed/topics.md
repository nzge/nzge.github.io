---
layout: default
title: Topics
description: "topical discussions"
---

<h1>Topics</h1>

{% assign topic_posts = site.posts | where_exp: "post", "post.topics" %}

{% for post in topic_posts %}
  <div>
    <h2>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h2>
    <h3>{{ post.date | date_to_string }}</h3>
    {{ post.excerpt }}
  </div>
  <br>
{% endfor %}