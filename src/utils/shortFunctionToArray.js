export const updateObjectInArray = (items, objPropertyName, itemId, newObject) => {
    return items.map(item => {
        if (item[objPropertyName] === itemId) return {...item, ...newObject};
        else return item;
    })
};