# hexo-theme-adagio
A simple, elegant, calm, responsive Hexo theme

> Adagio is a tempo marking word used in music. My favorite adagio music is Saient Saens' *The Swan*. On the completion of this theme, its melody comes to my mind. So I decide to name this theme by Adagio. I believe the basic inspirations of music and design are identical. -- Hanlin DONG, the author.

DEMO site: [http://www.hanlindong.com](http://www.hanlindong.com)

## Getting started

Clone this repository to your local disk. Copy the directory `adagio` into your Hexo site `themes` folder. In `_config.yml` , replace the default `landscape` theme by `adagio`.

To customize the theme, refer to both this readme and the comments in the `_config.yml` file in the `adagio` directory.

To add static files, e.g. images, create a subdirectory `img` in `adagio/source`, then refer to it as `/img/picture-name.png`.

## Features

- Applause button
- Customizable and responsive top navbar
- Valine comment system
- Responsive picture banner
- Mathjax support
- Social network links
- Google or Baidu analytics
- Configurable CDN provider

## Configurations

### Applause-easy button

This is another open-source project my me. It uses [LeanCloud](https://leancloud.cn) as the backend server. Please refer to [this repo](https://github.com/Hanlin-Dong/applause-easy).

Its basic idea is to let people vote for you as many times as possible, instead of the 'thumb up' button (vote only once).

### Responsive banner

If you want to use your own pictures as banner, config it as the follows

``` yml
img_banner: true
img_banner_large: http://some.url/large.png
img_banner_small: http://some.url/small.png
```

Then, for middle to large screens, the `img_banner_large` will be displayed. For small screens, the `img_banner_small` picture will be displayed.

If you don't want a picture banner, set `img_banner` to false. A pure grey background will take the place.

Note: your site title will not appear if image banner is used.

### Picture or word logo

If you have a picture logo, config with 

``` yml
logo_url: http://some.url/to/picture/
```

If you just want to use a word as the logo, config with

``` yml
logo_url: ~
logo_word: ADAGIO
```

### Navbar

The author agrees that the tags and archives should not appear at the top of the screen. So these links are set to the sidebar. However, if you have other interesting pages that you want to display, please config the navbar.

``` yml
navbar: true
navbar_items:
  - text: Hexo
    url: https://hexo.io
    layout: ~
  - text: Adagio's author
    url: http://www.hanlindong.com
    layout: ~
```

Here, `text` is what will appear in the navbar. `url` can be either relative or absolute url. `layout` is for configuring if the navbar item is 'active'. So if you have a page with a layout made by yourself, put the name of the layout here.

### SEOTitle and favicon

SEOTitle will appear in the title meta for every page. config with

``` yml
SEOTitle: Theme Adagio
```

And also favicon

``` yml
favicon: http://some.url/to/favicon.ico
```

### Social Network

Links to your social network will appear in the `about me` side bar and the `footer` is you with. Config with

``` yml
media_types:
    - github
    - facebook
    - pinterest
    - linkedin
github_username:       xxxx
pinterest_username:    xxxx
facebook_username:     xxxx
linkedin_username:     xxxx
researchgate_username: xxxx
twitter_username:      xxxx
zhihu_username:        xxxx
quora_username:        xxxx
```

It's better to use four buttons. You should find the username in your profile url.

### Math support

If your post contains math equations, you can set math open in the config file.

``` yml
math: true
```

Then, you can type math equations like this

``` markdown
$$E=mc^2$$
```

[KaTeX](https://katex.org/) is used as the engine to render LaTeX math.

### Analytics

This theme supports google analytics and baidu analytics. Login to your analytics provider. Config baidu analytics with your user-specific url, and/or config google analytics with the track id.

``` yml
baidu_analytics: true
baidu_url: https://hm.baidu.com/hm.js?123456789
google_analytics: true
google_track_id: UA-1111111-1
```

### Valine comments

Valine comments is one of the most easy-to-use comment systems available in China and all over the world. You can add comments to each post. See [Valine.js](https://valine.js.org). Config it with appId, appKey, and the comment textarea placeholder.

``` yml
valine_comments: true
valine_appId: xxxxx
valine_appKey: xxxxx
valine_placeholder: Go go go!
```

### CDN or not

You can use CDN to serve the `.css` and `.js` files, or serve by yourself. If your website audience is mainly from China, the author recommends to use `bootcdn`. Otherwise, `cndjs`. Config as

``` yml
use_cdn: true
cdn_provider: bootcdn
```

### Other configurations

`SEOTitle`, `favicon`, `avatar`, `trending`, `address`, `friends`, etc. Check the config file!

## Change log

Current version: v2.0

### v2.0

- Use KaTeX instead of mathjax.
- Add copyright line for posts.
- Improve applause-easy.
- Improve the main css file.
- Merge some partial ejs files.

### v1.0

- Initial release.

## License

MIT License.

## Like this theme?

If you like this theme, please star this repository. If you use this theme for your website, please leave comments to the repository! Everyone else can get inspired.
