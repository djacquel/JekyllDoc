---
layout: post
title:  "Jeckyll's configuration"
date:   2014-08-01
---

{% include _links_library.markdown %}

## Base configuration for prod and dev

If you want to install Jekyll, see documentation on [Jekyll website][jekyll], and code on [Jekyll's GitHub repo][jekyll-gh].

Configuration differs between development and production platforms.
We then need to have two different config files.

The production setup is in *_config.yml* and the development
setup, in *_config_dev.yml*, which, at least contents :

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

Whe can now build your new Jekyll site on both environments.
