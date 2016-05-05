#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *  # NoQA

SITEURL = 'http://afpy.github.io/pyconfr_2016'
RELATIVE_URLS = True

SOCIAL = (
    ('envelope', 'mailto:pycon-fr@trunat.fr'),
    ('rss', SITEURL + '/feeds/all.atom.xml'),
    ('github', 'https://github.com/AFPy/pyconfr_2016'),
)

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/%s.atom.xml'

DELETE_OUTPUT_DIRECTORY = True


# Following items are often useful when publishing
# DISQUS_SITENAME = "pyconfr-2016"
