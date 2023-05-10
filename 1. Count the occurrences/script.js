let String = "Spirituality involves the recognition of a feeling or sense or belief that there is something greater than myself something more to being human than sensory experience and that the greater whole of which we are part is cosmic or divine in nature";

function wordCount(string){

    string = string.toLowerCase()
    const words = string.split(' ');
    const wordsCounts = new Object();

    for(let i = 0; i < words.length; i++){
        const word = words[i];
        
        if (!wordsCounts[word]) {
            wordsCounts[word] = 1;
            
        } else {
            wordsCounts[word]++;
        }
    }
    return wordsCounts;
}

const NumOfWords = wordCount(String);
console.log(NumOfWords);