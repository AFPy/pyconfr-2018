PyCon-fr 2016
=============

Vous avez vu une faute ou une erreur ?

Naviguez dans le répertoire ``content/`` ci-dessus et corrigez-la :)

Merci

-------------------

Load and update plugins submodule::

    git submodule init
    git submodule update --recursive
    git submodule status

Install virtualenv::

    (sudo) pip install virtualenv

To build the site::

    make html

To serve it on http://localhost:8000::

    make serve

and to publish it::

    make publish

Publish to gh-pages::

    make github
