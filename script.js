const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//funzione per creare la singola card del membro del team
const createMemberCard = (member) => {
  const card = `<div class="col-12 col-md-6 col-lg-4">
                    <div class="team-card">
                          <div class="card-image">
                          <img src="./img/male1.png" alt="" class="img-fluid">
                          </div>
                        <div class="card-text">
                            <h4>Marco Bianchi</h4>
                            <p>Designer</p>
                            <a href="marcobianchi@team.com">marcobianchi@team.com</a>
                        </div>
                    </div>
                </div>`;
               //recupero l'id della riga che mi serve e concateno l'elemento card
               document.getElementById('team-members').innerHTML +=card;
}
// ciclo gli elementi dell'array di oggetti
for(let i= 0;i<teamMembers.length; i++){
  createMemberCard(teamMembers[i]);
}

