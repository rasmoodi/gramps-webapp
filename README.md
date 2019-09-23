# Gramps Web App

This package provides a web frontend to the genealogical database of
the [Gramps](https://gramps-project.org) software. It allows to share
your genalogical research with family members or provides an alternative
way of browsing your records on your local computer.

## Demo

There is a [demo instance](https://agile-bayou-66821.herokuapp.com) using Gramps's example family tree database. Use the password "test".

(NB: initial startup of the demo can take up to a minute since it is hosted on a free Heroku dyno that sleeps after 30 mins of inactivity.)

## Disclaimers

**:warning: This is experimental software. Back up your data before using this on your own database! :warning:**

The project is still in an early stage. Please use the issue system to report problems or suggest enhancements.

**This package is not an official part of the Gramps project.**

## Technologies used

- REST API to the Gramps database based on [Flask](https://palletsprojects.com/p/flask/) and [Flask-RESTful](https://flask-restful.readthedocs.io/) and directly using the Gramps Python package
- Password protection using JSON web tokens (using [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/))
- Progressive web app frontend based on [PWA Starter Kit](https://pwa-starter-kit.polymer-project.org/)

## Features

- Sortable and filtrable people, family, event, source, and place list views
- Map view (based on [Leaflet](https://leafletjs.com/))
- Ancestor tree view
- Galleries with full-size previews and linked person tags, embedded preview for PDFs in Chrome and Firefox
- Most of the family tree data are cached in the browser, making the app fast after the initial loading
- Fully internationalized UI (directly using Gramps's translation strings)

## Installation

At present, the simplest method to install the latest version of the package directly from the repository is

```
python3 -m pip install --user git+https://github.com/DavidMStraub/gramps-webapp.git --upgrade
```

## Running locally

You can try out the web app locally with an existing Gramps database.

**:warning: This is experimental software. Back up your data before trying this! :warning:**

It will only work with SQLite databases (not with BSDDB).
After installation, run

```
gramps_webapp -O 'My family tree' run --without-threads
```

You can find the names of the existing databases and their backends with `gramps -L`.

(NB: single-threaded running is currently necessary because of Gramps's restrictive database locking.)

## Deploying to the web

Instructions will follow.

## Configuration

This is a list of environment variables that affect the web app.

| Variable | Description| 
|---|---|
| `TREE` | Family tree to open (can also be set by the `-O` tag on the command line, see above |
| `PASSWORD` | User password protecting the tree. Empty by default (!) |
| `JWT_SECRET_KEY` | Secret key for the tokens. If not set, a secure key will be generated, stored in the app's root directory, and reused for the next startup. Note that changing the token will require users to log in again. |
| `GRAMPS_EXCLUDE_PRIVATE` | Exclude private records from being shown. Defaults to false. |
| `GRAMPS_EXCLUDE_LIVING` | Do only show names, but no details, of living people. Note that the media objects and events will still be accessible (but not linked to the person). Defaults to false. |

## Current limitations

- No user management
- Tokens have infinite lifetime (refresh tokens would be more secure)
- ~~No display of sources, repositories, and notes~~
- ~~Private records not respected~~
- Read-only (no family tree editing)
- ...

Please use the [issue system](https://github.com/DavidMStraub/gramps-webapp/issues) to report bugs or make feature requests.
