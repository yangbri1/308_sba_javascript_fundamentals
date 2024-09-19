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
      throw("Assignments doesn't match the course material\n");
    }
    // otherwise ...
    else{
      // notify the user of the course-assignments mismatch
      console.log("Assignments are related to course material");
    }
  }
  // catching any errors thrown during the error handling procedure
  catch(error){
    // console.log() out exact error
    console.log(error);
  }
  // always execute no matter if the try-catch is executed or not
  finally{

    // try-catch block to check if any of the assignment total points are worth 0 or if they are strings
    try{
      
      // loop through the AssignmentGroup object of objects (and an array)
      for(let z = 0; z < ag.assignments.length; z++){

        // check if the points_possible is a non-zero value
        // if so could cause some arithmetic headaches (dividing by 0 ... jk JavaScript would implicitly convert)
        if(ag.assignments[z].points_possible === 0){
          // if so throw out a notification to the user
          throw("No points will be awarded for this assignment");
        }
        // checks if the points_possible element is a 'number' data type ...
        if(typeof(ag.assignments[z].points_possible) !== 'number'){
          console.log("points_possible is not of 'number' type\n");
          // if points_possible is NOT a data type ... is it a 'string'?
          if(typeof(ag.assignments[z].points_possible) === 'string'){
            // if so throw out error
            throw("points_possible is of 'string' data type\n");
          }
        }
      }
      console.log(`points_possible element checked for nonzero passed`);
      console.log(`points_possible element checked for mon-string passed`);

    }
    // catch the thrown error from either points_possible element being 0 or a string
    catch(err){
      // display the error
      console.log(err);
    }

  }
  //console.log(ag.assignments.length);

  // console.log((ag.assignments[1].points_possible) === 0);

  // try-catch block to check if any of the learner submission scores are strings (not checking for zero's as it'll be in numerator)
  try{

    // loop through the LearnerSubmission array of objects
    for(let z = 0; z < submissions.length; z++){

      // if learner submission is a string
      if(typeof(submissions[z].submission.score) === 'number' && typeof(submissions[z].submission.score) === 'string'){
        throw("Learner's submission score is a string\n");
      }
      // otherwise prompt this
      // else{
      //   console.log("Learner submission scores are valid\n");
      // }
    }
    console.log(`score element checked for non-string passed\n`);
  }
  // catch the thrown error
  catch(e){
    // display the error
    console.log(e);
  }


  // let str = 'abc';
  // console.log(typeof(str) !== 'number'); 

  // let a = 0;
  // let b = 1; 
  // console.log(b/a); // infinity -- does Not throw an error ...

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
  // declaration block
  let score_ary = [];   // array of scores sum
  let num_ary = []      // array of scores
  let total_avg_pts = 0;// 
  let flag = false;     // set a flag to check if there are any crazy far due dates
  let skips_counter = 0;
  // let num = 0;
  // let total_pts = 0;
  for(let i = 0; i < submissions.length; i++){
    
    let num = 0;
    let total_pts = 0;
    let submission_date = new Date(submissions[i].submission.submitted_at) / ( 1000 * 3600 * 24); // submission date from milliseconds to days
    let due_date = due_dates(ag); // array of due_dates in milliseconds
    // console.log(typeof due_date[0]);
    let score = submissions[i].submission.score; // retrieve submission score
    //console.log(score);
    let assign_id = submissions[i].assignment_id; // submission assignment id
    //console.log(assign_id);
    
    
    if(submission_date > due_date[Number(assign_id-1)]){ // index to respective due date 
      //console.log(score);
      //console.log(assign_total_pts[assign_id]);
      num += score - (assign_total_pts[assign_id] * 0.1); // used square brackets to access object since dot notation didn't work here
      //console.log(num);
      total_pts += assign_total_pts[assign_id];
      total_avg_pts += total_pts;
      //console.log(total_pts);
      // score_ary.push(total_pts);
      
    }
    // if submission date have NOT hit the deadline ...
    else if(submission_date < due_date[Number(assign_id-1)]){
      // allocate memory to carry value of nearby bound (arbitrary)-- 25 days
      let near_date = due_date[Number(assign_id-1)] - 25;
      // if submission date were to be within the range
      if(submission_date > near_date){
        // append to both sum of scores & total available points
        num += score;
        total_pts += assign_total_pts[assign_id];
        total_avg_pts += total_pts;
      }
      // if submission date exceeds the near date bounds
      else{
        // throw up a flag -- indicating there was a skipped assignment
        flag = true;
        // rack up number of time this else block was accessed
        skips_counter++;
        // skip the rest of this iteration
        continue;
      }

    }
    // otherwise if the submission date is spot on the due_date
    else{
      // saves both score and available points
      num += score;
      total_pts += assign_total_pts[assign_id];
      total_avg_pts += total_pts;
    }
    // push to respective arrays
    num_ary.push(num);
    score_ary.push(num / total_pts);
    // total_avg_pts += total_pts;
    
    // result[submissions[i].]
    
    //console.log(num);
    // console.log("num_ary", num_ary);
    // console.log("totally", total_avg_pts);
    
  }
  // console.log(num_ary);
  // //console.log(num, total_pts);
  // console.log(flag);
  // console.log(skips_counter);
  // console.log(score_ary);
  // console.log(assign_total_pts);

  // let num_valid;
  // number of submitted assignments by each student
  let assign_avg_count = 0;

  // if there was some assignments not factored in
  if(flag === true){
    // and if the length of the average scores were to be a multiple of student count
    if(score_ary.length % unique_id_array.length == 0){
      // delegate how many of the entries will be given to each student object in results
      assign_avg_count = score_ary.length / unique_id_array.length;
    }
    // otherwise
    else{
      /* delegate the known entries to their respective student object --- although every assignment's due date
      is the same for everyone so if it falls outside the bound for one student, it should be the same for everyone
      --- this case might not even matter */
      assign_avg_count = Math.floor(score_ary.length / unique_id_array.length);
    }
  }

  // console.log(assign_avg_count);
  
  let m = 0;
  // iterate through array of students
  while(m < unique_id_array.length){
    
    let student_sum = 0;
    // cycles through one particular student's grades
    let k = 0
    for(; k < assign_avg_count; k++){
      // console.log(score_ary[0]);
      // this one can stay at index 0 since .shift() is removing 1st element from array so score_ary[0] is changing per iteration
      // student_sum += score_ary[0]; 
      // console.log("hmmm", student_sum); // this was taking the sum of the already calculated average (not what we want)
      student_sum += num_ary[k];
      // console.log(student_sum, "here"); 
      let first_score = score_ary.shift();
      
      result[m][`${k+1}`] = first_score;  // NOTE: objects consists of unordered key-value pairs unlike ordered array
    
    }
    
    // 
    result[m]['avg'] =  student_sum / total_avg_pts * 2;
    // result[m]['avg'] = student_sum; //ag.assignments[];
    // console.log("k", k);

    // starting from the 1st index in num_ary array remove 2 elements
    num_ary.splice(0, k);

    //console.log("did num_ary change?", num_ary);
    //student_sum = 0;
    m++;
  }
  // console.log("num_ary outside scope", num_ary);
  // console.log(result);


  // ONLY to check math & practice dot calls for objects, brackets for arrays
  // let avg_one = submissions[0].submission.score / ag.assignments[0].points_possible;
  // let avg_two = submissions[1].submission.score / ag.assignments[1].points_possible;
  // let avg_one_two = (submissions[0].submission.score + submissions[1].submission.score) / (ag.assignments[0].points_possible + ag.assignments[1].points_possible);
  // console.log(avg_one);
  // console.log(avg_two);
  // console.log("avg1", avg_one_two);

  // let avg_1 = submissions[3].submission.score / ag.assignments[0].points_possible;
  // let avg_2 = (submissions[4].submission.score - (ag.assignments[1].points_possible * 0.10)) / ag.assignments[1].points_possible;
  // let avg_1_2 = (submissions[3].submission.score + (submissions[4].submission.score - (ag.assignments[1].points_possible * 0.10))) / (ag.assignments[0].points_possible + ag.assignments[1].points_possible);
  // console.log(avg_1);
  // console.log(avg_2);
  // console.log("avg2", avg_1_2);

  /* given example output --- part of skeleton code */
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
  
  // return result to call 
  return result; 
}

