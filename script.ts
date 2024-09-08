document.getElementById('resumeForm')?.addEventListener('submit', function (e) {
                              e.preventDefault();
                          
                              // Get user input
                              const name = (document.getElementById('name') as HTMLInputElement).value;
                              const email = (document.getElementById('email') as HTMLInputElement).value;
                              const phone = (document.getElementById('phone') as HTMLInputElement).value;
                              const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).value;
                          
                              // Education
                              const educationEntries = document.querySelectorAll('.education-entry');
                              let educationHTML = '';
                              educationEntries.forEach((entry) => {
                                  const degree = (entry.querySelector('.degree') as HTMLInputElement).value;
                                  const institution = (entry.querySelector('.institution') as HTMLInputElement).value;
                                  const year = (entry.querySelector('.year') as HTMLInputElement).value;
                                  educationHTML += `<li>${degree} - ${institution} (${year})</li>`;
                              });
                          
                              // Skills
                              const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
                              const skillsArray = skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
                          
                              // Work Experience
                              const workEntries = document.querySelectorAll('.work-entry');
                              let workHTML = '';
                              workEntries.forEach((entry) => {
                                  const jobTitle = (entry.querySelector('.job-title') as HTMLInputElement).value;
                                  const company = (entry.querySelector('.company') as HTMLInputElement).value;
                                  const years = (entry.querySelector('.years') as HTMLInputElement).value;
                                  workHTML += `<li>${jobTitle} at ${company} (${years})</li>`;
                              });
                          
                              // Display resume
                              (document.getElementById('displayName') as HTMLHeadingElement).textContent = name;
                              (document.getElementById('displayEmail') as HTMLParagraphElement).textContent = `Email: ${email}`;
                              (document.getElementById('displayPhone') as HTMLParagraphElement).textContent = `Phone: ${phone}`;
                          
                              // Display profile picture if available
                              if (profilePicture) {
                                  (document.getElementById('displayProfilePicture') as HTMLImageElement).src = profilePicture;
                                  (document.getElementById('displayProfilePicture') as HTMLImageElement).style.display = 'block';
                              } else {
                                  (document.getElementById('displayProfilePicture') as HTMLImageElement).style.display = 'none';
                              }
                          
                              // Update education, skills, and work experience sections
                              (document.getElementById('displayEducation') as HTMLUListElement).innerHTML = educationHTML;
                              (document.getElementById('displaySkills') as HTMLUListElement).innerHTML = skillsArray;
                              (document.getElementById('displayWorkExperience') as HTMLUListElement).innerHTML = workHTML;
                          
                              document.getElementById('resumeDisplay')!.style.display = 'block';
                          });
                          
                          // Add more education fields
                          document.getElementById('addEducation')?.addEventListener('click', function () {
                              const educationSection = document.getElementById('educationSection');
                              if (educationSection) {
                                  const newEntry = document.createElement('div');
                                  newEntry.className = 'education-entry';
                                  newEntry.innerHTML = `
                                      <input type="text" placeholder="Degree" class="degree" required>
                                      <input type="text" placeholder="Institution" class="institution" required>
                                      <input type="text" placeholder="Year" class="year" required>
                                  `;
                                  educationSection.appendChild(newEntry);
                              }
                          });
                          
                          // Add more work experience fields
                          document.getElementById('addWorkExperience')?.addEventListener('click', function () {
                              const workExperienceSection = document.getElementById('workExperienceSection');
                              if (workExperienceSection) {
                                  const newEntry = document.createElement('div');
                                  newEntry.className = 'work-entry';
                                  newEntry.innerHTML = `
                                      <input type="text" placeholder="Job Title" class="job-title" required>
                                      <input type="text" placeholder="Company" class="company" required>
                                      <input type="text" placeholder="Years" class="years" required>
                                  `;
                                  workExperienceSection.appendChild(newEntry);
                              }
                          });
                          