---
layout: default
title: Blog
---

<h1>Word Vomit</h1>

<div class="container">

    <h3 style="text-align: justify;">An exercise in thought spillage. Not intended for a human audience. Just a place to project thoughts, coherent or incoherent. Grammar and spell checking in glarging absence. A blissful escape from literary convention</h3>

  <br>

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

  <a href="http://validator.w3.org/feed/check.cgi?url=https%3A//nzge.github.io/feed.xml" style="display: block; text-align: center; margin: auto;">
    <img src="/assets/media/!misc/icons/valid-atom.png" alt="[Valid Atom 1.0]" title="Validate my Atom 1.0 feed" />
  </a>

  <br>
  
</div>