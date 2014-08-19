---
layout: post
title:  "Jekyll documentation and Testbed"
date:   2014-08-19 14:56:13
---

{% include _links_library.markdown %}
# My Jekyll setup

## Base install

See documentation on [Jekyll website][jekyll], and code on
[Jekyll's GitHub repo][jekyll-gh].

Setup differs between development and production platform.
We then need to have two different setup.

The production setup is in *_config.yml* and the development
setup, in *_setup.dev.yml*, which, at least contents :

{% highlight yaml %}
baseurl: "/jekyll/doc/_site"
url: "http://test.dev"
{% endhighlight %}

Note: **baseurl** is very important to set, more than **url**.
This because, it's used to reach assets (css, js, images) by
prepending it to url.

{% highlight liquid %}
{% raw %}
{{ "/bootstrap/css/style.css" | prepend: site.baseurl }}
or
"{{ site.baseurl }}/bootstrap/css/style.css"
{% endraw %}
{% endhighlight %}

Then in development environment, we just have to do :

{% highlight yaml %}
jekyll build --config _config.yml,_config_dev.yml
{% endhighlight %}

With *watch* :

{% highlight yaml %}
jekyll build --config _config.yml,_config_dev.yml -w
{% endhighlight %}


You can now build your new Jekyll site.

