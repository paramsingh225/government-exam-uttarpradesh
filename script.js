// ==========================================
// UP GOVERNMENT EXAM DATABASE
// ==========================================

const exams = [

{
    id: 1,
    name: "UPPSC PCS",
    category: "UPPSC",
    authority: "Uttar Pradesh Public Service Commission",
    description: "Combined State / Upper Subordinate Services Examination",
    eligibility: "Generally a Bachelor's degree. Post-specific conditions may apply.",
    official: "https://uppsc.up.nic.in/",
    pattern: "Preliminary Examination, Main Examination and Interview",

    syllabus: {

        "Prelims - General Studies I": [
            "History of India and Indian National Movement",
            "Indian and World Geography",
            "Indian Polity and Governance",
            "Constitution and Political System",
            "Economic and Social Development",
            "General Science",
            "Environmental Ecology and Biodiversity",
            "Current Events of National and International Importance",
            "Special Knowledge of Uttar Pradesh"
        ],

        "Prelims - General Studies II (CSAT)": [
            "Comprehension",
            "Interpersonal and Communication Skills",
            "Logical Reasoning",
            "Analytical Ability",
            "Decision Making",
            "General Mental Ability",
            "Elementary Mathematics",
            "Data Interpretation",
            "Hindi and English Comprehension"
        ],

        "Mains - General Hindi": [
            "Vocabulary",
            "Grammar",
            "Sentence Correction",
            "Precis Writing",
            "Essay and Letter Writing"
        ],

        "Mains - Essay": [
            "Literature and Culture",
            "Social Issues",
            "Political Issues",
            "Science and Technology",
            "Environment",
            "Agriculture",
            "Economy",
            "National and International Events"
        ],

        "Mains - General Studies": [
            "Indian History and Culture",
            "Indian Constitution and Governance",
            "Indian Economy",
            "Geography",
            "Science and Technology",
            "Environment and Disaster Management",
            "Ethics and Integrity",
            "Uttar Pradesh History, Geography and Administration"
        ]

    }

},


{
    id: 2,
    name: "UPPSC RO/ARO",
    category: "UPPSC",
    authority: "UPPSC",
    description: "Review Officer / Assistant Review Officer",
    eligibility: "Generally Bachelor's degree; computer and typing requirements may apply.",
    official: "https://uppsc.up.nic.in/",
    pattern: "Preliminary and Main Examination, with applicable typing/computer tests",

    syllabus: {

        "General Studies": [
            "Indian History",
            "Indian National Movement",
            "Indian Geography",
            "Indian Polity",
            "Indian Economy",
            "General Science",
            "Current Affairs",
            "Uttar Pradesh General Knowledge"
        ],

        "General Hindi": [
            "Hindi Grammar",
            "Synonyms and Antonyms",
            "Sentence Correction",
            "Comprehension",
            "Vocabulary",
            "Idioms and Phrases"
        ],

        "General Vocabulary": [
            "Word Usage",
            "One Word Substitution",
            "Sentence Formation",
            "Common Errors"
        ],

        "Computer Knowledge": [
            "Computer Fundamentals",
            "Operating Systems",
            "MS Office",
            "Internet",
            "Email",
            "Basic Computer Applications"
        ]

    }

},


{
    id: 3,
    name: "UPPSC APO",
    category: "UPPSC",
    authority: "UPPSC",
    description: "Assistant Prosecution Officer",
    eligibility: "Law degree (LLB) generally required.",
    official: "https://uppsc.up.nic.in/",
    pattern: "Preliminary, Main Examination and Interview",

    syllabus: {

        "General Studies": [
            "Indian History",
            "Indian Geography",
            "Indian Polity",
            "Indian Economy",
            "General Science",
            "Current Affairs"
        ],

        "Law": [
            "Indian Constitution",
            "Indian Penal Code / applicable successor criminal law",
            "Criminal Procedure Code / applicable successor procedural law",
            "Indian Evidence Act / applicable successor evidence law",
            "Civil Procedure",
            "Legal Principles",
            "Criminal Justice System"
        ],

        "General Hindi": [
            "Hindi Grammar",
            "Vocabulary",
            "Sentence Correction",
            "Comprehension"
        ]

    }

},


{
    id: 4,
    name: "UPPSC Civil Judge",
    category: "UPPSC",
    authority: "UPPSC",
    description: "Uttar Pradesh Judicial Service Civil Judge (Junior Division)",
    eligibility: "LLB and other eligibility conditions specified in notification.",
    official: "https://uppsc.up.nic.in/",
    pattern: "Preliminary, Main Examination and Interview",

    syllabus: {

        "Law": [
            "Constitutional Law",
            "Civil Procedure Code",
            "Criminal Law",
            "Law of Evidence",
            "Contract Law",
            "Transfer of Property",
            "Specific Relief",
            "Family Law",
            "Jurisprudence",
            "Local Laws of Uttar Pradesh"
        ],

        "Language": [
            "General Hindi",
            "General English",
            "Essay Writing",
            "Precis Writing"
        ],

        "General Knowledge": [
            "Indian History",
            "Indian Geography",
            "Indian Polity",
            "Current Affairs",
            "General Science"
        ]

    }

},


{
    id: 5,
    name: "UPSSSC PET",
    category: "UPSSSC",
    authority: "Uttar Pradesh Subordinate Services Selection Commission",
    description: "Preliminary Eligibility Test for various Group C recruitments",
    eligibility: "Generally High School or equivalent; check the applicable notification.",
    official: "https://upsssc.gov.in/",
    pattern: "Objective-type preliminary eligibility examination",

    syllabus: {

        "General Knowledge": [
            "Indian History",
            "Indian National Movement",
            "Indian Geography",
            "Indian Economy",
            "Indian Constitution",
            "General Science",
            "Current Affairs",
            "Uttar Pradesh General Knowledge"
        ],

        "General Hindi": [
            "Hindi Grammar",
            "Vocabulary",
            "Sentence Formation",
            "Comprehension"
        ],

        "Reasoning": [
            "Coding-Decoding",
            "Blood Relations",
            "Direction Test",
            "Series",
            "Analogy",
            "Classification",
            "Logical Reasoning"
        ],

        "Mathematics": [
            "Number System",
            "Percentage",
            "Profit and Loss",
            "Ratio and Proportion",
            "Average",
            "Simple Interest",
            "Compound Interest",
            "Time and Work",
            "Time and Distance"
        ],

        "Data Interpretation": [
            "Tables",
            "Graphs",
            "Bar Charts",
            "Data Analysis"
        ],

        "General Awareness": [
            "Important Days",
            "Books and Authors",
            "Awards",
            "Sports",
            "Indian Parliament",
            "International Organisations"
        ],

        "Unseen Hindi Passage": [
            "Reading Comprehension",
            "Inference",
            "Vocabulary"
        ],

        "Elementary English": [
            "Basic Grammar",
            "Vocabulary",
            "Comprehension"
        ]

    }

},


{
    id: 6,
    name: "UPSSSC Lekhpal",
    category: "UPSSSC",
    authority: "UPSSSC",
    description: "Revenue Lekhpal Recruitment",
    eligibility: "Post-specific educational qualification and PET conditions apply.",
    official: "https://upsssc.gov.in/",
    pattern: "Written examination; selection conditions depend on notification",

    syllabus: {

        "General Hindi": [
            "Hindi Grammar",
            "Vocabulary",
            "Sentence Correction",
            "Comprehension"
        ],

        "Mathematics": [
            "Number System",
            "Percentage",
            "Profit and Loss",
            "Simple Interest",
            "Compound Interest",
            "Ratio and Proportion",
            "Average",
            "Mensuration"
        ],

        "General Knowledge": [
            "Indian History",
            "Geography",
            "Indian Constitution",
            "Economy",
            "Current Affairs",
            "Uttar Pradesh General Knowledge"
        ],

        "Rural Development and Rural Society": [
            "Indian Rural Society",
            "Rural Development Programmes",
            "Panchayati Raj",
            "Land Reforms",
            "Agriculture",
            "Rural Economy",
            "Government Schemes",
            "Revenue Administration"
        ]

    }

},


{
    id: 7,
    name: "UPSSSC VDO",
    category: "UPSSSC",
    authority: "UPSSSC",
    description: "Village Development Officer / Gram Vikas Adhikari",
    eligibility: "Notification-specific education and PET requirements.",
    official: "https://upsssc.gov.in/",
    pattern: "Written examination",

    syllabus: {

        "Hindi": [
            "Grammar",
            "Vocabulary",
            "Sentence Correction",
            "Comprehension"
        ],

        "General Knowledge": [
            "History",
            "Geography",
            "Indian Constitution",
            "Current Affairs",
            "Uttar Pradesh GK"
        ],

        "General Intelligence": [
            "Reasoning",
            "Analogy",
            "Series",
            "Coding-Decoding",
            "Classification",
            "Blood Relations"
        ],

        "Rural Development": [
            "Panchayati Raj",
            "Village Administration",
            "Rural Economy",
            "Agriculture",
            "Rural Development Schemes",
            "Social Welfare Programmes"
        ]

    }

},


{
    id: 8,
    name: "UPSSSC Junior Assistant",
    category: "UPSSSC",
    authority: "UPSSSC",
    description: "Junior Assistant Recruitment",
    eligibility: "Generally Intermediate; computer and typing qualifications may apply.",
    official: "https://upsssc.gov.in/",
    pattern: "Written examination, typing test and applicable document verification",

    syllabus: {

        "Hindi": [
            "Hindi Grammar",
            "Vocabulary",
            "Sentence Correction",
            "Comprehension"
        ],

        "Reasoning": [
            "Analogy",
            "Series",
            "Coding-Decoding",
            "Blood Relations",
            "Direction Test",
            "Classification"
        ],

        "General Knowledge": [
            "Indian History",
            "Geography",
            "Polity",
            "Economy",
            "Current Affairs",
            "Uttar Pradesh GK"
        ],

        "Computer Knowledge": [
            "Computer Fundamentals",
            "MS Word",
            "MS Excel",
            "Internet",
            "Email",
            "Operating Systems"
        ]

    }

},


{
    id: 9,
    name: "UPSSSC Stenographer",
    category: "UPSSSC",
    authority: "UPSSSC",
    description: "Stenographer Recruitment",
    eligibility: "Intermediate and prescribed shorthand/typing qualifications may apply.",
    official: "https://upsssc.gov.in/",
    pattern: "Written examination and skill test",

    syllabus: {

        "Hindi": [
            "Grammar",
            "Vocabulary",
            "Sentence Correction",
            "Comprehension"
        ],

        "Reasoning": [
            "Analogy",
            "Series",
            "Coding-Decoding",
            "Logical Reasoning"
        ],

        "General Knowledge": [
            "Indian History",
            "Geography",
            "Constitution",
            "Current Affairs",
            "Uttar Pradesh GK"
        ],

        "Computer": [
            "Computer Basics",
            "MS Office",
            "Internet",
            "Digital Applications"
        ],

        "Skill Test": [
            "Hindi Shorthand",
            "Hindi Typing",
            "English Shorthand or Typing where prescribed"
        ]

    }

},


{
    id: 10,
    name: "UPSSSC Forest Guard",
    category: "UPSSSC",
    authority: "UPSSSC",
    description: "Forest Guard Recruitment",
    eligibility: "Notification-specific educational and physical standards.",
    official: "https://upsssc.gov.in/",
    pattern: "Written examination and physical tests as prescribed",

    syllabus: {

        "General Knowledge": [
            "Indian History",
            "Geography",
            "Constitution",
            "Current Affairs",
            "Uttar Pradesh GK"
        ],

        "General Science": [
            "Physics",
            "Chemistry",
            "Biology",
            "Environment",
            "Ecology"
        ],

        "Mathematics": [
            "Percentage",
            "Ratio",
            "Average",
            "Profit and Loss",
            "Number System"
        ],

        "Reasoning": [
            "Analogy",
            "Series",
            "Coding-Decoding",
            "Classification",
            "Logical Reasoning"
        ]

    }

},


{
    id: 11,
    name: "UPSSSC AGTA",
    category: "UPSSSC",
    authority: "UPSSSC",
    description: "Agriculture Technical Assistant",
    eligibility: "Agriculture qualification and other conditions as notified.",
    official: "https://upsssc.gov.in/",
    pattern: "Written examination",

    syllabus: {

        "Agriculture": [
            "Agronomy",
            "Soil Science",
            "Horticulture",
            "Plant Breeding",
            "Plant Pathology",
            "Agricultural Economics",
            "Agricultural Extension",
            "Irrigation",
            "Crop Production",
            "Agricultural Schemes"
        ],

        "General Knowledge": [
            "Current Affairs",
            "Indian Agriculture",
            "Uttar Pradesh Agriculture",
            "General Science"
        ]

    }

},


{
    id: 12,
    name: "UP Police Constable",
    category: "POLICE",
    authority: "UP Police Recruitment and Promotion Board",
    description: "Civil Police Constable Recruitment",
    eligibility: "Generally Intermediate or equivalent.",
    official: "https://uppbpb.gov.in/",
    pattern: "Objective written examination, followed by applicable physical and document tests",

    syllabus: {

        "General Knowledge": [
            "General Science",
            "Indian History",
            "Indian Constitution",
            "Indian Economy",
            "Indian Agriculture",
            "Indian Geography",
            "World Geography",
            "Uttar Pradesh GK",
            "Current Affairs",
            "Cyber Crime",
            "Human Rights",
            "Internal Security"
        ],

        "General Hindi": [
            "Hindi Grammar",
            "Vocabulary",
            "Synonyms",
            "Antonyms",
            "Sentence Correction",
            "Comprehension",
            "Idioms and Phrases"
        ],

        "Numerical Ability": [
            "Number System",
            "Percentage",
            "Ratio",
            "Average",
            "Profit and Loss",
            "Simple Interest",
            "Compound Interest",
            "Time and Work",
            "Time and Distance",
            "Mensuration"
        ],

        "Mental Ability and Reasoning": [
            "Logical Reasoning",
            "Analogy",
            "Coding-Decoding",
            "Blood Relations",
            "Direction Test",
            "Series",
            "Classification",
            "Visual Memory",
            "Problem Solving"
        ]

    }

},


{
    id: 13,
    name: "UP Police SI",
    category: "POLICE",
    authority: "UP Police Recruitment and Promotion Board",
    description: "Sub Inspector Civil Police Recruitment",
    eligibility: "Generally Bachelor's degree.",
    official: "https://uppbpb.gov.in/",
    pattern: "Objective written examination and prescribed physical tests",

    syllabus: {

        "General Hindi": [
            "Hindi Grammar",
            "Vocabulary",
            "Comprehension",
            "Sentence Correction",
            "Idioms"
        ],

        "General Knowledge and Current Affairs": [
            "Indian History",
            "Indian Constitution",
            "Geography",
            "Economy",
            "Science",
            "Current Affairs",
            "Uttar Pradesh GK",
            "Government Schemes"
        ],

        "Numerical and Mental Ability": [
            "Percentage",
            "Profit and Loss",
            "Ratio",
            "Average",
            "Time and Work",
            "Simple Interest",
            "Data Interpretation"
        ],

        "Mental Aptitude and IQ": [
            "Logical Reasoning",
            "Coding-Decoding",
            "Analogy",
            "Series",
            "Decision Making",
            "Problem Solving",
            "Law and Order Awareness",
            "Public Interest"
        ]

    }

},


{
    id: 14,
    name: "UP Police ASI",
    category: "POLICE",
    authority: "UP Police Recruitment and Promotion Board",
    description: "Assistant Sub Inspector (Clerk / Accounts)",
    eligibility: "Post-specific degree, computer and typing qualifications.",
    official: "https://uppbpb.gov.in/",
    pattern: "Written examination and applicable skill tests",

    syllabus: {

        "General Hindi": [
            "Grammar",
            "Vocabulary",
            "Comprehension",
            "Sentence Correction"
        ],

        "General Knowledge": [
            "Indian History",
            "Geography",
            "Polity",
            "Economy",
            "Current Affairs"
        ],

        "Numerical Ability": [
            "Arithmetic",
            "Percentage",
            "Ratio",
            "Average",
            "Profit and Loss"
        ],

        "Mental Ability": [
            "Reasoning",
            "Analogy",
            "Series",
            "Coding-Decoding"
        ],

        "Computer Knowledge": [
            "Computer Fundamentals",
            "MS Office",
            "Internet",
            "Digital Communication"
        ]

    }

},


{
    id: 15,
    name: "UP Police Computer Operator",
    category: "POLICE",
    authority: "UP Police Recruitment and Promotion Board",
    description: "Computer Operator Grade A",
    eligibility: "Intermediate with prescribed computer qualification, as notified.",
    official: "https://uppbpb.gov.in/",
    pattern: "Written examination and applicable typing/skill test",

    syllabus: {

        "Computer Science": [
            "Computer Fundamentals",
            "Operating Systems",
            "Computer Networks",
            "Database Management",
            "Programming Basics",
            "Internet",
            "Cyber Security",
            "Office Applications"
        ],

        "General Knowledge": [
            "History",
            "Geography",
            "Constitution",
            "Current Affairs"
        ],

        "Mental Ability": [
            "Reasoning",
            "Analogy",
            "Series",
            "Coding-Decoding"
        ]

    }

},


{
    id: 16,
    name: "UP TET",
    category: "OTHER",
    authority: "Uttar Pradesh Examination Regulatory Authority",
    description: "Uttar Pradesh Teacher Eligibility Test",
    eligibility: "Teacher-training qualification and other conditions as notified.",
    official: "https://updeled.gov.in/",
    pattern: "Paper I (Primary) and Paper II (Upper Primary)",

    syllabus: {

        "Child Development and Pedagogy": [
            "Child Development",
            "Learning and Pedagogy",
            "Inclusive Education",
            "Individual Differences"
        ],

        "Language I": [
            "Language Comprehension",
            "Grammar",
            "Language Development",
            "Teaching Methods"
        ],

        "Language II": [
            "Comprehension",
            "Communication",
            "Language Skills",
            "Teaching Methods"
        ],

        "Mathematics": [
            "Number System",
            "Geometry",
            "Mensuration",
            "Mathematical Reasoning",
            "Mathematics Pedagogy"
        ],

        "Environmental Studies": [
            "Family and Friends",
            "Food and Shelter",
            "Water",
            "Travel",
            "Environment",
            "EVS Pedagogy"
        ],

        "Social Studies / Science": [
            "History",
            "Geography",
            "Political Science",
            "Science",
            "Subject Pedagogy"
        ]

    }

},


{
    id: 17,
    name: "UP B.Ed JEE",
    category: "OTHER",
    authority: "Designated UP B.Ed Entrance Examination University",
    description: "Uttar Pradesh Bachelor of Education Entrance Examination",
    eligibility: "Graduation or other qualification as specified in the current admission brochure.",
    official: "https://upbed.nic.in/",
    pattern: "Entrance examination; pattern may vary by admission year",

    syllabus: {

        "General Knowledge": [
            "History",
            "Geography",
            "Indian Constitution",
            "Current Affairs",
            "General Science"
        ],

        "Language": [
            "Hindi",
            "English",
            "Comprehension",
            "Grammar",
            "Vocabulary"
        ],

        "General Aptitude": [
            "Reasoning",
            "Logical Ability",
            "Analytical Ability",
            "Decision Making"
        ],

        "Teaching Aptitude": [
            "Teaching Profession",
            "Classroom Management",
            "Educational Psychology",
            "Communication Skills"
        ]

    }

},


{
    id: 18,
    name: "JEECUP Polytechnic",
    category: "OTHER",
    authority: "Joint Entrance Examination Council, Uttar Pradesh",
    description: "UP Polytechnic Entrance Examination",
    eligibility: "Varies by group and programme.",
    official: "https://jeecup.admissions.nic.in/",
    pattern: "Group-wise entrance examination",

    syllabus: {

        "Physics": [
            "Motion",
            "Force",
            "Work and Energy",
            "Electricity",
            "Heat",
            "Light"
        ],

        "Chemistry": [
            "Atomic Structure",
            "Chemical Reactions",
            "Acids and Bases",
            "Metals and Non-metals",
            "Basic Chemistry"
        ],

        "Mathematics": [
            "Algebra",
            "Trigonometry",
            "Geometry",
            "Mensuration",
            "Statistics",
            "Number System"
        ]

    }

},


{
    id: 19,
    name: "UPPSC Assistant Conservator of Forest",
    category: "UPPSC",
    authority: "UPPSC",
    description: "Assistant Conservator of Forest and Regional Forest Officer",
    eligibility: "Specified science, agriculture or engineering degree subjects.",
    official: "https://uppsc.up.nic.in/",
    pattern: "Preliminary, Main and Interview stages as notified",

    syllabus: {

        "General Studies": [
            "Indian History",
            "Geography",
            "Constitution",
            "Economy",
            "Current Affairs",
            "Environment"
        ],

        "Optional Science Subjects": [
            "Agriculture",
            "Botany",
            "Chemistry",
            "Forestry",
            "Mathematics",
            "Physics",
            "Statistics",
            "Zoology",
            "Geology",
            "Engineering subjects as permitted"
        ]

    }

},


{
    id: 20,
    name: "UPPSC Assistant Professor",
    category: "UPPSC",
    authority: "UPPSC",
    description: "Government Degree College Assistant Professor",
    eligibility: "Relevant postgraduate degree and prescribed eligibility criteria.",
    official: "https://uppsc.up.nic.in/",
    pattern: "Screening examination and further selection stages as notified",

    syllabus: {

        "Subject Knowledge": [
            "Relevant postgraduate subject syllabus",
            "Core concepts",
            "Advanced subject knowledge",
            "Research methodology",
            "Teaching aptitude"
        ],

        "General Studies": [
            "General Awareness",
            "Current Affairs",
            "Indian Constitution",
            "Education",
            "Reasoning"
        ]

    }

}

];


