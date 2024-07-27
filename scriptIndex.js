document.addEventListener('DOMContentLoaded', (event) => {
    const selectedWorkout = localStorage.getItem('selectedWorkout');
    const selectedWorkoutSubTitle = localStorage.getItem('selectedWorkoutSubTitle');
    const selectedBackgroud = localStorage.getItem('selectedBackgroud');
    const selectedImage = localStorage.getItem('selectedImage');
    const selectedMainDesciption = localStorage.getItem('selectedMainDesciption');
    const selectedDescp1 = localStorage.getItem('selectedDescp1');
    const selectedDesc1 = localStorage.getItem('selectedDesc1');
    const selectedDesc1li = localStorage.getItem('selectedDesc1li');
    const selectedDesc2 = localStorage.getItem('selectedDesc2');
    const selectedDesc2li = localStorage.getItem('selectedDesc2li');
    const selectedDesc3 = localStorage.getItem('selectedDesc3');
    const selectedDesc3li = localStorage.getItem('selectedDesc3li');

    const selectedImage1Src = localStorage.getItem('selectedImage1Src');
    const selectedImage2Src = localStorage.getItem('selectedImage2Src');
    const selectedImage3Src = localStorage.getItem('selectedImage3Src');
    const selectedImage4Src = localStorage.getItem('selectedImage4Src');
    const selectedImage5Src = localStorage.getItem('selectedImage5Src');
    const selectedImage6Src = localStorage.getItem('selectedImage6Src');

    // const selectedLink1= localStorage.getItem('selectedLink1');
    // const selectedLink2= localStorage.getItem('selectedLink2');
    // const selectedLink3= localStorage.getItem('selectedLink3');
    // const selectedLink4= localStorage.getItem('selectedLink4');
    // const selectedLink5= localStorage.getItem('selectedLink5');
    // const selectedLink6= localStorage.getItem('selectedLink6');

    if (selectedWorkout) {
        document.title = selectedWorkout;
        document.getElementById('titlee').innerHTML = selectedWorkout;
        document.getElementById('titlee-semi').innerText = selectedWorkoutSubTitle;
        document.getElementById('background').src = selectedBackgroud;
        document.getElementById('mainImage').src = selectedImage;

        document.getElementById('mainDesciption').innerHTML = selectedMainDesciption;
        document.getElementById('descp1').innerHTML = selectedDescp1;

        document.getElementById('desc1').innerHTML = selectedDesc1;//sa benefits
        document.getElementById('desc1li').innerHTML = selectedDesc1li;
        document.getElementById('desc2').innerHTML = selectedDesc2;
        document.getElementById('desc2li').innerHTML = selectedDesc2li;
        document.getElementById('desc3').innerHTML = selectedDesc3;
        document.getElementById('desc3li').innerHTML = selectedDesc3li;

        document.getElementById('image1Src').src = selectedImage1Src;
        document.getElementById('image2Src').src = selectedImage2Src;
        document.getElementById('image3Src').src = selectedImage3Src;
        document.getElementById('image4Src').src = selectedImage4Src;
        document.getElementById('image5Src').src = selectedImage5Src;
        document.getElementById('image6Src').src = selectedImage6Src;

        // // You can also display other relevant information based on the selected workout
        // // For example, you can show different text or images
        // document.getElementById('workoutDetails').innerText = `Details for ${selectedWorkout}`;
    }
});


function handleSelectChange() {
    const selectElement = document.getElementById('mySelect');
    const selectedValue = selectElement.value;

    if (selectedValue === "1") {
        selectWorkoutFullBody();
    } else if (selectedValue === "2") {
        selectWorkoutUpperBody();
    } else if (selectedValue === "3") {
        selectWorkoutLowerBody();
    } else if (selectedValue === "4") {
        selectWorkoutArm();
    } else if (selectedValue === "5") {
        selectWorkoutChest();
    } else if (selectedValue === "6") {
        selectWorkoutBack();
    } else if (selectedValue === "7") {
        selectWorkoutAbs();
    } else if (selectedValue === "8") {
        selectWorkoutLeg();
    } else if (selectedValue === "9") {
        selectWorkoutForearms();
    }

}


function expand() {
    var descriptionDiv = document.getElementById('description');
    var buttonn = document.getElementById('see_');

    if (buttonn.innerHTML === "See More...") {
        buttonn.innerHTML = "See Less...";
        descriptionDiv.style.display = "block";
    } else {
        buttonn.innerHTML = "See More...";
        descriptionDiv.style.display = "none";
    }
}

