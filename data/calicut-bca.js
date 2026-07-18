/* ============================================================
   COURSE DATA — University of Calicut / BCA
   Source: CUFYUGP Regulations 2024 (w.e.f. 2024 admission).
   Only core/compulsory Major courses are listed per semester —
   Discipline Specific Elective "baskets" (specialisation tracks
   in sem 5–8) are collapsed to a single generic "Elective Course N"
   entry.

   To edit this course's subjects: just edit the arrays below.
   Nothing in resources.html needs to change.
   ============================================================ */

window.COURSE_DATA = {
  meta: {
    universityLabel: "University of Calicut",
    courseLabel: "BCA",
    syllabusUrl: "https://drive.google.com/file/d/1dq8t7j201DmkhLl5CorayiD2weAu5RzY/view?pli=1",
    // Question-paper year buttons shown for every subject in this course.
    // Fixed on purpose — edit this list directly rather than relying on
    // "today's year minus N", since past papers are tied to real years,
    // not a rolling window.
    paperYears: [2026, 2025, 2024, 2023, 2022],
  },
  semesters: {
    1: [
      // ---- HOW TO LINK A BUTTON TO A REAL FILE ----
      // Add a `links` object to any subject. Only fill in the module/year
      // keys you actually have a file for — anything left out (or left as
      // an empty string) shows as a disabled "coming soon" button instead
      // of a dead link. Keys under `classes`/`notes` must match the MODULES
      // list in resources.html ('Module 1'..'Module 5'); keys under
      // `papers` must match a year in meta.paperYears above.
      {
        code: 'BCA1CJ101',
        name: 'Fundamentals of Computers and Computational Thinking',
        links: {
          classes: {
            'Module 1': 'https://drive.google.com/file/d/1dq8t7j201DmkhLl5CorayiD2weAu5RzY/view?pli=1', 
            'Module 2': '#',
            'Module 3': '#',
            'Module 4': '#',
          },
          notes: {
            'Module 1': '',
          },
          papers: {
            2026: '#',2025: '#',2024: '#',2023: '#',2022: '#',
          },
        },
      },
      { code: 'BCA1CJ102', name: 'Mathematical Foundation for Computer Applications',
        links: {
          classes: {
            'Module 1': 'https://drive.google.com/file/d/1dq8t7j201DmkhLl5CorayiD2weAu5RzY/view?pli=1', 
            'Module 2': '#',
            'Module 3': '#',
            'Module 4': '#',
          },
          notes: {
            'Module 1': '',
          },
          papers: {
            2026: '#',2025: '#',2024: '#',2023: '#',2022: '#',
          },
        },
       },
      { code: 'BCA1CJ103', name: 'Discrete Structures for Computer Applications' },
      { code: 'BCA1FM105', name: 'Digital Marketing' },
      { code: 'BCA1FS111', name: 'Introduction to Computers and Office Automation' },
      { code: 'ENG1FA101', name: 'English' },
    ],
    2: [
      { code: 'BCA2CJ101', name: 'Fundamentals of Programming (C Language)' },
      { code: 'BCA2CJ102', name: 'Statistical Foundation for Computer Applications' },
      { code: 'BCA2CJ103', name: 'Numerical Analysis and Optimization Techniques' },
      { code: 'BCA2FS112', name: 'Data Analysis using Spread Sheet' },
      { code: 'ENG2FA103', name: 'English' },
    ],
    3: [
      { code: 'BCA3CJ201', name: 'Data Structures using C' },
      { code: 'BCA3CJ202', name: 'Computer Networks' },
      { code: 'BCA3CJ203', name: 'Introduction to Data Science' },
      { code: 'BCA3CJ204', name: 'Foundations of Artificial Intelligence' },
      { code: 'BCA3FS113', name: 'Website Designing using Content Management System' },
      { code: 'BCA3MDE102', name: 'Kerala Knowledge System' },
    ],
    4: [
      { code: 'BCA4CJ205', name: 'Database Management System' },
      { code: 'BCA4CJ206', name: 'Python Programming' },
      { code: 'BCA4CJ207', name: 'Software Engineering' },
      { code: 'BCA4CJ208', name: 'Automation and Robotics' },
      { code: 'BCA4FV108', name: 'Introduction to Cyber Laws' },
      { code: 'ENG4FV109', name: 'English' },
    ],
    5: [
      { code: 'BCA5CJ301', name: 'Object Oriented Programming (Java)' },
      { code: 'BCA5CJ302', name: 'Progressive Web Application using PHP' },
      { code: 'BCA5CJ303', name: 'Digital Fundamentals and Computer Organization' },
      { code: 'BCA5EJ301', name: 'Elective Course 1 in Major' },
      { code: 'BCA5EJ302', name: 'Elective Course 2 in Major' },
    ],
    6: [
      { code: 'BCA6CJ304', name: 'Introduction to AI and ML' },
      { code: 'BCA6CJ305', name: 'Principles of Operating System' },
      { code: 'BCA6EJ303', name: 'Elective Course 3 in Major' },
      { code: 'BCA6EJ304', name: 'Elective Course 4 in Major' },
      { code: 'BCA6FV110', name: 'Business Intelligence and Innovation' },
    ],
    7: [
      { code: 'BCA7CJ401', name: 'Advanced Data Structures and Algorithms' },
      { code: 'BCA7CJ402', name: 'Data Science Programming using R' },
      { code: 'BCA7EJ401', name: 'Elective Course 5 in Major' },
      { code: 'BCA7EJ402', name: 'Elective Course 6 in Major' },
      { code: 'BCA7OE401', name: 'Open Elective in Major' },
    ],
    8: [
      { code: 'BCA8EJ404', name: 'Elective Course 8 in Major' },
      { code: 'BCA8EJ405', name: 'Elective Course 9 in Major' },
      { code: 'BCA8EJ406', name: 'Elective Course 10 in Major' },
      { code: 'BCA8FS118', name: 'Project' },
    ],
  },
};
