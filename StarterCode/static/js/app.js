// 1. Use D3 library to read in samples.json from the URL: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

// Assign provided url as constant

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch data and print in console for confirmation

const data = d3.json(url);

console.log("Data Promise:", data);

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

// First of all, I do not know the syntax for a horizontal bar chart. Find that.

var slice = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
  }];
  
  Plotly.newPlot('myDiv', slice);

// Second of all, I do not know how to 'call' specific fields from data. Find that.

const sampleValues = data.sample_values;
const otuIds = data.otu_ids;
const otuLabels = data.otu_labels;

// 2.1 Use sample_values as the values for the bar chart
// 2.2 Use otu_ids as the labels for the bar chart
// 2.3 Use otu_labels as the hovertext for the chart

// Define the dimensions for the chart
const width = 500;
const height = 300;

// Create a scale for the x-axis based on the sample values
const xScale = d3.scaleLinear()
  .domain([0, d3.max(sampleValues)])
  .range([0, width]);

  // Create a scale for the y-axis based on the OTU IDs
const yScale = d3.scaleBand()
.domain(otuIds)
.range([0, height])
.padding(0.1);

// Create the SVG element to hold the chart
const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create the horizontal bars
svg.selectAll("rect")
  .data(sampleValues)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", (_, i) => yScale(otuIds[i]))
  .attr("width", d => xScale(d))
  .attr("height", yScale.bandwidth())
  .attr("fill", "steelblue");

// Add labels to the bars
svg.selectAll("text")
  .data(sampleValues)
  .enter()
  .append("text")
  .text((d, i) => otuLabels[i])
  .attr("x", 5)
  .attr("y", (_, i) => yScale(otuIds[i]) + yScale.bandwidth() / 2)
  .attr("dy", "0.35em")
  .attr("fill", "white");


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




