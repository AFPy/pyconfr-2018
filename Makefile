PELICANOPTS=

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/output
CONFFILE=$(BASEDIR)/pelicanconf.py
PUBLISHCONF=$(BASEDIR)/publishconf.py

GITHUB_PAGES_BRANCH=gh-pages

AFPY_OUTPUTDIR=$(BASEDIR)/output/
AFPY_PUBLISH_URL=pyconfr@pyconfr:pyconfr-2017/

VENV := $(shell echo $${VIRTUAL_ENV-$(shell pwd)/.venv})
VIRTUALENV = virtualenv
INSTALL_STAMP = $(VENV)/.install.stamp

PYTHON=$(VENV)/bin/python
PELICAN=$(VENV)/bin/pelican
PIP=$(VENV)/bin/pip

DEBUG ?= 0
ifeq ($(DEBUG), 1)
	PELICANOPTS += -D
endif

install: $(INSTALL_STAMP)
$(INSTALL_STAMP): $(PYTHON) requirements.txt
	$(VENV)/bin/pip install -r requirements.txt
	touch $(INSTALL_STAMP)

virtualenv: $(PYTHON)
$(PYTHON):
	$(VIRTUALENV) $(VENV)

html: install
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

clean:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)
	rm -rf $(VENV)

serve: install
ifdef PORT
	cd $(OUTPUTDIR) && $(PYTHON) -m pelican.server $(PORT)
else
	cd $(OUTPUTDIR) && $(PYTHON) -m pelican.server 8000
endif

regenerate:
	cd $(OUTPUTDIR) && $(PYTHON) -m pelican.server &
	$(PELICAN) -r $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

publish: install
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) $(PELICANOPTS)
	echo "www.pycon.fr" > $(OUTPUTDIR)/CNAME

github: publish
	$(VENV)/bin/ghp-import -b $(GITHUB_PAGES_BRANCH) $(OUTPUTDIR)
	git push origin $(GITHUB_PAGES_BRANCH) --force

afpy: publish
	rsync -avz -e ssh $(AFPY_OUTPUTDIR) $(AFPY_PUBLISH_URL)

.PHONY: html clean serve devserver github publish afpy
