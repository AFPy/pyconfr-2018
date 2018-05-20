#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHORS = (u'AFPy',)

SITENAME = u'PyConFr 2018'
SITEURL = 'http://localhost:8000'

PATH = 'content'
PAGE_PATHS = ['pages/fr', 'pages/en']
ARTICLE_PATHS = ['news/fr', 'news/en']

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'fr'

DEFAULT_PAGINATION = False

COVER_IMG_URL = '/theme/sidebar.jpg'

SOCIAL = (
    ('Email', 'mailto:contact@pycon.fr'),
    ('RSS', SITEURL + '/feeds/all.atom.xml'),
    ('Twitter', 'https://twitter.com/pyconfr'),
    ('GitHub', 'https://github.com/AFPy/pyconfr_2018'),
)

PAGE_URL = '/{slug}'
PAGE_SAVE_AS = '{slug}/index.html'

ARTICLE_URL = 'news/{slug}'
ARTICLE_SAVE_AS = 'news/{slug}/index.html'

INDEX_URL = '/news'
INDEX_SAVE_AS = 'news/index.html'

STATIC_PATHS = [
    'css',
    'images',
    'js',
    'documents',
    'extra/CNAME',
    'extra/favicon.ico',
]
EXTRA_PATH_METADATA = {
    'extra/CNAME': {'path': 'CNAME'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
}

THEME = 'theme'

MENUITEMS = [
    (u'À propos', '/index'),
    (u'Venir', '/traveling-to-pyconfr'),
    (u'Demander une bourse', '/financial-assistance'),
    (u'Nouvelles', '/news'),
    (u'Code de conduite', '/code-of-conduct'),
    (u'Nous soutenir', '/sponsor-pyconfr'),
    # (u'Se loger', '/venue'),
    # (u'Nos soutiens', '/sponsors'),
    # (u'Nous contacter', '/contact'),
]

I18N_SUBSITES = {
    # Not mandatory but provide more convenient urls
    'fr': {
        'THEME': 'theme',
        'STATIC_PATHS': STATIC_PATHS,
        'MENUITEMS': [
            (u'À propos', '/index'),
            (u'Venir', '/traveling-to-pyconfr'),
            (u'Demander une bourse', '/financial-assistance'),
            (u'Nouvelles', '/news'),
            (u'Code de conduite', '/code-of-conduct'),
            (u'Nous soutenir', '/sponsor-pyconfr'),
            # (u'Se loger', '/venue'),
            # (u'Nous contacter', '/contact'),
            # (u'Nos soutiens', '/sponsors'),
        ]
    },
    'en': {
        'THEME': 'theme',
        'STATIC_PATHS': STATIC_PATHS,
        'MENUITEMS': [
            (u'About', '/index'),
            (u'Traveling to PyConFr', '/traveling-to-pyconfr'),
            (u'Financial assistance', '/financial-assistance'),
            (u'News', '/news'),
            (u'Code of conduct', '/code-of-conduct'),
            (u'Sponsor PyConFr', '/sponsor-pyconfr'),
            # (u'Venue', '/venue'),
            # (u'Sponsors', '/sponsors'),
            # (u'Contact', '/contact'),
        ]
    }
}

DELETE_OUTPUT_DIRECTORY = True

DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False

PLUGIN_PATHS = ['plugins']
PLUGINS = ['post_stats', 'html_rst_directive', 'assets', 'i18n_subsites']
RESPONSIVE_IMAGES = True

RELATIVE_URLS = True
