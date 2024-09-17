// The provided course information. Skeleton code from given codesandbox instructions.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};
  
// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};
  
// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  // declare empty result array to append objects
  const result = [];

  // apply the array method .sort() to sort the submissions alphabetically, although arrays are ordered already...
  submissions.sort();

  // try-catch block here to test if the assignments aligned with course material
  try{
    
    // if the assignment group's id matches w/ the course's id
    if(ag.course_id !== course.id){
      // print out successful status
      console.log("Assignments doesn't match the course material");
    }
    // otherwise ...
    else{
      // notify the user of the course-assignments mismatch
      throw "Assignments are related to course material";
    }
  }
  // catching any errors thrown during the error handling procedure
  catch(error){
    // console.log() out exact error
    console.log(error);
  }

  

  

  // call the unique_student_id function for no duplicates of student id
  const unique_id_array = unique_student_id(submissions);

  // loop via each element in the array
  unique_id_array.forEach(element => {

    // declare empty student object to collect data
    let student = {};

    // include them as the value to the "id" key
    student['id'] = element;

    // .push() the student object to the result array
    result.push(student);

  });
  
  // declare empty object to grab each possible total assignment points
  let assign_total_pts = {};

  // for-in loop for each total assignment points
  for(let key in ag.assignments){
    // console.log(typeof key);
    // append each elements to freshly made assign_total_pts object above
    //assign_total_pts.push(ag.assignments[key].points_possible);
    assign_total_pts[`${Number(key)+1}`] = ag.assignments[key].points_possible;
    
    
  }
  let score_ary = [];
  let num = 0;
  total_pts = 0;
  for(let i = 0; i < submissions.length; i++){
    
    let submission_date = new Date(submissions[i].submission.submitted_at); // submission date in milliseconds
    let due_date = due_dates(ag); // array of due_dates in milliseconds
    let score = submissions[i].submission.score; // retrieve submission score
    //console.log(score);
    let assign_id = submissions[i].assignment_id; // submission assignment id
    console.log(assign_id);
    // for(let j = 0; j < unique_id_array.length; j++){
      if(submission_date > due_date[Number(assign_id-1)]){ // index to respective due date 
        console.log(score);
        //console.log(assign_total_pts[assign_id]);
        num += score - (assign_total_pts[assign_id] * 0.1); // used square brackets to access object since dot notation didn't work here
        console.log(num);
        total_pts += assign_total_pts[assign_id];
        console.log(total_pts);
      }
      else if(submission_date == due_date[Number(assign_id-1)]){
        total_pts += assign_total_pts.assign_id;

      }
      else{

      }
    // }
    //console.log(num);
  }
  // console.log(num);
  console.log(assign_total_pts);
  // iterate through the LearnerSubmissions array
  for(let i = 0; i < submissions.length; i++){ // loops 5 times
    // utilize the built-in .getTime() method to convert the date to milliseconds since 1-1-1970
    /* NOTE: .getTime() method is a part of the Date object not String 
    so had to cast the array string element to a Date object */
    let submission_date = new Date(submissions[i].submission.submitted_at);
    //console.log(typeof submission_date, submission_date.getTime());
    // let due_date = new Date(ag.assignments.due_at).getTime();
    let due_date = due_dates(ag);
    // console.log(due_date);
    
    // if the assignment was submitted after the due date had passed
    // if(submission_date > due_date){
    // }


    // // if submission id matches to 1st student ...
    // if(submissions[i].learner_id === result[0].id){
    //   // and if the submitted assignment id is 1 ...
    //   if(submissions[i].assignment_id === 1){
    //     //submissions[0].submissions.score / assign_total_pts[0]

    //   }
    // } 
    // // if submission id matches to the 2nd student
    // if(submissions[i].learner_id === result[1].id){
    //   // submissions[]
    //   console.log(result[0].id);
    // }
  }
  
  let avg_one = submissions[0].submission.score / ag.assignments[0].points_possible;
  let avg_two = submissions[1].submission.score / ag.assignments[1].points_possible;
  console.log(avg_one);
  console.log(avg_two);

  let avg_1 = submissions[3].submission.score / ag.assignments[0].points_possible;
  let avg_2 = (submissions[4].submission.score - (ag.assignments[1].points_possible * 0.10)) / ag.assignments[1].points_possible;
  console.log(avg_1);
  console.log(avg_2);

  // for(let i = 0; i < ){
  //   let avg_one = submissions[0].submission.score / ag.assignments[0].points_possible;
  // }

  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  let numerator_sum = 0;
  let denominator_sum = 0;
  let score_b = 0;

  let sub_a_count = 0;
  let sub_b_count = 0;

  let total_points_a = 0;
  let total_points_b = 0;

  let avg_a = 0;
  let avg_b = 0;

  // const d = new Date("3156-11-15");
  // const date = new Date("3156-11-15");

  // console.log(d.getTime() === date.getTime());

  // loops through the group of assignments 
  // for(let j = 0; j < ag.assignments.length; j++){
  // }
  

  // iterate through the parameter submissions (LearnSubmissions)
  for(let i = 0; i < submissions.length; i++){  // total of 5 submissions 
    
    // if(submissions[i].assignment_id in ag.assignments.id){
    
    // }
    // let due_date = ag.assignments[i]
    // if(submissions[i].submission.submitted_at.getTime() <= )

    // if the learner id is detected as valid
    if(unique_id_array.includes(submissions[i].learner_id)){
      // add his score to his previous record
      numerator_sum += submissions[i].submission.score;
      //console.log(score_a);
      // increment by 1 to count numbers of submission by student 125
      sub_a_count++;

    }

    // // if the detected learner has an id number of 132
    // else if(submissions[i].learner_id === unique_id_array[1]){
    //   // add his score to his previous record
    //   score_b += submissions[i].submission.score / 200;
    //   //console.log(submissions[i].submission.score);
    //   // increment by 1 to counter numbers of submission by student 132
    //   sub_b_count++;
    // }
    
    // student['id'] = 125;
    // console.log(student);
  }
  // student_a['score'] = score_a;
  // student_b['score'] = score_b;
  // console.log(student_b);

  //console.log(result);
  console.log(numerator_sum);
  
  
  return result; // un-note this later
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);




// helper functions

// create an array of unique student id (no repeats)
function unique_student_id(submissions){
  const unique_student = [];
  const student = {};
  // loops through submissions
  for(let i = 0; i < submissions.length; i++){
    // .includes() array method checks if unique_student_id array already holds learner_id
    if(unique_student.includes(submissions[i].learner_id) == false){
      // if NOT .push() the id to unique_student_id
      unique_student.push(submissions[i].learner_id);
    }
  }
  return unique_student;
}
// const unique_id_array = unique_student_id(LearnerSubmissions);
// console.log(unique_id_array);

function due_dates(ag){
  let due_date_array = [];
  let k = 0;
  while(k < ag.assignments.length){
    let dd = new Date(ag.assignments[k].due_at).getTime();
    due_date_array.push(dd);
    k++;
  }
  return due_date_array;
}
