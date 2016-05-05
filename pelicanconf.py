#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHORS = (
    u'AFPy',
)

SITENAME = u'PyCon-fr 2016'
SITEURL = 'http://localhost:8000'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'fr'

# Social widget
SOCIAL = (('Github', 'https://github.com/AFPy/pyconfr_2016'),)

DEFAULT_PAGINATION = False

THEME = "pure"

COVER_IMG_URL = '/theme/sidebar.jpg'

SOCIAL = (
    ('envelope', 'mailto:pycon-fr@trunat.fr'),
    ('rss', SITEURL + '/feeds/all.atom.xml'),
    ('github', 'https://github.com/AFPy/pyconfr_2016'),
)

MENUITEMS = (
    ('Nouvelles', 'archives.html'),
    (u'Venir', 'pages/venir.html'),
    (u'Se loger', 'pages/se-loger.html'),
    (u'À propos', 'pages/a-propos.html'),
)
STATIC_PATHS = ['images', 'documents', 'extra/CNAME', ]
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}}

PLUGIN_PATHS = ['plugins']
PLUGINS = ['post_stats']
RESPONSIVE_IMAGES = True

RELATIVE_URLS = True
