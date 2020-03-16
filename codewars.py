#!/usr/bin/python3
import os
import json

import click
import requests as req
from lxml import etree

url = "https://www.codewars.com/kata/%s/solutions/%s/me/best_practice"
home = os.path.expanduser('~')
cookies = json.loads(open(os.path.join(home, '.config/codewars/cookies.json'), 'r').read())
headers = {
    "User-Agent": "User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0",
    "Host": "www.codewars.com"
}

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

    def get(x):
        return tree.xpath(xpath[x])[0]


    code, kyu, name, sid = get("code"), get("kyu"), get('name'), get('sid')
    kyu = kyu.replace(' ', '')
    name = '-'.join(name.lower().split(' ')).replace('.', '-')
    ext = exts[lang]

    # filename = f"{kyu}.{name}.{sid}.{ext}"
    filename = f"{kyu}.{name}.{ext}"
    print(filename, 'saved.')
    open(filename, 'w').write(code)

crawel()
