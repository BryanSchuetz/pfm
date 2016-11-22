---
title: Members
date: 2015-11-06 18:37:00 -05:00
layout: page
sort: 3
---
Our members are companies that work in international development who have the shared aspiration to contribute to the aid and development conversation in the UK. Our members have a progressive mind set and see the benefits of working collectively to improve transparency, accountability and impact as well as address some of the challenges within our industry.
{% for member in site.members %}
  <div class="member">
    <h1 class="member-title">{{ member.title }}</h1>
    <img src="{{ member.logo-image }}" alt="" class="member-image">
    <p class="member-summary">{{ member.summary }}</p>
  </div>
  {% unless forloop.last %}
<hr>
  {% endunless %}
{% endfor %}
