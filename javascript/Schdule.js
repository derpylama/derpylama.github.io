const lessonArray  = ["lesson1", "lesson2", "lesson3",]


async function checktimes(day, lessonNum, sectionL, sectionT) {
    const response = await fetch("http://localhost:8080/Personal%20github/json/times.json");
    const data = await response.json();
    console.log(data);

    const lesson = document.getElementById(sectionL);
    const lessonStart = document.getElementById(sectionT);

    lesson.innerHTML = data[day][lessonNum]["lesson"];
    lessonStart.innerHTML = data[day][lessonNum]["startTime"] + "-" + data[day][lessonNum]["endTime"];
  }

for(let lesson in lessonArray){
    console.log(lesson);
}

checktimes("monday","lesson1","m1l","m1t");