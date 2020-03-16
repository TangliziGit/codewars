#!/usr/bin/python3
import os
import json

import click
import requests as req
from lxml import etree

home = os.path.expanduser('~')
cookies = json.loads(open(os.path.join(home, '.config/codewars/cookies.json'), 'r').read())
headers = json.loads(open(os.path.join(home, '.config/codewars/headers.json'), 'r').read())

url = "https://www.codewars.com/kata/%s/solutions/%s/me/best_practice"
slug_api = "https://www.codewars.com/api/v1/code-challenges/%s"

exts = {
    "javascript": "js",
    "typescript": "ts",
    "haskell": "hs",
    "python": "py",
    "shell": "sh"
}

xpath = {
    "code": '//ul[@id="solutions_list"]/.//code/text()',
    "kyu": "//main/.//div[@class='inner-small-hex is-extra-wide ']/span/text()",
    "name": "//div[@id='shell']/.//h4/text()",
    "sid": '//ul[@id="solutions_list"]/li/@id',
}

@click.command()
@click.option('--kata', help="the kata id")
@click.option('--lang', help="the language you used", default="javascript")
def crawel(kata, lang):
    resp = req.get(url%(kata, lang), cookies = cookies, headers = headers)
    tree = etree.HTML(resp.text)

    def getSlug(kata):
        resp = req.get(slug_api%kata, headers = headers)
        return json.loads(resp.text)['slug']

    def get(x):
        return tree.xpath(xpath[x])[0]


    code, kyu, slug, sid = get("code"), get("kyu"), getSlug(kata), get('sid')
    kyu = kyu.replace(' ', '')
    ext = exts.get(lang, lang)

    # filename = f"{kyu}.{slug}.{sid}.{ext}"
    filename = f"{kyu}.{slug}.{ext}"
    open(filename, 'w').write(code)
    print(filename, 'saved.')

crawel()