// ==========================================
// INITIALIZE WEBSITE
// ==========================================

document.getElementById("totalExams").innerText =
    exams.length;

displayExams(exams);


// ==========================================
// DISPLAY EXAMS
// ==========================================

function displayExams(data) {

    const grid =
        document.getElementById("examGrid");

    grid.innerHTML = "";

    document.getElementById("noResults").hidden =
        data.length !== 0;

    data.forEach(exam => {

        const card = document.createElement("div");

        card.className = "exam-card";

        const title = document.createElement("h3");
        title.textContent = exam.name;

        const description = document.createElement("p");
        description.textContent = exam.description;

        const authority = document.createElement("p");
        authority.textContent = "Authority: " + exam.authority;

        const button = document.createElement("button");
        button.textContent = "View Complete Syllabus";

        button.addEventListener("click", () => {
            showSyllabus(exam.id);
        });

        card.append(title, description, authority, button);

        grid.appendChild(card);

    });

}


// ==========================================
// SEARCH EXAMS
// ==========================================

function searchExams() {

    const query =
        document.getElementById("searchInput")
        .value.toLowerCase().trim();

    const filtered = exams.filter(exam => {

        return (
            exam.name.toLowerCase().includes(query) ||
            exam.category.toLowerCase().includes(query) ||
            exam.description.toLowerCase().includes(query) ||
            exam.authority.toLowerCase().includes(query)
        );

    });

    displayExams(filtered);

}


