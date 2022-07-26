import _ from 'lodash';
export default function sumBy(updatedCounters) {
  return _.sumBy(updatedCounters, (counter) => {
    return counter.action === '+' ? counter.value : -counter.value;
  });
}
