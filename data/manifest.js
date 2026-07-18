/* ============================================================
   COURSE MANIFEST
   Maps "universityKey:courseKey" (the same keys select-course.html
   already sends as URL params) to the data file that holds that
   course's syllabus.

   To add a new course later:
   1. Create /data/<university>-<course>.js in the same shape as
      the existing files (window.COURSE_DATA = { meta, semesters }).
   2. Add one line below.
   3. Add the option to select-course.html's dropdown data.
   That's it — resources.html itself never needs to change.
   ============================================================ */

window.COURSE_MANIFEST = {
  "calicut:bca":    "data/calicut-bca.js",
  "calicut:bsc_cs": "data/calicut-bsc-cs.js",
};
