import ReactDOM from 'react-dom';
import statistics from './data.json';
import '.'

const data = statistics[0]
    const statictic =
    (
    <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">{data.label}</span>
      <span class="percentage">{data.percentage}</span>
    </li>
    <li class="item">
      <span class="label">{data.label}</span>
      <span class="percentage">{data.percentage}</span>
    </li>
    <li class="item">
      <span class="label">{data.label}</span>
      <span class="percentage">{data.percentage}</span>
    </li>
    <li class="item">
      <span class="label">{data.label}</span>
      <span class="percentage">{data.percentage}</span>
    </li>
  </ul>
</section>
)
ReactDOM.render(statictic, document.querySelector('#root'));

