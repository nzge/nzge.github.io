---
layout: default
title: Blog
---

<h1>Word Vomit</h1>

<div class="container">
    <h3 style="text-align: center;">An exercise in thought spillage. Not intended for a human audience. Just a place to project thoughts, coherent or incoherent. Grammar and spell checking in glarging absence. A blissful escape from literary convention</h3>

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