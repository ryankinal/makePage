$(function() {
    var content = {
        'index.html': $('<div>', {'class': 'index'}).makePage({
                subsubtitle: 'Download It!',
                content: $.makePage.list([
                    $.makePage.link('jquery.makepage.js', 'Unminified source'),
                    $.makePage.link('jquery.makepage.js', 'Minified source')
                ])
            }).makePage({
                subsubtitle: 'Include It!',
                content: $.makePage.paragraph('&lt;script type="text/javascript" src="jquery.makepage.min.js"&gt;&lt;/script&gt;', 'code')
            }).makePage({
                subsubtitle: 'Use It!',
                content: $.makePage.paragraph('$("body").makePage({title: "jQuery.makePage", nav: [{url: "index.html", text: "Home"}, {url: "about.html", text: "About"}], content: "Check out my sweet new page I made with makePage!", footer: "Copyright me, Inc. 2011"});', 'code')
            }),
        'options.html': $('<div>', {'class': 'options'}).makePage({
                subsubtitle: 'Options',
                content: [
                    $.makePage.paragraph('There aren\'t actually that many options for makePage. Here\'s the full list'),
                    $.makePage.list([
			'<strong>class</strong> - a classname to be added to the new container',
                        '<strong>title</strong> - the text of the h1 tag for this page',
                        '<strong>subtitle</strong> - the text of the h2 tag for this page',
                        '<strong>subsubtitle</strong> - the text of the h3 tag for this page',
                        '<strong>nav</strong> - an array of objects, each of which has a <em>url</em>, a <em>text</em>, and (optionally) a <em>blank</em>, each of which represents a navigation items',
                        '<strong>content</strong> - any item that can be passed to <em>jQuery.append</em> or an array of such items, these represent the main content of the page',
                        '<strong>footer</strong> - any item that can be passed to <em>jQuery.append</em> and represents the footer of the page'
                    ])
				]
            }).makePage({
                subsubtitle: 'Utitlities',
                content: [
                    $.makePage.paragraph('makePage includes a few utility functions, so you don\'t have to deal with all that pesky HTML'),
                    $.makePage.list([
                        '<strong>link(url, text, blank)</strong> - Creates an anchor tag with href=<em>url</em>, a text value of <em>text</em> and, if <em>blank</em> is true, target=&quot;_blank&quot;',
                        '<strong>list(items, klass)</strong> - Creates an unordered list out of the items in array <em>items</em>, and the list optionally has className = <em>klass</em>',
                        '<strong>paragraph(content, klass)</strong> - Creates a paragraph with the given content appended to it, and (optionally) className = <em>klass</em>'
                    ])
                ]
            })
    };
    
    var href = window.location.href,
        parts = href.split('/'),
        page = parts.pop().toLowerCase();
    
    $('#container').makePage({
        title: 'jQuery.makePage',
        subtitle: 'We don\'t need no stinkin\' HTML!',
        nav: [
            {url: 'index.html', text: 'Home'},
            {url: 'options.html', text: 'Options'},
            {url: 'nohtml.html', text: 'NoHTML'},
            {url: 'http://jquery.com', text: 'jQuery', blank: true},
            {url: 'http://cowbelljs.com', text: 'Cowbell', blank: true}
        ],
        content: content[page],
        footer: 'Use this plugin for whatever you want, however you want. But don\'t use this plugin.'
    });
});
