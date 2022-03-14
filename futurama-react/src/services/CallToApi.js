const CallToApi =()=>{
    return fetch ( 'https://api.sampleapis.com/futurama/characters')

    .then ((reponse)=> reponse.json()) 
    .then ((data)=>{
        const cleanData= data.map((characters)=> {
            return {
                id: characters.id,
                name:characters.name.first +' '+ characters.name.middle +' '+ characters.name.last,
                image: characters.images.main,
                planet: characters.homePlanet,
                job: characters.occupation,
                species: characters.species,
                gender: characters.gender,

              
            };
        });
        console.log(data);
        return cleanData;
    });


};
export default CallToApi;