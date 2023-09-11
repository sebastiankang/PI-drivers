const mapDriver = (arr) =>
  arr.map((a) => {
    let imagen = a.image.url;
    //para cuando un driver no tiene imagen
    if (!imagen) {
      imagen =
        "https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-768x768.jpg";
    }
    //logica para corregir teams, ej: "teams": "Porsche, Mercedes AMG, Renault"
    let arrayTeams = [];
    if (a.teams) {
      let team = a.teams?.split(",");

      for (let j = 0; j < team.length; j++) {
        let currentTeam = team[j];
        if (currentTeam[0] === " ") {
          currentTeam = currentTeam.slice(1);
        }
        arrayTeams.push({ name: currentTeam });
      }
    }
    return {
      id: a.id,
      name: a.name.forename,
      surname: a.name.surname,
      description: a.description,
      image: imagen,
      nationality: a.nationality,
      dob: a.dob,
      teams: arrayTeams,
    };
  });

module.exports = mapDriver;