function rel() {
    var sum = document.getElementById('summary');
    var rel = document.getElementById('relations');
    var rec = document.getElementById('recommendation');

    var sumDiv = document.getElementById('sum');
    var relDiv = document.getElementById('rel');
    var recDiv = document.getElementById('rec');


    sum.style.borderBottom = "none";
    rel.style.borderBottom = "2px solid rgb(255, 106, 0)";
    rec.style.borderBottom = "none";

    sum.style.backgroundColor = "rgba(0, 0, 0, 0)";
    rel.style.backgroundColor = "rgba(0, 0, 0, 0.06)";
    rec.style.backgroundColor = "rgba(0, 0, 0, 0)";


    sumDiv.style.display = "none";
    relDiv.style.display = "block";
    recDiv.style.display = "none";
}

function sum() {
    var sum = document.getElementById('summary');
    var rel = document.getElementById('relations');
    var rec = document.getElementById('recommendation');

    var sumDiv = document.getElementById('sum');
    var relDiv = document.getElementById('rel');
    var recDiv = document.getElementById('rec');


    rel.style.borderBottom = "none";
    sum.style.borderBottom = "2px solid rgb(255, 106, 0)";
    rec.style.borderBottom = "none";

    rel.style.backgroundColor = "rgba(0, 0, 0, 0)";
    sum.style.backgroundColor = "rgba(0, 0, 0, 0.06)";
    rec.style.backgroundColor = "rgba(0, 0, 0, 0)";


    relDiv.style.display = "none";
    sumDiv.style.display = "block";
    recDiv.style.display = "none";
}

function rec() {
    var sum = document.getElementById('summary');
    var rel = document.getElementById('relations');
    var rec = document.getElementById('recommendation');

    var sumDiv = document.getElementById('sum');
    var relDiv = document.getElementById('rel');
    var recDiv = document.getElementById('rec');


    rel.style.borderBottom = "none";
    rec.style.borderBottom = "2px solid rgb(255, 106, 0)";
    sum.style.borderBottom = "none";

    rel.style.backgroundColor = "rgba(0, 0, 0, 0)";
    rec.style.backgroundColor = "rgba(0, 0, 0, 0.06)";
    sum.style.backgroundColor = "rgba(0, 0, 0, 0)";


    relDiv.style.display = "none";
    recDiv.style.display = "block";
    sumDiv.style.display = "none";
}


// 



function image1() {
    localStorage.setItem('selectedVideo', localStorage.getItem('selectedLink1'));
    localStorage.setItem('selectedVideoImage', localStorage.getItem('selectedImage1Src'));
    localStorage.setItem('selectedVideoTitle', localStorage.getItem('selectedLinkTitle'));

    window.location.href = 'video.html'; // Redirect to details page
}

function image2() {
    localStorage.setItem('selectedVideo', localStorage.getItem('selectedLink2'));
    localStorage.setItem('selectedVideoImage', localStorage.getItem('selectedImage2Src'));
    localStorage.setItem('selectedVideoTitle', localStorage.getItem('selectedLinkTitle'));
    window.location.href = 'video.html'; // Redirect to details page
}

function image3() {
    localStorage.setItem('selectedVideo', localStorage.getItem('selectedLink3'));
    localStorage.setItem('selectedVideoImage', localStorage.getItem('selectedImage3Src'));
    localStorage.setItem('selectedVideoTitle', localStorage.getItem('selectedLinkTitle'));
    window.location.href = 'video.html'; // Redirect to details page
}

function image4() {
    localStorage.setItem('selectedVideo', localStorage.getItem('selectedLink4'));
    localStorage.setItem('selectedVideoImage', localStorage.getItem('selectedImage4Src'));
    localStorage.setItem('selectedVideoTitle', localStorage.getItem('selectedLinkTitle'));
    window.location.href = 'video.html'; // Redirect to details page
}

function image5() {
    localStorage.setItem('selectedVideo', localStorage.getItem('selectedLink5'));
    localStorage.setItem('selectedVideoImage', localStorage.getItem('selectedImage5Src'));
    localStorage.setItem('selectedVideoTitle', localStorage.getItem('selectedLinkTitle'));
    window.location.href = 'video.html'; // Redirect to details page
}

function image6() {
    localStorage.setItem('selectedVideo', localStorage.getItem('selectedLink6'));
    localStorage.setItem('selectedVideoImage', localStorage.getItem('selectedImage6Src'));
    localStorage.setItem('selectedVideoTitle', localStorage.getItem('selectedLinkTitle'));
    window.location.href = 'video.html'; // Redirect to details page
}

//


