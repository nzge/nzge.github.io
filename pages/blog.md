---
layout: default
title: Blog
---

<h1>Latest Posts</h1>
<div class="container">
    <ul>
    {% for post in site.posts %}
        <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <h2>{{ page.date | date_to_string }}</h2>
        {{ post.excerpt }}
        </li>
    {% endfor %}
    </ul>
</div>