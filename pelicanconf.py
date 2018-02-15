#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHORS = (u'AFPy',)

SITENAME = u'PyConFr 2018'
SITEURL = 'http://localhost:8000'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'fr'

DEFAULT_PAGINATION = False

THEME = 'theme'
INDEX_SAVE_AS = 'nouvelles.html'

COVER_IMG_URL = '/theme/sidebar.jpg'

SOCIAL = (
    ('Email', 'mailto:contact@pycon.fr'),
    ('RSS', SITEURL + '/feeds/all.atom.xml'),
    ('GitHub', 'https://github.com/AFPy/pyconfr_2018'),
)

MENUITEMS = (
    (u'À propos', '/index.html'),
    (u'Nouvelles', '/nouvelles.html'),
    (u'Programme', '/programme.html'),
    (u'Nos soutiens', '/pages/soutiens.html'),
    (u'Demander une bourse', '/pages/bourse.html'),
    (u'Nous soutenir', '/pages/nous-soutenir.html'),
    (u'Nous contacter', '/pages/nous-contacter.html'),
    (u'Code de conduite', '/pages/code-de-conduite.html'),
    (u'Venir', '/pages/venir.html'),
    (u'Se loger', '/pages/se-loger.html'),
    # (u'Se nourrir', '/pages/se-nourrir.html'),
)
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
STATIC_PATHS = ['css', 'images', 'js', 'documents', 'extra/CNAME',
                'extra/favicon.ico', ]
EXTRA_PATH_METADATA = {'extra/CNAME': {'path': 'CNAME'},
                       'extra/favicon.ico': {'path': 'favicon.ico'},
                       }

PLUGIN_PATHS = ['plugins']
PLUGINS = ['post_stats', 'html_rst_directive', 'assets']
RESPONSIVE_IMAGES = True

# JINJA_ENVIRONMENT = {'extensions': []}

RELATIVE_URLS = True
