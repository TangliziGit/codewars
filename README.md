# Codewars
<a href="https://www.codewars.com/users/TangliziGit"><img style="float: right" width="250px" src="https://www.codewars.com/users/TangliziGit/badges/large"></a>

To store my solutions to the kata of codewars, and a simple codewars client.

## Client

### Installment

```bash
sudo ln -s /this/repo/path/codewars.py /usr/bin/codewars
```

### Configuration

`~/.config/codewars/cookies.json`: to store your codewars session, got from your browser.  
```json
{
  "__cfduid": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "_session_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "intercom-session-x27gw54w": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxMTh4a2gvQjRPNjh3UT09--e63449b8266dbf79eca6ef0597f89f9de2cb7dbd",
  "remember_user_token": "xxxxxxxxxxxxxxxxxxxxY2RiNmEwMzEwMDFmYTZjMTk3BjoGRVRJIhlZbkZhMVhYTlZ6dkpnZUF5SHEyMgY7AEZJIhYxNTg0MzI3NjU3LjM1Mzg4NQY7AEY=--507ac7f166cba0533a6780d09829a3636dd970ee"
}
```  


`~/.config/codewars/headers.json`: to store your user access key, whose Authorization is codewars api key.
```json
{
  "User-Agent": "User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:73.0) Gecko/20100101 Firefox/73.0",
  "Host": "www.codewars.com",
  "Authorization": "mCDwGHfxo_xxxxx-xxxx"
}
```


### Features

Only download your solution of a kata using the kata id.

### Usage

1. Download your solution by kata id:  
    ```bash
    $ codewars solution -l javascript 541c8630095125aba6000c00
    `6kyu.sum-of-digits-slash-digital-root.js` has been saved.
    ```