function selectWorkoutFullBody() {
    localStorage.setItem('selectedWorkout', 'Full Body Workout');
    localStorage.setItem('selectedWorkoutSubTitle', 'Overall Increase');

    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/fullbody.jpg');
    localStorage.setItem('selectedMainDesciption', 'A full-body workout is a comprehensive exercise regimen designed to engage and strengthen all major muscle groups within a single session. This type of workout typically includes a balanced combination of upper body, lower body, and core exercises, complemented by cardiovascular activities to enhance overall fitness.');
    localStorage.setItem('selectedDescp1', 'Key exercises might include push-ups, squats, deadlifts, and planks, ensuring that muscles such as the chest, back, legs, and abdominals are all effectively targeted. By incorporating both strength training and cardio, full-body workouts maximize calorie burn, improve muscular endurance, and promote cardiovascular health. This efficient approach is ideal for individuals with limited time, offering significant fitness benefits through balanced and versatile training.');
    localStorage.setItem('selectedDesc1', 'Burns calories efficiently');//sa benefits
    localStorage.setItem('selectedDesc1li', 'Strength training helps boost your metabolism in two ways. First, building muscle increases your metabolic rate.');
    localStorage.setItem('selectedDesc2', 'Testosterone');
    localStorage.setItem('selectedDesc2li', 'Testosterone is the primary male sex hormone and androgen in males.');
    localStorage.setItem('selectedDesc3', 'Weight loss');
    localStorage.setItem('selectedDesc3li', 'Weight loss, in the context of medicine, health, or physical fitness, refers to a reduction of the total body mass, by a mean loss of fluid, body fat, or lean mass.');

    localStorage.setItem('selectedImage1Src', 'images/maxresdefault.jpg');
    localStorage.setItem('selectedImage2Src', 'images/2frame.jpg');
    localStorage.setItem('selectedImage3Src', 'images/3frame.jpg');
    localStorage.setItem('selectedImage4Src', 'images/4frame.jpg');
    localStorage.setItem('selectedImage5Src', 'images/5frame.jpg');
    localStorage.setItem('selectedImage6Src', 'images/6frame.jpg');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/Yu20j5jGHTc?si=uumlKhKP7ij5s2rO');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/MOrRRvSGIQc?si=R0RYtiDTTdMS7pyq');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/xoUHMebjFSs?si=iTAEK8YzbP_NCiPk');
    localStorage.setItem('selectedLink4', 'https://www.youtube.com/embed/iCQ2gC4DqJw?si=12bmdvrlngABRvWo');
    localStorage.setItem('selectedLink5', 'https://www.youtube.com/embed/2ZbHFL_KhB4?si=ygqOqlofCcXFGYU1');
    localStorage.setItem('selectedLink6', 'https://www.youtube.com/embed/oZjW1o1gorw?si=nm3vqMfLwJorxeYD');

    // localStorage.setItem('selectedLink1Image', '');
    // localStorage.setItem('selectedLink2Image', '');
    // localStorage.setItem('selectedLink3Image', '');
    // localStorage.setItem('selectedLink4Image', '');
    // localStorage.setItem('selectedLink5Image', '');
    // localStorage.setItem('selectedLink6Image', '');
    
    localStorage.setItem('selectedLinkTitle', 'Full Body Workout');


    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutUpperBody() {
    localStorage.setItem('selectedWorkout', 'Upper Body Workout');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');


    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/upperbody.jpg');
    localStorage.setItem('selectedMainDesciption', 'Each exercise is carefully selected to provide a balanced workout, ensuring that no muscle group is neglected. Additionally, the inclusion of both compound and isolation exercises allows for efficient muscle targeting and maximal results. By following this workout routine consistently and gradually increasing the intensity over time, individuals can expect to see improvements in muscle tone, strength, and endurance. However, it\'s important to prioritize proper form and technique to minimize the risk of injury and maximize the effectiveness of each exercise.');
    localStorage.setItem('selectedDescp1', 'Key exercises might include push-ups, squats, deadlifts, and planks, ensuring that muscles such as the chest, back, legs, and abdominals are all effectively targeted. By incorporating both strength training and cardio, full-body workouts maximize calorie burn, improve muscular endurance, and promote cardiovascular health. This efficient approach is ideal for individuals with limited time, offering significant fitness benefits through balanced and versatile training.');
    localStorage.setItem('selectedDesc1', 'Increased Strength');//sa benefits
    localStorage.setItem('selectedDesc1li', 'By targeting major muscle groups such as the chest, shoulders, back, biceps, and triceps, this workout helps build overall upper body strength. As muscles adapt to the resistance provided by weights, individuals can progressively lift heavier loads, leading to increased strength and power.');
    localStorage.setItem('selectedDesc2', 'Muscle Definition and Tone');
    localStorage.setItem('selectedDesc2li', 'Regularly performing exercises that target the upper body muscles helps to promote muscle growth and definition. This can result in a more sculpted and toned appearance, enhancing overall aesthetics.');
    localStorage.setItem('selectedDesc3', '');
    localStorage.setItem('selectedDesc3li', '');

    localStorage.setItem('selectedImage1Src', 'images/upper1.jpg');
    localStorage.setItem('selectedImage2Src', 'images/upper2.jpg');
    localStorage.setItem('selectedImage3Src', 'images/upper3.jpg');
    localStorage.setItem('selectedImage4Src', 'images/upper4.jpg');
    localStorage.setItem('selectedImage5Src', 'images/upper5.jpg');
    localStorage.setItem('selectedImage6Src', 'images/upper6.jpg');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/wRDMFP3ihkE?si=wL2lcz2bMviQYwiP');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/XNgP5HsjcbE?si=rRBnz_8D8xDEGr8_');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/mm47bCaCzpQ?si=Ppw1iT4fxgKpJvBK2');
    localStorage.setItem('selectedLink4', 'https://www.youtube.com/embed/Y2S-a_2VPSI?si=Ownx6UEAwYtn6BLQ');
    localStorage.setItem('selectedLink5', 'https://www.youtube.com/embed/AJ6oY_08jdI?si=lPoUEImW7nHh6f6-');
    localStorage.setItem('selectedLink6', 'https://www.youtube.com/embed/hTqgcdb4Zjw?si=Nzd9lXzv0SQC3bMr');

    localStorage.setItem('selectedLinkTitle', 'Upper Body Workout');


    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutLowerBody() {
    localStorage.setItem('selectedWorkout', 'Workout Lower Body');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');


    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/lowerbody.jpg');
    localStorage.setItem('selectedMainDesciption', 'This lower body workout routine is designed to enhance strength, stability, and overall athletic performance by targeting the major muscle groups in the legs. The session begins with a dynamic warm-up lasting 5-10 minutes, incorporating movements such as leg swings, walking lunges, high knees, and butt kicks to prepare the muscles and joints for the workout ahead.');
    localStorage.setItem('selectedDescp1','The main workout consists of seven exercises: Squats, Deadlifts, Lunges, Leg Press, Calf Raises, Bulgarian Split Squats, and Hamstring Curls. Each exercise is performed for 3 sets, with repetitions ranging from 8 to 20 depending on the exercise. Proper form is emphasized throughout to prevent injuries and maximize effectiveness. A rest period of 60-90 seconds is recommended between sets to maintain performance and recovery. <br>The session concludes with a 5-10 minute cool-down featuring static stretching, focusing on the muscles engaged during the workout, such as the quadriceps, hamstrings, calves, and glutes. Progressive overload is encouraged to continually challenge the muscles, and adjustments can be made based on individual fitness levels and goals. This routine provides a comprehensive approach to lower body training, ensuring balanced muscle development and improved functional strength.');
    localStorage.setItem('selectedDesc1', 'Increased Strength');//sa benefits
    localStorage.setItem('selectedDesc1li', 'This routine targets the major muscle groups in the lower body, including the quadriceps, hamstrings, glutes, and calves, leading to increased muscle strength and endurance.');
    localStorage.setItem('selectedDesc2', 'Improved Stability and Balance');
    localStorage.setItem('selectedDesc2li', 'Exercises like lunges and Bulgarian split squats enhance core stability and balance, which are crucial for everyday activities and athletic performance.');
    localStorage.setItem('selectedDesc3', 'Enhanced Athletic Performance');
    localStorage.setItem('selectedDesc3li', 'A strong lower body is essential for athletic activities that involve running, jumping, and quick changes in direction. This workout improves power, speed, and agility.');

    localStorage.setItem('selectedImage1Src', 'images/7frame.jpg');
    localStorage.setItem('selectedImage2Src', 'images/8frame.jpg');
    localStorage.setItem('selectedImage3Src', 'images/9frame.jpg');
    localStorage.setItem('selectedImage4Src', 'images/10frame.jpg');
    localStorage.setItem('selectedImage5Src', 'images/11frame.jpg');
    localStorage.setItem('selectedImage6Src', 'images/12frame.jpg');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/X0xt0fYTZv8?si=9zwfgTaIm0aqIB1B');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/JIQUbPqfVV4?si=VKGNyUggPBUMdOtp');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/GfUpbhaCK7Y?si=PwAlcX8BTY3eIyQa');
    localStorage.setItem('selectedLink4', 'https://www.youtube.com/embed/vK_DQYimccw?si=ReICblUVaGSJWLDy');
    localStorage.setItem('selectedLink5', 'https://www.youtube.com/embed/ZgIJ1mHoo1c?si=gAa75wBzbPWiI1-F');
    localStorage.setItem('selectedLink6', 'https://www.youtube.com/embed/JvGmkBe467o?si=hSlLLAyKCJ7Z2-L6');

    localStorage.setItem('selectedLinkTitle', 'Lower Body Workout');



    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutArm() {
    localStorage.setItem('selectedWorkout', 'Workout Arm');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');


    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/arm.jpg');
    localStorage.setItem('selectedMainDesciption', 'This arm workout routine targets the biceps and triceps, two major muscle groups in the upper body. It includes exercises like bicep curls, tricep dips, hammer curls, tricep extensions, and push-ups.');
    localStorage.setItem('selectedDescp1','These exercises are designed to build strength and definition in the arms while also engaging stabilizing muscles. Perform each exercise with proper form and control, aiming for 3 sets of 10-12 repetitions for optimal results. Adjust the weight and intensity based on individual fitness levels and goals. Remember to warm up before starting the routine and cool down with stretching exercises afterward to enhance flexibility and reduce the risk of injury.');
    localStorage.setItem('selectedDesc1', 'Increased Muscle Strength');//sa benefits
    localStorage.setItem('selectedDesc1li', 'Regular arm workouts help to strengthen the muscles in your biceps, triceps, shoulders, and forearms, leading to improved overall upper body strength.');
    localStorage.setItem('selectedDesc2', 'Enhanced Muscle Definition');
    localStorage.setItem('selectedDesc2li', 'By targeting specific muscle groups in the arms, such as the biceps and triceps, you can sculpt and define your arms, leading to a more toned appearance.');
    localStorage.setItem('selectedDesc3', 'Enhanced Bone Health');
    localStorage.setItem('selectedDesc3li', 'Resistance training has been shown to increase bone density, which can help reduce the risk of osteoporosis and bone fractures, especially as you age.');

    localStorage.setItem('selectedImage1Src', 'images/arm1.jpg');
    localStorage.setItem('selectedImage2Src', 'images/arm2.jpg');
    localStorage.setItem('selectedImage3Src', 'images/arm3.jpg');
    localStorage.setItem('selectedImage4Src', 'images/arm4.jpg');
    localStorage.setItem('selectedImage5Src', 'images/arm5.jpg');
    localStorage.setItem('selectedImage6Src', 'images/arm6.jpg');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/fKDKrK5njI8?si=kHtMjAmqaHL_AykW');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/wwKb-wZCEjs?si=I7zitspT961RLydK');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/RTF4ADblouI?si=pCicr1b5s0sPHLEu');
    localStorage.setItem('selectedLink4', 'https://www.youtube.com/embed/grQvkG-U4D4?si=dhz8u_7cl9qGE8JO');
    localStorage.setItem('selectedLink5', 'https://www.youtube.com/embed/jDvdHXpA1Eg?si=a0eTjKtSTzpYTtQH');
    localStorage.setItem('selectedLink6', 'https://www.youtube.com/embed/XX2W7EvLOX8?si=egzBxkJ_hbH-7YSY');

    localStorage.setItem('selectedLinkTitle', 'Arm Workout');


    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutChest() {
    localStorage.setItem('selectedWorkout', 'Workout Chest');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');

    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/chest.jpg');
    localStorage.setItem('selectedMainDesciption', 'This chest workout routine is designed to build strength, increase muscle mass, and enhance overall upper body aesthetics by targeting the major muscles in the chest. The session begins with a 5-10 minute dynamic warm-up, including arm circles, chest openers, and light jogging, followed by two sets of push-ups to activate the chest muscles. The main workout consists of seven exercises: Barbell Bench Press, Incline Dumbbell Press, Decline Bench Press, Chest Flyes, Push-Ups, Cable Crossovers, and Dips.');
    localStorage.setItem('selectedDescp1','Each exercise is performed for 3 sets, with repetitions ranging from 8 to 20 depending on the exercise. Proper form is emphasized to prevent injuries and maximize effectiveness, with a rest period of 60-90 seconds recommended between sets. The session concludes with a 5-10 minute cool-down featuring static stretching, focusing on the chest, shoulders, and triceps. Progressive overload is encouraged to continually challenge the muscles, and adjustments can be made based on individual fitness levels and goals. This routine provides a comprehensive approach to chest training, ensuring balanced muscle development and improved upper body strength.');
    localStorage.setItem('selectedDesc1', 'Increased Muscle Mass');//sa benefits
    localStorage.setItem('selectedDesc1li', 'Targeted exercises like the bench press and chest flyes help build and define the pectoral muscles, leading to increased muscle mass and a more sculpted upper body');
    localStorage.setItem('selectedDesc2', 'Mental Health Benefits');
    localStorage.setItem('selectedDesc2li', 'Regular exercise, including chest workouts, releases endorphins, reducing stress and improving mood, contributing to better mental health and overall well-being.');
    localStorage.setItem('selectedDesc3', 'Improved Cardiovascular Health');
    localStorage.setItem('selectedDesc3li', 'Compound exercises that engage large muscle groups can enhance cardiovascular health by promoting better heart function and circulation');

    localStorage.setItem('selectedImage1Src', 'images/chest1.jpg');
    localStorage.setItem('selectedImage2Src', 'images/chest2.jpg');
    localStorage.setItem('selectedImage3Src', 'images/chest3.jpg');
    localStorage.setItem('selectedImage4Src', 'images/chest4.jpg');
    localStorage.setItem('selectedImage5Src', 'images/chest5.jpg');
    localStorage.setItem('selectedImage6Src', 'images/chest6.jpg');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/G2XrGztOTi0?si=-XNaovsq6jEhT5xC');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/qwx1VV9vV1A?si=-l5H2drP8M_FTwSH');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/-kJAFNN8t2Y?si=2xCbCsWWyWUuvyG1');
    localStorage.setItem('selectedLink4', 'https://www.youtube.com/embed/0Av02v-gMw8?si=YUOpHM4Xj_Vc2nvD');
    localStorage.setItem('selectedLink5', 'https://www.youtube.com/embed/MWR5yscXzsM?si=rPJlE8K6hoD9_VWC');
    localStorage.setItem('selectedLink6', 'https://www.youtube.com/embed/GVgVebTQJfY?si=McbiPEFuXCH7hlro');

    localStorage.setItem('selectedLinkTitle', 'Chest Workout');


    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutBack() {
    localStorage.setItem('selectedWorkout', 'Workout Back');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');


    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/back.jpg');
    localStorage.setItem('selectedMainDesciption', 'This back workout routine is designed to build strength, enhance muscle definition, and improve overall upper body aesthetics by targeting the major muscles in the back. The session begins with a 5-10 minute dynamic warm-up, including arm circles, shoulder rolls, and light jogging, followed by two sets of light lat pulldowns or rows to activate the back muscles.');
    localStorage.setItem('selectedDescp1','The main workout consists of eight exercises: Deadlifts, Pull-Ups/Chin-Ups, Bent-Over Barbell Rows, One-Arm Dumbbell Rows, Lat Pulldowns, Seated Cable Rows, Face Pulls, and Hyperextensions. Each exercise is performed for 3 sets, with repetitions ranging from 8 to 20 depending on the exercise. Proper form is emphasized to prevent injuries and maximize effectiveness, with a rest period of 60-90 seconds recommended between sets. The session concludes with a 5-10 minute cool-down featuring static stretching, focusing on the back, shoulders, and hamstrings. Progressive overload is encouraged to continually challenge the muscles, and adjustments can be made based on individual fitness levels and goals. This routine provides a comprehensive approach to back training, ensuring balanced muscle development and improved upper body strength.');
    localStorage.setItem('selectedDesc1', 'Balanced Physique<');//sa benefits
    localStorage.setItem('selectedDesc1li', 'Training the back muscles helps create a balanced physique, preventing the common issue of overdeveloped chest muscles compared to the back.');
    localStorage.setItem('selectedDesc2', 'Improved Posture');
    localStorage.setItem('selectedDesc2li', '>Strengthening the back muscles helps maintain a straight spine, reducing the likelihood of slouching and promoting better posture.');
    localStorage.setItem('selectedDesc3', '');
    localStorage.setItem('selectedDesc3li', '');

    localStorage.setItem('selectedImage1Src', 'images/back1.jpg');
    localStorage.setItem('selectedImage2Src', 'images/back2.jpg');
    localStorage.setItem('selectedImage3Src', 'images/back3.jpg');
    localStorage.setItem('selectedImage4Src', '');
    localStorage.setItem('selectedImage5Src', '');
    localStorage.setItem('selectedImage6Src', '');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/SOvsUhLCdys?si=jlk6jB1RHcWMpGd_');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/6JZZTLfoNMY?si=Yozg35Zj6QAxCsCF');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/7z1lKPYlDEQ?si=sYePNwXYQ9Cbt2ZU');
    localStorage.setItem('selectedLink4', '');
    localStorage.setItem('selectedLink5', '');
    localStorage.setItem('selectedLink6', '');

    localStorage.setItem('selectedLinkTitle', 'Back Workout');


    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutAbs() {
    localStorage.setItem('selectedWorkout', 'Workout Abs');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');

    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/absFinal.jpg');
    localStorage.setItem('selectedMainDesciption', 'This abs workout routine is designed to build core strength, improve stability, and enhance overall body aesthetics by targeting the major muscles in the abdominal region.');
    localStorage.setItem('selectedDescp1','The session begins with a 5-10 minute dynamic warm-up, including torso twists, high knees, and leg swings. The main workout consists of seven exercises: Plank, Bicycle Crunches, Leg Raises, Russian Twists, Mountain Climbers, V-Ups, and Side Planks. Each exercise is performed for 3 sets, with repetitions ranging from 12 to 30 depending on the exercise. Proper form is emphasized to prevent injuries and maximize effectiveness, with a rest period of 30-60 seconds recommended between sets. The session concludes with a 5-10 minute cool-down featuring static stretching, focusing on the core, lower back, and hip flexors. Progression can be achieved by gradually increasing the duration, reps, or difficulty of the exercises as strength improves. This routine provides a comprehensive approach to abs training, ensuring balanced muscle development and improved core strength.');
    localStorage.setItem('selectedDesc1', 'Better Spinal Health');//sa benefits
    localStorage.setItem('selectedDesc1li', 'Strengthening the core muscles supports the spine, reducing the risk of degenerative conditions such as herniated discs and spinal instability');
    localStorage.setItem('selectedDesc2', 'Improved Digestion');
    localStorage.setItem('selectedDesc2li', 'Regular abdominal exercises can stimulate the digestive organs and improve gastrointestinal function, aiding in digestion and reducing bloating.');
    localStorage.setItem('selectedDesc3', 'Improved Core Strength');
    localStorage.setItem('selectedDesc3li', 'Targeting the abdominal muscles through exercises like planks, leg raises, and V-ups strengthens the core, enhancing stability and posture.');

    localStorage.setItem('selectedImage1Src', 'images/abs1.jpg');
    localStorage.setItem('selectedImage2Src', 'images/abs2.jpg');
    localStorage.setItem('selectedImage3Src', 'images/abs3.jpg');
    localStorage.setItem('selectedImage4Src', '');
    localStorage.setItem('selectedImage5Src', '');
    localStorage.setItem('selectedImage6Src', '');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/JLdSuFF62AI?si=UQq0lsX3LSWVkyUj');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/vICVYyx22AY?si=ISEDmPwiSogXmins');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/h4Xy2z2UwLY?si=OgVrhz_e2pzhyWsx');
    localStorage.setItem('selectedLink4', '');
    localStorage.setItem('selectedLink5', '');
    localStorage.setItem('selectedLink6', '');

    localStorage.setItem('selectedLinkTitle', 'Abs Workout');



    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutLeg() {
    localStorage.setItem('selectedWorkout', 'Workout Leg');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');

    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/lowerbody.jpg');
    localStorage.setItem('selectedMainDesciption', 'This lower body workout routine is designed to enhance strength, stability, and overall athletic performance by targeting the major muscle groups in the legs. The session begins with a dynamic warm-up lasting 5-10 minutes, incorporating movements such as leg swings, walking lunges, high knees, and butt kicks to prepare the muscles and joints for the workout ahead.');
    localStorage.setItem('selectedDescp1','The main workout consists of seven exercises: Squats, Deadlifts, Lunges, Leg Press, Calf Raises, Bulgarian Split Squats, and Hamstring Curls. Each exercise is performed for 3 sets, with repetitions ranging from 8 to 20 depending on the exercise. Proper form is emphasized throughout to prevent injuries and maximize effectiveness. A rest period of 60-90 seconds is recommended between sets to maintain performance and recovery. <br>The session concludes with a 5-10 minute cool-down featuring static stretching, focusing on the muscles engaged during the workout, such as the quadriceps, hamstrings, calves, and glutes. Progressive overload is encouraged to continually challenge the muscles, and adjustments can be made based on individual fitness levels and goals. This routine provides a comprehensive approach to lower body training, ensuring balanced muscle development and improved functional strength.');
    localStorage.setItem('selectedDesc1', 'Increased Strength');//sa benefits
    localStorage.setItem('selectedDesc1li', 'This routine targets the major muscle groups in the lower body, including the quadriceps, hamstrings, glutes, and calves, leading to increased muscle strength and endurance.');
    localStorage.setItem('selectedDesc2', 'mproved Stability and Balance');
    localStorage.setItem('selectedDesc2li', 'Exercises like lunges and Bulgarian split squats enhance core stability and balance, which are crucial for everyday activities and athletic performance.');
    localStorage.setItem('selectedDesc3', 'Enhanced Athletic Performance');
    localStorage.setItem('selectedDesc3li', 'A strong lower body is essential for athletic activities that involve running, jumping, and quick changes in direction. This workout improves power, speed, and agility.');

    localStorage.setItem('selectedImage1Src', 'images/7frame.jpg');
    localStorage.setItem('selectedImage2Src', 'images/8frame.jpg');
    localStorage.setItem('selectedImage3Src', 'images/9frame.jpg');
    localStorage.setItem('selectedImage4Src', 'images/10frame.jpg');
    localStorage.setItem('selectedImage5Src', 'images/11frame.jpg');
    localStorage.setItem('selectedImage6Src', 'images/12frame.jpg');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/X0xt0fYTZv8?si=9zwfgTaIm0aqIB1B');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/JIQUbPqfVV4?si=VKGNyUggPBUMdOtp');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/GfUpbhaCK7Y?si=PwAlcX8BTY3eIyQa');
    localStorage.setItem('selectedLink4', 'https://www.youtube.com/embed/vK_DQYimccw?si=ReICblUVaGSJWLDy');
    localStorage.setItem('selectedLink5', 'https://www.youtube.com/embed/ZgIJ1mHoo1c?si=gAa75wBzbPWiI1-F');
    localStorage.setItem('selectedLink6', 'https://www.youtube.com/embed/JvGmkBe467o?si=hSlLLAyKCJ7Z2-L6');

    localStorage.setItem('selectedLinkTitle', 'Leg Workout');


    window.location.href = 'details.html'; // Redirect to details page
}

