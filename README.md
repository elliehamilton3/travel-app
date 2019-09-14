# Travel App

[Trello board](https://trello.com/b/d581FSCl/travel-app)

## To Run
Prerequisites: 
- Node
- Docker

To spin up the app (and database) run command: `docker-compose up`
To tear down the app use: `docker-compose down`

```apib
# GET /v1/countries
+ Response 200 (application/json)
        + Body
                [
                        {
                                "name": string,
                                "alpha-3": string,
                                "country-code": string,
                                "isTapWaterSafe": boolean,
                                "tapWaterExtraInfo": string
                        },
                        {
                                "name": string,
                                "alpha-3": string,
                                "country-code": string,
                                "isTapWaterSafe": boolean,
                                "tapWaterExtraInfo": string
                        },
                        {
                                "name": string,
                                "alpha-3": string,
                                "country-code": string,
                                "isTapWaterSafe": boolean,
                                "tapWaterExtraInfo": string
                        }
                ]
```

```apib
# GET /v1/countries/code/{code}
+ Response 200 (application/json)
    + Body
        {
                "name": string,
                "alpha-3": string,
                "country-code": string,
                "isTapWaterSafe": boolean,
                "tapWaterExtraInfo": string
        }     
```

```apib
# GET /v1/countries/name/{name}
+ Response 200 (application/json)
    + Body
        {
                "name": string,
                "alpha-3": string,
                "country-code": string,
                "isTapWaterSafe": boolean,
                "tapWaterExtraInfo": string
        }
```