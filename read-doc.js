const mammoth = require('mammoth');
const fs = require('fs');

const docPath = 'Course_Submission_Wizard_Feature_Context.docx';

mammoth.extractRawText({ path: docPath })
    .then(result => {
        console.log(result.value);
    })
    .catch(err => {
        console.error('Error reading document:', err);
    });
