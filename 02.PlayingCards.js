function createCard(face, suit){
    let validFaces = [`2`,`3`,`4`,`5`,`5`,`7`,`8`,`10`,`J`,`Q`,`K`,`A`]
    let suitToString = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };
    if (validFaces.includes(face)==false){
        throw new Error(`Invalid face`)
    }else if (Object.keys(suitToString).includes(suit)==false){
        throw new Error(`Invalid suit`)
    }
    
    return { 
        face, 
        suit,
        toString(){
            return `${face}${suitToString[suit]}`;
        }
    };
}
createCard('A', 'D').toString()