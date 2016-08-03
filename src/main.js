import d3 from 'd3';
import _ from 'lodash';
import './assets/styles.css';

const margin = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
}

const width = 700
const height = 500

const indivualUrl = 'http://54.213.83.132/hackoregon/http/oregon_individual_contributors/10/'
const committeeUrl = 'http://54.213.83.132/hackoregon/http/oregon_committee_contributors/10/'
const businessUrl = 'http://54.213.83.132/hackoregon/http/oregon_business_contributors/10/'

d3.json(indivualUrl, (error, data) => {
    if (error) {
      console.error(error)
    }
    else {
      visualize(data)
    }
})

function visualize(data) {
  const sums = d3.map(data, d => d.sum)
  console.log(sums)
  const xScale = d3.scale.linear()
  .domain([0, sums.length])
  .range([0, width])
  const yScale = d3.scale.linear()
  .domain([0, d3.max(sums)])
  .range([height, 0])
  
}
/*
* ignore this code below - it's for webpack to know that this
* code needs to be watched and not to append extra elements
*/
const duplicateNode = document.querySelector('svg');
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    duplicateNode.parentNode.removeChild(duplicateNode);
  });
}
