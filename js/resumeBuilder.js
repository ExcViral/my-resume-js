var bio = {
    "name": "Viral Patel",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9408995744",
        "email": "exc.viral@gmail.com",
        "github": "ExcViral",
        "location": "Gandhinagar, Gujarat, India"
    },
    "welcomeMessage": "Hi, I am currently pursuing B.Tech. in Computer Science and Engineering course at Indian Institute of Information Technology, Vadodara. I love challenges. Winning is my passion. And, I play Chess!",
    "skills": ["Graphic Design", "Web Design", "Web Development"],
    "biopic": "images/fry.jpg",
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedContactInfo = [];
        formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(var i = 0; i < bio.skills.length; i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }
        for(var contact = 0; contact < formattedContactInfo.length; contact++) {
            $("#topContacts").append(formattedContactInfo[contact]);
            $("#footerContacts").append(formattedContactInfo[contact]);
        }
    }
};

var education = {
    "schools": [
        {
            "name": "Indian Institute of Information Technology Vadodara",
            "location": "Gandhinagar, Gujarat, India",
            "degree": "B. Tech. Computer Science and Engineering",
            "majors": ["Computer Science"],
            "dates": "2015 - 2019",
            "url": "www.iiitvadodara.ac.in"
        },
        {
            "name": "Father Agnelo English High School",
            "location": "Silvassa, Dadra and Nagar Haveli, India",
            "degree": "High School",
            "majors": ["Science","Mathematics"],
            "dates": "2000 - 2014",
            "url": "http://www.fatheragneloschool.org/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Developer",
            "school": "Free Code Camp",
            "dates": "May 2016 - August 2016",
            "url": "https://www.freecodecamp.com/excviral/front-end-certification"
        },
        {
            "title": "Front End Web Developer",
            "school": "Udacity",
            "dates": "May 2017 - Present",
            "url": "https://profiles.udacity.com/p/8308873788"
        }
    ],
    "display": function() {
        if(education.schools.length > 0 || education.onlineCourses.length > 0) {
            for(var j = 0; j <education.schools.length; j++) {
                $("#education").append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[j].name).replace("#", education.schools[j].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[j].dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[j].location);
                var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[j].majors.join(", "));
                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
                $(".education-entry:last").append(formattedSchoolDates);
                $(".education-entry:last").append(formattedSchoolLocation);
                $(".education-entry:last").append(formattedSchoolMajors);
            }
            if(education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for(var k = 0; k < education.onlineCourses.length; k++) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
                    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url).replace("#", education.onlineCourses[k].url);
                    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                    $(".education-entry:last").append(formattedOnlineDates);
                    $(".education-entry:last").append(formattedOnlineURL);
                }
            }
        }
    }
};

var work = {
    "jobs": [
        {
        "employer": "IIIT Vadodara Design Club",
        "title": "Joint Secretary",
        "location": "Gandhinagar, Gujarat, India",
        "dates": "August 2016 - April 2017",
        "description": "I was appointed as the Joint Secretary of Design Club of IIIT Vadodara on August 2016. Design Club is one of the most important clubs of IIIT Vadodara. It is responsible of all the Design and Print jobs for all events held in the college. Being the Joint Secretary of the club, I supervised all the poster designing works, and printing jobs. I also supervised the apparel design (T-Shirts and Hoodies) jobs. It was overall a very good experience."
        }
    ],
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [
        {
        "title": "Simon Game",
        "dates": "June 2016",
        "description": "This is an online game hosted at Codepen.io.I made this game while learning javascript during my front end web developer course at Free Code Camp. <p data-height='664' data-theme-id='0' data-slug-hash='gMmOpm' data-default-tab='result' data-user='excviral' data-embed-version='2' data-pen-title='Simon Game' class='codepen'>See the Pen <a href='http://codepen.io/excviral/pen/gMmOpm/'>Simon Game</a> by Viral Patel (<a href='http://codepen.io/excviral'>@excviral</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src='https://production-assets.codepen.io/assets/embed/ei.js'></script>",
        "images": []
        },
        {
        "title": "Etch-A-Sketch",
        "dates": "June 2016",
        "description": "This is a sketch pad made in JavaScript and HTML. I made this while studying JavaScript. I learned a lot during this course.",
        "images": ["images/sketchy.png"]
        }
    ],
    "display": function() {
        for(var project=0; project < projects.projects.length; project++){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            if(projects.projects[project].images.length > 0) {
                for(var image = 0; image < projects.projects[project].images.length; image++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);