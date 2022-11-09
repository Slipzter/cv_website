let url = "data.json";

async function getInformation() {

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json();
        console.log(data);

        let schoolChas = data.educations[3];
        let schoolAfpt = data.educations[2];
        let schoolGsmd = data.educations[1];
        let schoolSiba = data.educations[0];

        let workOrch = data.experience[0];
        let workFit = data.experience[1];
        let workBar = data.experience[2];

        const schoolIcon = "<i class='fa fa-university'></i>";
        const workIcon = "<i class='fa fa-building'></i>";


        document.querySelector("#main-h2-1").innerHTML = schoolIcon + " " + schoolChas.years;
        document.querySelector("#main-content-1").innerHTML = schoolChas.title + ", " + "<br>" + schoolChas.location + "<br>" +
            "<a href='https://chasacademy.se/om-oss/' target='_blank'>" + schoolChas.school + "</a > ";

        document.querySelector("#main-h2-2").innerHTML = schoolIcon + " " + schoolAfpt.years;
        document.querySelector("#main-content-2").innerHTML = schoolAfpt.title + ", " + "<br>" + schoolAfpt.location + "<br>" +
            "<a href='https://www.afpt.no/om-oss' target='_blank'>" + schoolAfpt.school + "</a > ";

        document.querySelector("#main-h2-3").innerHTML = schoolIcon + " " + schoolGsmd.years;
        document.querySelector("#main-content-3").innerHTML = schoolGsmd.title + ", " + "<br>" + schoolGsmd.location + "<br>" +
            "<a href='https://www.afpt.no/om-oss' target='_blank'>" + schoolGsmd.school + "</a > ";

        document.querySelector("#main-h2-4").innerHTML = schoolIcon + " " + schoolSiba.years;
        document.querySelector("#main-content-4").innerHTML = schoolSiba.title + ", " + "<br>" + schoolSiba.location + "<br>" +
            "<a href='https://www.afpt.no/om-oss' target='_blank'>" + schoolSiba.school + "</a > ";

        document.querySelector("#aside-h2-1").innerHTML = workIcon + " " + workOrch.years;
        document.querySelector("#aside-content-1").innerHTML = workOrch.title + ", " + "<br>" + workOrch.location + "<br>" +
            "<a href='https://sso.no/en/stavanger-symphony-orchestra/' target='_blank'>" + workOrch.workplace + "</a > ";

        // Empty a href here, website will come soon
        document.querySelector("#aside-h2-2").innerHTML = workIcon + " " + workBar.years;
        document.querySelector("#aside-content-2").innerHTML = workBar.title + ", " + "<br>" + workBar.location + "<br>" +
            "<a href='' target='_blank'>" + workBar.workplace + "</a > ";

        // Empty a href here, website will come soon
        document.querySelector("#aside-h2-3").innerHTML = workIcon + " " + workFit.years;
        document.querySelector("#aside-content-3").innerHTML = workFit.title + ", " + "<br>" + workFit.location + "<br>" +
            "<a href='' target='_blank'>" + workFit.workplace + "</a > ";


    }

    else {
        console.log("HTTP-error: " + response.status);
    }

}

getInformation();

