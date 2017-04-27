#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *  # NoQA

SITEURL = 'https://www.pycon.fr/2017'
RELATIVE_URLS = False

SOCIAL = (
    ('Email', 'mailto:contact@pycon.fr'),
    ('RSS', SITEURL + '/feeds/all.atom.xml'),
    ('GitHub', 'https://github.com/AFPy/pyconfr_2017'),
)

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True
