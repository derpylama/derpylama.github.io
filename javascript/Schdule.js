const lessonArray  = ["lesson1", "lesson2", "lesson3",]


async function checktimes(day, lessonNum, sectionL, sectionT) {
    const response = await fetch("http://localhost/json/times.json");
    const data = await response.json();
    console.log(data);

    const lesson = document.getElementById(sectionL);
    const lessonStart = document.getElementById(sectionT);

    lesson.innerHTML = data[day][lessonNum]["lesson"];
    lessonStart.innerHTML = data[day][lessonNum]["startTime"] + "-" + data[day][lessonNum]["endTime"];
  }

checktimes("monday","lesson1","m1l","m1t");

checktimes("monday", "lesson2","m2l","m2t");

checktimes("monday", "lesson2","m2l","m2t");

