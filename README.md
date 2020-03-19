# Codewars
<a href="https://www.codewars.com/users/TangliziGit"><img style="float: right" width="250px" src="https://www.codewars.com/users/TangliziGit/badges/large"></a>

To store my solutions to the kata of codewars, and a simple codewars client.

## Client

### Installment

```bash
sudo ln -s /this/repo/path/codewars.py /usr/bin/codewars
```

### Configuration

`~/.config/codewars/cookies.json`: to store your codewars session.  
`~/.config/codewars/headers.json`: to store your user access key.


### Features

Only download your solution of a kata using the kata id.

### Usage

1. Download your solution by kata id:  
    ```bash
    $ codewars solution -l javascript 541c8630095125aba6000c00                                 -- INSERT --
    `6kyu.sum-of-digits-slash-digital-root.js` has been saved.
    ```
