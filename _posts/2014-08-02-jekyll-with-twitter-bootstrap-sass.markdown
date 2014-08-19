---
layout: post
title:  "Jekyll with Twitter Bootstrap Sass"
date:   2014-08-02
---

{% include _links_library.markdown %}

## Working with Twitter Bootstrap

[Twitter Bootstrap][twb] is a powerful framework to build bulletproof
UIs.

It can be customized on [Bootstrap site][twb-customize] or by using
[Less][Less] or [Sass][Sass] css preprocessors. Less is the default
preprocessor for Bootstrap but a Sass port exists.

It's possible to use both, but as Jekyll nativelly supports Sass,
so, let's go with it !

### Get Twitter Bottstrap Sass files

- Download zip archive from [release page][twb-sass-release].

- Unzip the `assets` folder at the root of your site.

### Configure Jekyll

- Add a Sass configuration parameter :

{% highlight yaml %}
sass:
    sass_dir: assets/css
{% endhighlight %}

- Create an `assets/stylesheets/style.scss` fill with minimum content :

{% highlight css %}
---
---

@import"bootstrap";
{% endhighlight %}

- Include your news Sass generated style sheet in `_includes/head.html`

{% highlight liquid %}
{% raw %}
<link rel="stylesheet" href="{{ "/assets/stylesheets/style.css" | prepend: site.baseurl }}">
{% endraw %}
{% endhighlight %}

- Include bootstrap javascript by adding tags to `_includes/footer.html` at the very end of the file :

{% highlight liquid %}
{% raw %}
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/bootstrap.js"></script>
{% endraw %}
{% endhighlight %}

- Copy `assets/stylesheets/bootstrap/_variables.scss` to `assets/stylesheets/variables.scss`

- In `assets/stylesheets/bootstrap.scss` change import rule `@import "bootstrap/variables";` to `@import "variables";`

- In `assets/stylesheets/variables.scss` change Glyphicon path to `$icon-font-path: "../fonts/bootstrap/" !default;`

### Customizing

To change your site appearance, you just have to change values in `assets/stylesheets/variables.scss`.

And you can add styles in `assets/stylesheets/style.scss`.

Just do a `Jekyll build`, and your scss files are proccessed and a
resulting file is then present in `_site/assets/stylesheets/style.css`.

Nice !
<span class="glyphicon glyphicon-thumbs-up"></span>
