# Belly Button Biodiversity Dashboard

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Before You Begin

1. Create a new repository for this project called `belly-button-challenge`. Do not add this Challenge to an existing repository.

2. Clone the new repository to your computer.

3. Inside your local git repository, copy the files from the `StarterCode` folder contained within the Module 14 Challenge zip file. i.e., `index.html`, `samples.json`, and the `static` folder.

**NOTE**: You will not be required to access the `samples.json` file locally, but it is provided for reference.

4. Push the above changes to GitHub.

5. Deploy the new repository to GitHub Pages.

## Files

Download the following files to help you get started:

[Module 14 Challenge files](https://github.com/some-link)

## Instructions

Complete the following steps:

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

   - Use `sample_values` as the values for the bar chart.
   - Use `otu_ids` as the labels for the bar chart.
   - Use `otu_labels` as the hovertext for the chart.

![Bar Chart](https://some-image-link)

3. Create a bubble chart that displays each sample.

   - Use `otu_ids` for the x values.
   - Use `sample_values` for the y values.
   - Use `sample_values` for the marker size.
   - Use `otu_ids` for the marker colors.
   - Use `otu_labels` for the text values.

![Bubble Chart](https://some-image-link)

4. Display the sample metadata, i.e., an individual's demographic information.

   - Display each key-value pair from the metadata JSON object somewhere on the page.

![Sample Metadata](https://some-image-link)

5. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

**An example dashboard is shown as follows:**

![Dashboard Example](https://some-image-link)

6. Deploy your app to a free static page hosting service, such as GitHub Pages.

## Advanced Challenge Assignment (Optional with no extra points earning)

The following task is advanced and therefore optional.

Adapt the Gauge Chart from [Plotly JavaScript Gauge Charts](https://plot.ly/javascript/gauge-charts/) to plot the weekly washing frequency of the individual.

You will need to modify the example gauge code to account for values ranging from 0 through 9.

Update the chart whenever a new sample is selected.

## Deployment and Repository Links

- [Deployed App](https://your-app-link)
- [GitHub Repository](https://your-repo-link)

Ensure that your repository has regular commits and a thorough `README.md` file.