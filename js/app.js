let url = "data.json";

async function getInformation() {

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data);

        let schoolChas = data.educations[3];
        let schoolAfpt = data.educations[2];

        let workOrch = data.experience[0];

        let schoolIcon = "<i class='fa fa-university'></i>";
        let workIcon = "<i class='fa fa-building'></i>";


        document.querySelector("#main-h2-1").innerHTML = schoolIcon + " " + schoolChas.years;
        document.querySelector("#main-content-1").innerHTML = schoolChas.title + ", " + "<br>" +
            "<a href='https://chasacademy.se/om-oss/' target='_blank'>" + schoolChas.school + "</a > ";

        document.querySelector("#main-h2-2").innerHTML = schoolIcon + " " + schoolAfpt.years;
        document.querySelector("#main-content-2").innerHTML = schoolAfpt.title + ", " + "<br>" +
            "<a href='https://www.afpt.no/om-oss' target='_blank'>" + schoolAfpt.school + "</a > ";

        document.querySelector("#aside-h2-1").innerHTML = workIcon + " " + workOrch.years;
        document.querySelector("#aside-content-1").innerHTML = workOrch.title + ", " + "<br>" +
            "<a href='https://sso.no/en/stavanger-symphony-orchestra/' target='_blank'>" + workOrch.workplace + "</a > ";



    }

    else {
        console.log("HTTP-error: " + response.status);
    }

}

getInformation();

