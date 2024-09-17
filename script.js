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

  // declare empty result array to append objects
  const result = [];

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

  let score_a = 0;
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

    // // if the detected learner has an id number of 125
    // if(submissions[i].learner_id === student_a.id){
    //   // add his score to his previous record
    //   score_a += submissions[i].submission.score;
    //   //console.log(score_a);
    //   // increment by 1 to count numbers of submission by student 125
    //   sub_a_count++;

    // }

    // // if the detected learner has an id number of 132
    // else if(submissions[i].learner_id === student_b.id){
    //   // add his score to his previous record
    //   score_b += submissions[i].submission.score;
    //   console.log(submissions[i].submission.score);
    //   // increment by 1 to counter numbers of submission by student 132
    //   sub_b_count++;
    // }
    
    // student['id'] = 125;
    // console.log(student);
  }
  // student_a['score'] = score_a;
  // student_b['score'] = score_b;
  // console.log(student_b);

  console.log(result);
  console.log(unique_student_id);
  // console.log(score_a, score_b);
  
  //return student;
  // return result; <-- un-note this later
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);


const avg_one = average_score_one(AssignmentGroup, LearnerSubmissions);
console.log(avg_one);

// helper functions

function unique_student_id(submissions){
  const unique_student = [];
  const student = {};
  for(let i = 0; i < submissions.length; i++){
    // .includes() array method checks if unique_student_id array already holds the  learner_id
    if(unique_student.includes(submissions[i].learner_id) == false){
      // if NOT .push() the id to unique_student_id
      unique_student.push(submissions[i].learner_id);
    }
  }
  return unique_student;
}
// const unique_id_array = unique_student_id(LearnerSubmissions);
// console.log(unique_id_array);

function average_score_one(ag, submissions){
  let avg_one = submissions[0].submission.score / ag.assignments[0].points_possible;
  return avg_one;
}