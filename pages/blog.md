---
layout: default
title: Blog
---

<h1>Posts</h1>
<div class="container">
    <ul>
    {% for post in site.posts %}
        <div>
        <h2 ><a style="color:teal !important; " href="{{ post.url }}">{{ post.title }}</a></h2>
        <h3>{{ post.date | date_to_string }}</h3>
        {{ post.excerpt }}
        </div>
        
        <br>
    {% endfor %}
    </ul>
</div>