// 1. Use D3 library to read in samples.json from the URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

// Assign provided url as constant

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch data and print in console for confirmation

const data = d3.json(url);

console.log("Data Promise:", data);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    // Access and save key fields
    var names = data.names;
    
    var samples = data.samples;

    // Extract sample_values
    var sampleValues = samples.map(function(sample) {
        return sample.sample_values;
    });
    // Extract otu_ids
    var otuIds = samples.map(function(sample) {
        return sample.otu_ids;
    });
    // Extract otu_labels
    var otuLabels = samples.map(function(sample) {
        return sample.otu_labels;
    })

    // Print the saved data to the console
    console.log(sampleValues);
    console.log(otuIds);
    console.log(otuLabels);
  });

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

var slice = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
  }];
  
  Plotly.newPlot('bar', slice);

// Second of all, I do not know how to 'call' specific fields from data. Find that.

// 2.1 Use sample_values as the values for the bar chart
// 2.2 Use otu_ids as the labels for the bar chart
// 2.3 Use otu_labels as the hovertext for the chart


// 3. Create a bubble chart that displays each sample

// 3.1 Use otu-ids for the x values
// 3.2 Use sample_values for the y values
// 3.3 Use samples_values for the marker size
// 3.4 Use otu_ids for the marker colors
// 3.5 Use otu_labels for the text values




// 4. Display the sample metadata, i.e., an individual's demographic information




// 5. Display each key-value pair from the metadata JSON object somewhere on the page




// 6. Update all the plots when a new sample is selected. Create any layout you would like for your dashboard.




// 7. Deploy app to a free static page hosting service, such as GitHub Pages.




// Submission: Submit the links to your deployment and GitHub repo. Repo should have regular commits and a thorough README file.




