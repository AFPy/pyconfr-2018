PyCon-fr 2016
=============

Vous avez vu une faute ou une erreur ?

Naviguez dans le répertoire ``content/`` ci-dessus et corrigez là :)

Merci

-------------------

Load and update plugins submodule::

    git submodule init
    git submodule update --recursive
    git submodule status

To build the blog, just run::

    make html

and to publish it::

    make publish

Publish to gh-pages::

    make github
