# 🔮Hit Artist Analyzer

#### Ever wondered what does Frank Sinatra, The Beatles, Michael Jackson, Eminem and Rihanna have in commons?

<iframe width="560" height="315" src="https://www.youtube.com/embed/bVeVMFlwUb8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Getting started

This repository contains already all the necessary file to produce the end-results.

#### Spotify data download
For downloading lyrics for other artists or Spotify musical data information from other artist, the `spotipy` python package is required:

```
$ pip install spotipy
```

**Usage**:

```
$ cd spotify
$ python scraper.py
```

#### Lyrics preprocessing
For pre-processing the lyrical data, the following python package is required:


```
$ pip install lyricsgenius
```

**Usage**

```
$ cd lyrics
$ python scaper.py --artist_name Eminem --max_songs 10
```

Will download 10 lyrics from Eminem and store it into `./data/lyrics/Lyrics_Eminem_clean.csv`.


## Repository structure

#### Data

`data` Contains both Spotify and lyrics data used throughout the whole analysis. 

#### Lyrics

`lyrics` contains the code to scrape the lyrics from Genius.com.

Usage example:
```
$ cd lyrics
$ python scraper.py --artist Eminem --max_songs 100
```

#### Milestones

- [Milestone 1](/milestones/milestone_1.md)
- [Milestone 2](/milestones/milestone_2.md)
   - 2 pages PDF report: [milestone_2.pdf](/milestones/milestone_2.pdf)


#### Notebooks

`notebooks`

Collection of Jupyter Notebooks used during pre-processing and for analysis.
 

#### Processbook

`processbook`

Processbook link: [processbook.pdf](/processbook/processbook.pdf)


#### Spotify

`spotify_lyrics` contains all code to produce the different widgets that will be shown on the final website.


#### Website

`website` contains all HTML/CSS/Javascript code to produce the [final website](https://hit-artist-analyzer.now.sh).

#### Widgets

The `widgets` contains the three core widgets shown in the final website.


# Team members

| Student's name  | SCIPER |
| --------------  | ------ |
| Baudoin de Sury | 260233 |
| Jonathan Besomi | 258689 |
| Julien Salomon  | 260233 |
