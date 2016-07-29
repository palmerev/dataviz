import d3 from 'd3';
import _ from 'lodash';
import './assets/styles.css';

const data = [ 100, 200, 150, 300, 400, 600 ]

d3.select('body').selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', data => data + 'px')

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
