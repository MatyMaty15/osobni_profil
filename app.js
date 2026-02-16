// Fetch data from profile.json
fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Nepodařilo se načíst profil');
        }
        return response.json();
    })
    .then(data => {
        renderProfile(data);
    })
    .catch(error => {
        console.error('Chyba při načítání dat:', error);
        document.getElementById('name').textContent = 'Chyba při načítání profilu';
    });

function renderProfile(data) {
    // Render name
    const nameElement = document.getElementById('name');
    nameElement.textContent = data.name;

    // Render skills
    renderSkills(data.skills);

    // Render interests
    if (data.interests && data.interests.length > 0) {
        renderInterests(data.interests);
    }

    // Render projects
    if (data.projects && data.projects.length > 0) {
        renderProjects(data.projects);
    }
}

function renderSkills(skills) {
    const skillsList = document.getElementById('skills');
    skillsList.innerHTML = '';

    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
}

function renderInterests(interests) {
    const interestsSection = document.getElementById('interests');
    interestsSection.innerHTML = '';

    interests.forEach(interest => {
        const div = document.createElement('div');
        div.className = 'interest-item';
        div.textContent = interest;
        interestsSection.appendChild(div);
    });
}

function renderProjects(projects) {
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = '';

    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project-card';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';
        link.textContent = 'Zobrazit projekt';
        link.className = 'project-link';

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(link);

        projectsSection.appendChild(div);
    });
}
