import pandas as pd
import urllib.request
import shutil


def download(url, filename):
    print(url)
    with urllib.request.urlopen(url) as response, open(filename, "wb") as out_file:
        shutil.copyfileobj(response, out_file)


STATE = ["global", "us", "ch"]


def format_date(x):
    return x.strftime("%Y-%m-%d")


URL_SPOTIFY = "https://spotifycharts.com/regional/{state}/daily/{date}/download"

date_range = pd.date_range(start="2017-01-01", end="2020-03-27")
date_range = list(map(format_date, date_range))

for s in STATE:
    for d in date_range[:10]:
        print("Downloading state: {state}, date: {date}".format(state=s, date=d))
        url_spotify = URL_SPOTIFY.format(state=s, date=d)
        filename = "../data/{state}/{state}-{date}.csv".format(state=s, date=d)
        download(url_spotify, filename)