function selectWorkoutForearms() {
    localStorage.setItem('selectedWorkout', 'Workout Forearms');
    localStorage.setItem('selectedWorkoutSubTitle', 'Upper Body Semi Title');


    localStorage.setItem('selectedBackgroud', 'images/gym.png');
    localStorage.setItem('selectedImage', 'images/fore.jpg');
    localStorage.setItem('selectedMainDesciption', 'This forearm workout routine is designed to build strength, improve grip, and enhance overall arm aesthetics by targeting the major muscles in the forearms. The session begins with a 5-10 minute dynamic warm-up, including wrist circles, finger flexing, and light wrist extensions and flexions. The main workout consists of eight exercises: Wrist Curls, Reverse Wrist Curls, Hammer Curls, Farmers Walk, Towel Pull-Ups, Plate Pin');
    localStorage.setItem('selectedDescp1','Each exercise is performed for 3 sets, with repetitions ranging from 8 to 15 or timed holds of 30-60 seconds. Proper form is emphasized to prevent injuries and maximize effectiveness, with a rest period of 60-90 seconds recommended between sets. The session concludes with a 5-10 minute cool-down featuring static stretching, focusing on the wrists, forearms, and fingers. Progressive overload is encouraged to continually challenge the muscles, and adjustments can be made based on individual fitness levels and goals. This routine provides a comprehensive approach to forearm training, ensuring balanced muscle development and improved grip strength.');
    localStorage.setItem('selectedDesc1', 'Improved Grip Strength');//sa benefits
    localStorage.setItem('selectedDesc1li', 'Exercises like wrist curls, reverse curls, and plate pinchesdirectly target grip strength, essential for lifting, carrying, and everyday tasks.');
    localStorage.setItem('selectedDesc2', 'Enhanced Forearm Muscle Definition');
    localStorage.setItem('selectedDesc2li', 'This routine helps build and define the muscles in the forearms, leading to improved arm aesthetics and a more balanced upper body.');
    localStorage.setItem('selectedDesc3', 'Boosted Metabolic Rate');
    localStorage.setItem('selectedDesc3li', 'Resistance training, including forearm workouts, can increase metabolic rate, aiding in fat loss and overall body composition improvement');

    localStorage.setItem('selectedImage1Src', 'images/fore1.jpg');
    localStorage.setItem('selectedImage2Src', 'images/fore2.jpg');
    localStorage.setItem('selectedImage3Src', 'images/fore3.jpg');
    localStorage.setItem('selectedImage4Src', '');
    localStorage.setItem('selectedImage5Src', '');
    localStorage.setItem('selectedImage6Src', '');

    localStorage.setItem('selectedLink1', 'https://www.youtube.com/embed/ptq_U7gPgm4?si=8_cFZ5JARYxrMmJJ');
    localStorage.setItem('selectedLink2', 'https://www.youtube.com/embed/jgZUDOeiLyE?si=fS8dTjJhI8VIUQDG');
    localStorage.setItem('selectedLink3', 'https://www.youtube.com/embed/qvX0HM2l1jw?si=7WhUiHxJuX6hZ3Ek');
    localStorage.setItem('selectedLink4', '');
    localStorage.setItem('selectedLink5', '');
    localStorage.setItem('selectedLink6', '');

    localStorage.setItem('selectedLinkTitle', 'Forearms Workout');


    window.location.href = 'details.html'; // Redirect to details page
}

