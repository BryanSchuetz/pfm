---
title: Publications
date: 2015-11-06 18:37:00 -05:00
position: 4
layout: page
sort: 3
---
{% for pub in site.publications %}
  <div class="publication">
    <h2><a href="{{ pub.url }}">{{ pub.title }}</a></h2>
    <img src="{{ pub.image }}" alt="">
    <p class="publication-summary">{{ pub.content }}</p>
    <p class="publication-link"><a href="{{ pub.file }}" class="read-more"><svg class="more--icon" viewBox="0 0 200 200" preserveAspectRatio="xMinYMax meet"><use xlink:href="#more"></use></svg>Download</a></p>
  </div>
  {% unless forloop.last %}
<hr>
  {% endunless %}
{% endfor %}
