var highFive = function(items) {
    let map = {}
    
    items.forEach(tuple => {
        if (map[tuple[0]]) map[tuple[0]].push(tuple[1])
        else map[tuple[0]] = [tuple[1]]
    })
    
    for (let key in map) {
        map[key].sort((a, b) => b - a)
    }
    
    let sol = []
    
    for (let key in map) {
        let avg = Math.floor(map[key].slice(0,5).reduce((sum, i) => sum + i) / 5)
        sol.push([key, avg])
    }
    
    return sol
};