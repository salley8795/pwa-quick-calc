/* script.js */
function submitForm() {
    const formData = {
        date: document.getElementById('date').value,
        partNumber: document.getElementById('partNumber').value,
        expectedBlows: document.getElementById('expectedBlows').value,
        adjExpectedBlows: document.getElementById('adjExpectedBlows').value,
        hours: [
            {
                time: '5 - 6',
                actualBlows: document.getElementById('actualBlows5').value,
                downtime: document.getElementById('downtime5').value,
                efficiency: document.getElementById('efficiency5').value,
                adjEfficiency: document.getElementById('adjEfficiency5').value,
                comments: document.getElementById('comments5').value,
            },
            {
                time: '6 - 7',
                actualBlows: document.getElementById('actualBlows6').value,
                downtime: document.getElementById('downtime6').value,
                efficiency: document.getElementById('efficiency6').value,
                adjEfficiency: document.getElementById('adjEfficiency6').value,
                comments: document.getElementById('comments6').value,
            },
            {
                time: '7 - 8',
                actualBlows: document.getElementById('actualBlows7').value,
                downtime: document.getElementById('downtime7').value,
                efficiency: document.getElementById('efficiency7').value,
                adjEfficiency: document.getElementById('adjEfficiency7').value,
                comments: document.getElementById('comments7').value,
            },
            {
                time: '8 - 9',
                actualBlows: document.getElementById('actualBlows8').value,
                downtime: document.getElementById('downtime8').value,
                efficiency: document.getElementById('efficiency8').value,
                adjEfficiency: document.getElementById('adjEfficiency8').value,
                comments: document.getElementById('comments8').value,
            },
            {
                time: '9 - 10',
                actualBlows: document.getElementById('actualBlows9').value,
                downtime: document.getElementById('downtime9').value,
                efficiency: document.getElementById('efficiency9').value,
                adjEfficiency: document.getElementById('adjEfficiency9').value,
                comments: document.getElementById('comments9').value,
            },
        ]
    };

    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
}
