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

THEME = "theme"
INDEX_SAVE_AS = 'nouvelles.html'

COVER_IMG_URL = '/theme/sidebar.jpg'

SOCIAL = (
    ('Email', 'mailto:contact@pycon.fr'),
    ('RSS', SITEURL + '/feeds/all.atom.xml'),
    ('GitHub', 'https://github.com/AFPy/pyconfr_2016'),
)

MENUITEMS = (
    (u'À propos', '/index.html'),
    (u'Nouvelles', '/archives.html'),
    (u'Programme', '/pages/programme.html'),
    (u'Sponsor', '/pages/sponsor.html'),
    (u'Venir', '/pages/venir.html'),
    (u'Se loger', '/pages/se-loger.html'),
    (u'Se nourrir', '/pages/se-nourrir.html'),
    (u'Nous soutenir', '/pages/soutiens.html'),
    (u'Nous contacter', '/pages/nous-contacter.html'),
    (u'Code de conduite', '/pages/code-de-conduite.html'),
)
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
STATIC_PATHS = ['images', 'documents', 'extra/CNAME', ]
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'}}

PLUGIN_PATHS = ['plugins']
PLUGINS = ['post_stats', 'html_rst_directive', 'assets']
RESPONSIVE_IMAGES = True

RELATIVE_URLS = True