// calls the getLearnerData() function & put outputs into const result variable
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// display result
console.log(result);


/* --- helper functions below --- */

// create an array of unique student id (no repeats)
function unique_student_id(submissions){
  // declaration block
  const unique_student = [];
  const student = {};
  // iterate through the LearnerSubmissions array
  for(let i = 0; i < submissions.length; i++){
    // .includes() array method checks if unique_student_id array already holds learner_id
    if(unique_student.includes(submissions[i].learner_id) == false){
      // if NOT .push() the id to unique_student_id
      unique_student.push(submissions[i].learner_id);
    }
  }
  // return array of objects to call
  return unique_student;
}
// const unique_id_array = unique_student_id(LearnerSubmissions);
// console.log(unique_id_array);


// return an array of due dates for the assignments (in days)
function due_dates(ag){
  // declare variables for later use
  let due_date_array = [];
  let k = 0;
  // cycles via the assignments given in AssignmentGroup object ...
  while(k < ag.assignments.length){
    // utilize the built-in .getTime() method to convert the date to milliseconds since 1-1-1970
    /* NOTE: .getTime() method is a part of the Date object not String 
    so had to cast the array string element to a Date object */
    let dd = new Date(ag.assignments[k].due_at).getTime();
    // convert due date from 1-1-1970 from miliseconds to days
    let days = dd / (1000 * 3600 * 24);
    // .push() it into declare due_date_array
    due_date_array.push(days);
    // increment by 1 to continue loop
    k++;
  }
  // yield due_date_array upon invocation
  return due_date_array;
}
