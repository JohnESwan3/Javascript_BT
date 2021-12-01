const data = [
  {
    name: 'John Doe',
    age: '32',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Boise ID',
    image: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'Jane Doe',
    age: '24',
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Caldwell ID',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'William Johnson',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;

    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No More profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