// ==========================================
// FILTER CATEGORIES
// ==========================================

function filterCategory(category) {

    document.getElementById("searchInput").value = "";

    if (category === "ALL") {

        displayExams(exams);

        return;

    }

    const filtered = exams.filter(exam => {

        return exam.category === category;

    });

    displayExams(filtered);

    document.getElementById("exams")
        .scrollIntoView({ behavior: "smooth" });

}


// ==========================================
// SHOW SYLLABUS
// ==========================================

function showSyllabus(id) {

    const exam = exams.find(e => e.id === id);

    if (!exam) return;

    const container =
        document.getElementById("syllabusDetails");

    let html = `

        <h2>${escapeHTML(exam.name)}</h2>

        <p>
            <strong>Exam Authority:</strong>
            ${escapeHTML(exam.authority)}
        </p>

        <p>
            <strong>Description:</strong>
            ${escapeHTML(exam.description)}
        </p>

        <p>
            <strong>Eligibility:</strong>
            ${escapeHTML(exam.eligibility)}
        </p>

        <p>
            <strong>Exam Pattern:</strong>
            ${escapeHTML(exam.pattern)}
        </p>

        <h3>Complete Subject-wise Syllabus</h3>

    `;

    for (const subject in exam.syllabus) {

        html += `

            <div class="syllabus-section">

                <h3>${escapeHTML(subject)}</h3>

                <ul>

        `;

        exam.syllabus[subject].forEach(topic => {

            html += `
                <li>${escapeHTML(topic)}</li>
            `;

        });

        html += `

                </ul>

            </div>

        `;

    }

    html += `

        <div class="syllabus-section">

            <h3>Official Website</h3>

            <p>
                <a href="${escapeHTML(exam.official)}"
                   target="_blank"
                   rel="noopener noreferrer">

                    Visit Official Examination Website

                </a>
            </p>

        </div>

        <div class="syllabus-section">

            <p>
                <strong>Important:</strong>
                This syllabus is a general preparation outline.
                Verify the latest notification and official
                syllabus PDF before relying on it.
            </p>

        </div>

    `;

    container.innerHTML = html;

    document.getElementById("syllabusModal")
        .style.display = "block";

    document.body.style.overflow = "hidden";

}


// ==========================================
// HTML ESCAPING
// ==========================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"

    })[char]);

}


// ==========================================
// CLOSE MODAL
// ==========================================

function closeModal() {

    document.getElementById("syllabusModal")
        .style.display = "none";

    document.body.style.overflow = "auto";

}


// CLOSE WHEN CLICKING OUTSIDE

window.onclick = function(event) {

    const modal =
        document.getElementById("syllabusModal");

    if (event.target === modal) {

        closeModal();

    }

};


// CLOSE USING ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});

