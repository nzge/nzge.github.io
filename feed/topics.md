---
layout: default
title: Topics
description: "topical discussions"
---



<h1>Topics</h1>

<div class="container">

  <div class="go-back" onclick="goBack()">Go Back</div>
  
  <h3 style="text-align: center;">More curated thoughts on topics i deem worth delving into</h3>

  <br>

    <ul>
    {% for post in site.posts %}
        {% if post.type == "topic" %}
            <div>
            <h2 ><a style="color:teal !important; " href="{{ post.url }}">{{ post.title }}</a></h2>
            {{ post.excerpt }}
            </div>
            <br>
        {% endif %}
    {% endfor %}
    </ul>

  <a href="http://validator.w3.org/feed/check.cgi?url=https%3A//nzge.github.io/feed.xml" style="display: block; text-align: center; margin: auto;">
    <img src="/assets/media/!misc/icons/valid-atom.png" alt="[Valid Atom 1.0]" title="Validate my Atom 1.0 feed" />
  </a>

  <br>
  
</div>