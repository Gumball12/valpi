# valpi

api that returns value

## apis

> https://api.valpi.cc/:name

method|path|response|description
-|-|-|-
GET|`/:name`|`<value>`|get value
PUT|`/:name?value=<value>`|`<key>`|create vlaue
POST|`/:name?value=<value>&key=<key>`|`<value>`|update value
DELETE|`/:name?key=<key>`|`String`|delete value

### errors

name|status code|message
-|-|-
create value|`200`|value created :: private key (for update/delete) => `{ key }`
get data|`200`|`{ data }`
wrong params|`400`|wrong parameters (please check https://git.io/JJs5T)
wrong req body type|`400`|wrong request body type (please use application/json format)
exists name|`403`|already exists name (change your value name)
no exists name|`403`|value not exists (change your value name)
wrong key|`403`|wrong private key
internal server error|`500`|internal server error, sorry :(

## nosql scheme

```json
{
  "name": "value set name",
  "key": "private key",
  "value": "expect to return value"
}
```
