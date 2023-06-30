let birthDateInput = document.getElementById("birthDateInput");
let form = document.getElementById("form");
let day = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
  birthDateInput.value = "";
});

function formValidation() {
  if (birthDateInput.value === "") {
    console.log("error");
  } else {
    signImageChange();
    yearsOld();
    countDownTimer()
    startCountdown()
  }
}

function signImageChange() {
  const birthSignDate = new Date(birthDateInput.value).getDate();
  const birthSignMonth = new Date(birthDateInput.value).getMonth();

  let result = document.getElementById("sign");
  
  switch (birthSignMonth) {
    case 0: // January
      if (birthSignDate >= 20 && birthSignDate <= 31) {
        result.innerHTML = `<img class="signImage" src="./images/aquarius.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = `Aquarius`;
      } else if (birthSignDate >= 1 && birthSignDate <= 19) {
        result.innerHTML = `<img class="signImage" src="./images/capricorn.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = `Capricorn`
      }
      break;
    case 1: // February
      if (birthSignDate >= 19 && birthSignDate <= 29) {
        result.innerHTML = `<img class="signImage" src="./images/pisces.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Pisces'
      } else if (birthSignDate >= 1 && birthSignDate <= 18) {
        result.innerHTML = `<img class="signImage" src="./images/aquarius.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = "Aquarius"
      }
      break;
    case 2: // March
      if (birthSignDate >= 21 && birthSignDate <= 31) {
        result.innerHTML = `<img class="signImage" src="./images/aries.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = "Aries"
      } else if (birthSignDate >= 1 && birthSignDate <= 20) {
        result.innerHTML = `<img class="signImage" src="./images/pisces.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Pisces'
      }
      break;
    case 3: // April
      if (birthSignDate >= 20 && birthSignDate <= 30) {
        result.innerHTML = `<img class="signImage" src="./images/taurus.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Taurus'
      } else if (birthSignDate >= 1 && birthSignDate <= 19) {
        result.innerHTML = `<img class="signImage" src="./images/aries.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Aries'
      }
      break;
    case 4: // May
      if (birthSignDate >= 21 && birthSignDate <= 31) {
        result.innerHTML = `<img class="signImage" src="./images/gemini.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Gemini'
      } else if (birthSignDate >= 1 && birthSignDate <= 20) {
        result.innerHTML = `<img class="signImage" src="./images/taurus.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Taurus'
      }
      break;
    case 5: // June
      if (birthSignDate >= 21 && birthSignDate <= 30) {
        result.innerHTML = `<img class="signImage" src="./images/cancer.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Cancer'
      } else if (birthSignDate >= 1 && birthSignDate <= 20) {
        result.innerHTML = `<img class="signImage" src="./images/gemini.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Gemini'
      }
      break;
    case 6: // July
      if (birthSignDate >= 23 && birthSignDate <= 31) {
        result.innerHTML = `<img class="signImage" src="./images/leo.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Leo'
      } else if (birthSignDate >= 1 && birthSignDate <= 22) {
        result.innerHTML = `<img class="signImage" src="./images/cancer.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Cancer'
      }
      break;
    case 7: // August
      if (birthSignDate >= 23 && birthSignDate <= 31) {
        result.innerHTML = `<img class="signImage" src="./images/virgo.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Virog'
      } else if (birthSignDate >= 1 && birthSignDate <= 22) {
        result.innerHTML = `<img class="signImage" src="./images/leo.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Leo'
      }
      break;
    case 8: // September
      if (birthSignDate >= 23 && birthSignDate <= 30) {
        result.innerHTML = `<img class="signImage" src="./images/libra.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Libra'
      } else if (birthSignDate >= 1 && birthSignDate <= 22) {
        result.innerHTML = `<img class="signImage" src="./images/virgo.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Virgo'
      }
      break;
    case 9: // October
      if (birthSignDate >= 23 && birthSignDate <= 31) {
        result.innerHTML = `<img class="signImage" src="./images/scorpio.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Scorpio'
      } else if (birthSignDate >= 1 && birthSignDate <= 22) {
        result.innerHTML = `<img class="signImage" src="./images/libra.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Libra'
      }
      break;
    case 10: // November
      if (birthSignDate >= 22 && birthSignDate <= 30) {
        result.innerHTML = `<img class="signImage" src="./images/sagittarius.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Sagittarius'
      } else if (birthSignDate >= 1 && birthSignDate <= 21) {
        result.innerHTML = `<img class="signImage" src="./images/scorpio.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Scorpio'
      }
      break;
    case 11: // December
      if (birthSignDate >= 22 && birthSignDate <= 31) {
        result.innerHTML = `<img class="signImage" src="./images/capricorn.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Capricorn'
      } else if (birthSignDate >= 1 && birthSignDate <= 21) {
        result.innerHTML = `<img class="signImage" src="./images/sagittarius.jfif" alt="">`;
        document.getElementById("yearsOld").innerHTML = 'Sagittarius'
      }
      break;
    default:
      result.innerHTML = ""; // Clear the result if no match is found
      break;
  }
}

function yearsOld() {
  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1; // Adding 1 to get the current month (January is month 0)
  const birthYear = new Date(birthDateInput.value).getFullYear();
  const birthMonthInput = new Date(birthDateInput.value).getMonth() + 1; // Adding 1 to get the birth month

  let age;

  if (birthMonthInput > nowMonth) {
    age = nowYear - birthYear - 1; // Subtract 1 from the current year
  } else if (birthMonthInput === nowMonth) {
    const nowDay = new Date().getDate();
    const birthDayInput = new Date(birthDateInput.value).getDate();

    if (birthDayInput > nowDay) {
      age = nowYear - birthYear - 1; // Subtract 1 from the current year
    } else {
      age = nowYear - birthYear;
    }
  } else {
    age = nowYear - birthYear;
  }

  document.getElementById("until").innerHTML = `${age} Years Old`;
  return age;
}




function countDownTimer() {
  // GET CURRENT DATE
  const currentDate = new Date();

  // GET USER BIRTHDATE
  const birthDate = new Date(birthDateInput.value);

  // DETERMINE CURRENT YEAR AND USER BIRTH YEAR
  const userBirthYear = birthDate.getFullYear();
  const currentYear = currentDate.getFullYear();

  // CHECK IF BIRTHDAY ALREADY OCCURRED
  const birthDayHasOccurred =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() > birthDate.getDate());

  // CALCULATE NEXT BIRTHDAY YEAR
  const nextBirthYear = birthDayHasOccurred ? currentYear + 1 : currentYear;

  // SET NEXT BIRTHDAY DATE
  const nextBirthDate = new Date(
    nextBirthYear,
    birthDate.getMonth(),
    birthDate.getDate()
  );

  // CALCULATE THE TIME DIFF IN MILLISECONDS
  const timeDiffMs = nextBirthDate.getTime() - currentDate.getTime();

  // CONVERT MS TO DAYS, HOURS, MINUTES, AND SECONDS
  const remainingDays = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor((timeDiffMs / (1000 * 60 * 60)) % 24);
  const remainingMinutes = Math.floor((timeDiffMs / (1000 * 60)) % 60);
  const remainingSeconds = Math.floor((timeDiffMs / 1000) % 60);



  document.getElementById("days").textContent = remainingDays;
  document.getElementById("hours").textContent = remainingHours;
  document.getElementById("mins").textContent = remainingMinutes;
  document.getElementById("secs").textContent = remainingSeconds;

  setInterval(countDownTimer, 1000)
}

let funfact = document.getElementById("funfact");

funfact.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("funfact");
  funfact.classList.add("funfactDisplay");
  funfact.style.visibility = "visible";
});