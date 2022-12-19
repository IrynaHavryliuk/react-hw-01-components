// import React from 'react';
import ReactDOM from 'react-dom';
import profiles from './user.json';
import './profile.css';

const data = profiles[0];

const profile = (
  <div class="profile">
    <div class="description">
      <img
        src={data.avatar}
        alt={data.tag}
        class="avatar"
      />
      <p class="name">{data.username}</p>
      <p class="tag">{data.tag}</p>
      <p class="location">{data.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>);
ReactDOM.render(profile, document.querySelector('#root'));