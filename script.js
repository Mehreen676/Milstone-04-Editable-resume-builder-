var _a, _b, _c;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profilePicture = document.getElementById('profilePicture').value;
    // Education
    var educationEntries = document.querySelectorAll('.education-entry');
    var educationHTML = '';
    educationEntries.forEach(function (entry) {
        var degree = entry.querySelector('.degree').value;
        var institution = entry.querySelector('.institution').value;
        var year = entry.querySelector('.year').value;
        educationHTML += "<li>".concat(degree, " - ").concat(institution, " (").concat(year, ")</li>");
    });
    // Skills
    var skills = document.getElementById('skills').value;
    var skillsArray = skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    // Work Experience
    var workEntries = document.querySelectorAll('.work-entry');
    var workHTML = '';
    workEntries.forEach(function (entry) {
        var jobTitle = entry.querySelector('.job-title').value;
        var company = entry.querySelector('.company').value;
        var years = entry.querySelector('.years').value;
        workHTML += "<li>".concat(jobTitle, " at ").concat(company, " (").concat(years, ")</li>");
    });
    // Display resume
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = "Email: ".concat(email);
    document.getElementById('displayPhone').textContent = "Phone: ".concat(phone);
    // Display profile picture if available
    if (profilePicture) {
        document.getElementById('displayProfilePicture').src = profilePicture;
        document.getElementById('displayProfilePicture').style.display = 'block';
    }
    else {
        document.getElementById('displayProfilePicture').style.display = 'none';
    }
    // Update education, skills, and work experience sections
    document.getElementById('displayEducation').innerHTML = educationHTML;
    document.getElementById('displaySkills').innerHTML = skillsArray;
    document.getElementById('displayWorkExperience').innerHTML = workHTML;
    document.getElementById('resumeDisplay').style.display = 'block';
});
// Add more education fields
(_b = document.getElementById('addEducation')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var educationSection = document.getElementById('educationSection');
    if (educationSection) {
        var newEntry = document.createElement('div');
        newEntry.className = 'education-entry';
        newEntry.innerHTML = "\n                                      <input type=\"text\" placeholder=\"Degree\" class=\"degree\" required>\n                                      <input type=\"text\" placeholder=\"Institution\" class=\"institution\" required>\n                                      <input type=\"text\" placeholder=\"Year\" class=\"year\" required>\n                                  ";
        educationSection.appendChild(newEntry);
    }
});
// Add more work experience fields
(_c = document.getElementById('addWorkExperience')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var workExperienceSection = document.getElementById('workExperienceSection');
    if (workExperienceSection) {
        var newEntry = document.createElement('div');
        newEntry.className = 'work-entry';
        newEntry.innerHTML = "\n                                      <input type=\"text\" placeholder=\"Job Title\" class=\"job-title\" required>\n                                      <input type=\"text\" placeholder=\"Company\" class=\"company\" required>\n                                      <input type=\"text\" placeholder=\"Years\" class=\"years\" required>\n                                  ";
        workExperienceSection.appendChild(newEntry);
    }
});
