/*
    makePage: Removes all of the work from doing complicated HTML coding.
    
    options:
        title: this text gets put in the header element, in an H1
        subtitle: this text gets put in the header element in an H2 tag
        subsubtitle: this text gets put in the header element in an H3 tag
        nav: an array of objects, each of which has a "url" and a "text" property
        content: anything that could be passed to jQuery.append, or an array of
            things that could be passed to jQuery.append
        footer: content in the footer
*/
(function($) {
    $.makePage = {
        list: function(items, klass)
        {
            var i,
                list = $('<ul>'),
                item;
            
            for (i = 0; i < items.length; i++)
            {
                item = $('<li />');
                item.append(items[i]);
                list.append(item);
            }
            
            if (klass)
            {
                list.addClass(klass);
            }
            
            return list;
        },
        paragraph: function(content, klass)
        {
            var $p = $('<p />');
            $p.append(content);
            if (klass)
            {
                $p.addClass(klass);
            }
            
            return $p;
        },
        link: function(url, text, blank)
        {
            var $a = $('<a />', {href: url});
            $a.append(text);
            
            if (blank)
            {
                $a.attr('target', '_blank');
            }
            
            return $a;
        }
    };
    
    $.fn.makePage = function(args)
    {
        if (args && typeof args === 'object')
        {
            var $container = $('<div>', {'class': 'container'}),
                $header,
                $h1,
                $h2,
                $h3,
                $left,
                $nav,
                $right = $('<div>', {'class': 'second'}),
                $footer,
                $li,
                i;
                
			if (args['class'])
			{
				$container.addClass(args['class']);
			}
                
            if (args.title || args.subtitle || args.subsubtitle)
            {
                $header = $('<div>', {'class': 'header'});
                
                if (args.title)
                {
                    $h1 = $('<h1>' + args.title + '</h1>');
                    $header.append($h1);
                }
                
                if (args.subtitle)
                {
                    $h2 = $('<h2>' + args.subtitle + '</h1>');
                    $header.append($h2);
                }
                
                if (args.subsubtitle)
                {
                    $h3 = $('<h3>' + args.subsubtitle + '</h3>');
                    $header.append($h3);
                }
                
                $container.append($header);
            }
            
            if (args.nav && args.nav.length)
            {
                $left = $('<div>', {'class': 'first'});
                $nav = $('<ul>', {'class': 'nav'});
                
                for (i = 0; i < args.nav.length; i++)
                {
                    $li = $('<li />');
                    $li.append($.makePage.link(args.nav[i].url, args.nav[i].text, args.nav[i].blank));
                    $nav.append($li);
                }
                
                $left.append($nav);
                $container.append($left);
            }
            
            if (args.content)
            {
                if (args.content.length)
                {
                    for (i = 0; i < args.content.length; i++)
                    {
                        $right.append(args.content[i]);
                    }
                }
                else
                {
                    $right.append(args.content);
                }
            }
            
            $container.append($right);
            
            if (args.footer)
            {
                $footer = $('<div>', {'class': 'footer'});
                $footer.append(args.footer);
                $container.append($footer);
            }
            
            this.append($container);
        }
        
        return $(this);
    };
})(jQuery);