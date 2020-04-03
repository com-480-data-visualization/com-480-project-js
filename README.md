# Music visualized


## Milestone 1

### THE DATASET

The dataset is composed of around 300 music of **Michael Jackson** and features for each of them :

- Title, Album title, Year of release, Music Type…
- Audio features : danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo and time_signature.
- **The lyrics**

The data have been obtained using the API of **Spotify** and **[Genius.com](http://Genius.com)**.

The data-set is relatively clean but needs preprocessing as :

- Delete doublons
- Merge Spotify dataset with Genius dataset
- Select interesting features
- Use **NLP techniques** to extract features from the lyrics

After preprocessing, the dataset is clean and can be extended easily to other artists if needed.

### PROBLEMATIC

How Michael Jackson's songs **evolved** through time, by studying the **musical features** and the lyrics of his songs?
What are the **main topics** ? How large is Michael Jackson **vocabulary**? What are the most used words in his songs?

The aim of this project is to show how the lyrics are related different features to one biggest star in the world. To construct a story on an all-known artist. Therefore, everybody will be curious about this data-visualization.

### Exploratory Data Analysis

The EDA notebook for the lyrics can be found [at the following address](./eda/eda_lyrics.ipynb).

### Related work

Nobody have done such a data analysis on Michael Jackson. However, a lot of work have been done in lyrics analysis.

This is why we think that our project focused on one artist is such a motivation because it is really original and tries to show the evolution of a specific artist. A similar idea already buzzed on [reddit.com](http://reddit.com). Indeed, a designer called Silven created a mock-up of what would be a lyrics based data-visualisation on Eminem but never gave birth to it.


Our first inspiration is therefore the mock-up [Rap Genius 2.0](https://medium.com/svilenk/data-visualization-uncovering-the-hidden-layers-of-hip-hop-lyrics-e6f97be1a932) from Silven.

Other inspiration are comes from [The Pudding](https://pudding.cool/archives/) website, the [New York Time](www.nytimes.com) or other websites.

- [Vocabulary representation over time](https://pudding.cool/projects/vocabulary/)
- [Most Instances of the Same Name in a song](https://pudding.cool/2019/05/names-in-songs/)
- [Representation of audio features](https://www.nytimes.com/interactive/2018/08/09/opinion/do-songs-of-the-summer-sound-the-same.html)



# Team members

| Student's name | SCIPER |
| -------------- | ------ |
|Baudoin Gaëtan Jean Marie von Sury D'Aspremont|260233|
|Jonathan Besomi|258689 |
|Julien Salomon |260233 |


[Milestone 1](#milestone-1-friday-3rd-april-5pm) • [Milestone 2](#milestone-2-friday-1st-may-5pm) • [Milestone 3](#milestone-3-thursday-28th-may-5pm)
