
function CreateStore(values) {
    let data = {
        categoty: values.categoty,
        store: values.store,
        description: values.description
    }

    if(data.store === "a"){
        data = {
            ...data,
            "the_best": true,
        }
    }
    
    return data;
}

module.exports = CreateStore;
