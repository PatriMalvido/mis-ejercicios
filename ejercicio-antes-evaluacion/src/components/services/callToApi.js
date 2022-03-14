const callToApi = () => {
  return fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((user) => {
        return {
          id: user.login.uuid,
          username: user.login.username,
          city: user.location.city,
          country: user.location.country,
          name: user.name.first + ' ' + user.name.last, 
          email: user.email,
          gender: user.gender,
          image: user.picture.large,
          age: user.dob.age,
          //`${user.name.first}  ${user.name.last} Para el nombre puede ser tambien así
        };
      });
    });
};
export default callToApi;
