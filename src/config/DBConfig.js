export const DBConfig = {
    name:'covDB',
    version : 1 ,
    objectStoresMeta : [
        {
            store : 'covFechas' ,
            storeConfig:{
                keypath: 'id',
                autoIncrement : true
            },
            storeSchema : [
                {
                    name : 'hoy',
                    keypath: 'hoy',
                    options:{
                        unique :false
                }
                },{
                    name: 'datos',
                    keypath : 'datos',
                    options:{
                        unique: false
                    }
                }
            ]
        }
    ]
}