# travel-app

## GET /v1/countries
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

  
## GET /v1/countries/code/{code}
+ Response 200 (application/json)
    + Body
        {
                "name": string,
                "alpha-3": string,
                "country-code": string,
                "isTapWaterSafe": boolean,
                "tapWaterExtraInfo": string
        }     

## GET /v1/countries/name/{name}
+ Response 200 (application/json)
    + Body
        {
                "name": string,
                "alpha-3": string,
                "country-code": string,
                "isTapWaterSafe": boolean,
                "tapWaterExtraInfo": string
        }
