# travel-app

# GET /message
+ Response 200 (text/plain)

        Hello World!

# GET /v1/countries
+ Response 200 (application/json)
    + Body
           [
                { 
                        "name": "Colombia",
                        "isTapWaterSafe": false,
                        "tapWaterExtraInfo": "It is not safe to drink the tap water anywhere in Colombia"
                },
                { 
                        "name": "Albania",
                        "isTapWaterSafe": false,
                        "tapWaterExtraInfo": "It is not safe to drink the tap water anywhere in Colombia"
                }
           ]

# GET /countries/col
+ Response 200 (application/json)
    + Body
        { 
                "name": "Colombia",
                "isTapWaterSafe": false,
                "tapWaterExtraInfo": "It is not safe to drink the tap water anywhere in Colombia"
        }

# GET /countries/uk
+ Response 200 (application/json)
    + Body
            { "safeTapWater": true }


# GET /countries/albania
+ Response 200 (application/json)
    + Body
            { "safeTapWater": true }