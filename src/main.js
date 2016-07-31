import d3 from 'd3';
import _ from 'lodash';
import './assets/styles.css';

const data = [ 100, 200, 150, 300, 400, 600 ]

let svg = d3.select('#barChart').append('svg')
  .attr('width', 600)
  .attr('height', 250)

svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', (d, index) => index * 20)
  .attr('y', data => 250 - data)
  .attr('width', 15)
  .style('height', data => data)
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
