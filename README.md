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

## nosql scheme

```json
{
  "name": "value set name",
  "key": "private key",
  "value": "expect to return value"
}
```
