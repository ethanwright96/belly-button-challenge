// 1. Use D3 library to read in samples.json from the URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

// Assign provided url as constant

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch data and process it
d3.json(url).then(data => {
    console.log("Data:", data);
  
    // Create an array of each data field
    let names = data.names;
    let metadata = data.metadata;
    let samples = data.samples;
    let sampleValues = samples.map(function(sample) {
        return sample.sample_values;
    });
    let otuIds = samples.map(function(sample) {
        return sample.otu_ids;
    });
    let otuLabels = samples.map(function(sample) {
        return sample.otu_labels;
    });
    let wfreq = metadata.map(function(sample) {
        return sample.wfreq;
    });
    let id = metadata.map(function(sample) {
        return sample.id;
    });
    
    // Print the data to the console to verify it was read in correctly
    console.log("Names:", names);
    console.log("Metadata", metadata);
    console.log("Samples:", samples);
    console.log("Sample Values:", sampleValues);
    console.log("OTU Ids:", otuIds);
    console.log("OTU Labels:", otuLabels);

    // Further processing or manipulation of the data can be done here
  }).catch(error => {
    console.error("Error fetching data:", error);
  });

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

  // Select the container element for the horizontal bar plot
const barContainer = d3.select("#bar");

// Fetch the starter data for the plot and process it
d3.json(url).then(data => {
  // Extract the name that appears first in names
  let name = data.names[0];
  // Extract the top 10 sample values for that name
  let topTenSampleValues = data.samples.find(sample => sample.id === name).sample_values.slice(0, 10);
  // Extract the corresponding top 10 OTU ids for that name
  let topTenOtuIds = data.samples.find(sample => sample.id === name).otu_ids.slice(0, 10);
  // Extract the corresponding top 10 OTU labels for that name
  let topTenOtuLabels = data.samples.find(sample => sample.id === name).otu_labels.slice(0, 10);

  // Create the horizontal bar plot
  const svg = barContainer.append("svg")
    .attr("width", 500)
    .attr("height", 500);

  const barHeight = 30;
  const barSpacing = 3;

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(topTenSampleValues)])
    .range([0, 400]);

  const yScale = d3.scaleBand()
    .domain(topTenOtuIds.map(id => `OTU ${id}`))
    .range([0, (barHeight + barSpacing) * topTenOtuIds.length]);

  const bars = svg.selectAll("rect")
    .data(topTenSampleValues)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (_, i) => yScale(`OTU ${topTenOtuIds[i]}`))
    .attr("width", d => xScale(d))
    .attr("height", barHeight)
    .attr("fill", "steelblue")
    .attr("data-otu-id", (_, i) => topTenOtuIds[i]);

  const labels = svg.selectAll("text")
    .data(topTenSampleValues)
    .enter()
    .append("text")
    .attr("x", d => xScale(d) + 5)
    .attr("y", (_, i) => yScale(`OTU ${topTenOtuIds[i]}`) + barHeight / 2)
    .attr("dy", "0.35em")
    .text((d, i) => `OTU ${topTenOtuIds[i]}`)
    .attr("fill", "white");

  // Add hovertext using otu_labels
  bars.append("title")
    .text((_, i) => topTenOtuLabels[i]);

}).catch(error => {
  console.error("Error fetching data:", error);
});


// On change to the DOM, call optionChanged()
d3.selectAll("#selDataset").on("change", optionChanged);

// Define function that detects change in selection in dropdown menu and updates the plot accordingly
function optionChanged(name) {
    // Call the data using D3
    
    // Filter the data for the selected name
    let filteredData = data.filter(data => data.name === name);
    // Fetch the filteredData fields for the plot and process it

    // Fetch the updated data for the plot and process it
    d3.json(url).then(data => {
        // Extract the top 10 sample values for that name
        let topTenSampleValues = data.samples.find(sample => sample.id === name).sample_values.slice(0, 10);
        // Extract the corresponding top 10 OTU ids for that name
        let topTenOtuIds = data.samples.find(sample => sample.id === name).otu_ids.slice(0, 10);
        // Extract the corresponding top 10 OTU labels for that name
        let topTenOtuLabels = data.samples.find(sample => sample.id === name).otu_labels.slice(0, 10);




    







// // Function called by DOM changes
// function getData() {
//     let dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option with let
//     let dataset = dropdownMenu.property("value");
//     // Initialize an empty array test subject's data
//     let data = [];

//     if (dataset == '940') {


// }


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




