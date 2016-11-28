---
title: News
date: 2015-11-06 18:37:00 -05:00
position: 4
layout: page
sort: 1
---

{% for article in site.news %}
  <div class="article">
    <h2><a href="{{ article.url }}">{{ article.title }}</a></h2>
    {{ article.excerpt }}
    <a href="{{ article.url }}" class="read-more"><svg class="more--icon" viewBox="0 0 200 200" preserveAspectRatio="xMinYMax meet"><use xlink:href="#more"></use></svg>Read More</a>
  </div>
  {% unless forloop.last %}
<hr>
  {% endunless %}
{% endfor %}
