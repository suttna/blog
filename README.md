![Logo](logo.png)

# [Blog](https://blog.suttna.com)

This is the [blog](https://blog.suttna.com) where we write announcements, tip and technial information about [Suttna](https://suttna.com).

## Dependencies

- ruby
- node

## Install

To install you will need to run the ruby gems and node packages.

```zsh
bundle install
yarn install
```

## Build

```
bundle exec jekyll build
```

## Development

```
bundle exec jekyll serve
```

## Deploy

At the moment deploys are running automatically when a commit is merged in the master branch. Github is hosting
the site.

If you want to do a manual deploy, run:

```
./scripts/deploy-ghpages.sh build
```

## Contact

- Martín Ferández <martin@suttna.com>
- Santiago Doldán <santiago@suttna.com>
