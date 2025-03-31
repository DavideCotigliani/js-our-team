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
                    <div class="team-card d-flex my-4">
                          <div class="card-image">
                          <img src="./${member.img}" alt="Immagine di ${member.name}" class="img-fluid">
                          </div>
                        <div class="card-text my-5 ms-3">
                            <h4>${member.name}</h4>
                            <p>${member.role}</p>
                            <a href="mailto:${member.email}">${member.email}</a>
                        </div>
                    </div>
                </div>`;
               return card;
}

// funzione per renderizzare il contenuto dell'array
const renderTeam = () => {
// variabile con stringa vuota che conterrà le colonne da mostrare concatenandole come stringhe
let cards = "";
// ciclo array con le componenti del team passato come parametro
for(let i = 0; i<teamMembers.length; i++){
  //concateno il valore contenuto in cards con quello della funzione createdMemberCard (una stringa)
  cards += createMemberCard(teamMembers[i])
}
//recupero l'id della riga che mi serve e assegno il contenuto della varuabile cards
document.getElementById('team-members').innerHTML = cards;
}
// chiamata della funzione renderTeam
renderTeam();

// recupero gli elementi del dom della form
const name = document.getElementById('name')
const role = document.getElementById('role')
const image = document.getElementById('immagine')
const button = document.getElementById('send')
const membersList = document.getElementById('team-members')

// creo l'addEventListener
button.addEventListener('click', (e)=> {
  e.preventDefault();

const nomeInput= name.value;
const roleInput= role.value;
const imageInput = image.value;

if(!name || !role || !image){
  alert('Devi inserire tutti i campi')
  return;
}
// creo l'oggetto da inserire nell'array
const newMember = {
  name:nomeInput,
  role: roleInput,
  image: imageInput,
}

teamMembers.push(newMember);

name.value = '';
role.value = '';
image.value = '';
renderTeam(teamMembers)

})