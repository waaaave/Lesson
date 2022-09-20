const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;

const processor = (csv) => {
    csv = csv.trim()
    const title = csv.slice(0, csv.indexOf('\n'))
    const titles = title.split(',')
    const rows = csv
        .slice(csv.indexOf('\n') + 1)
        .split('\n')
    const rowData = rows.map(v =>{
        const values = v.split(',');
        return titles.reduce((obj, titles, index) => {
            if (values[index]) {
                obj[titles] = values[index]
            }else{
                obj[titles] = ''
            }
            return obj
        },{})
    })
    return rowData.map(row =>{
        const person = {
            ...row
        }
        const parents = rowData.filter(v => v.name == row.parent)
        const children = rowData.filter(v => v.parent == row.parent)
        if (parents.length) {
            person['parent'] = parents.map(parent =>({
                name: parent.name,
                age:parent.age
            }))
        }else{
            person['parent'] = []
        }

        if(children.length) {
            person['child'] = children.map(child =>({
                name: child.name,
                age:child.age
            }))
        }else{
            person['child'] = []
        }
        return person
    })

}
console.log(processor(csv));