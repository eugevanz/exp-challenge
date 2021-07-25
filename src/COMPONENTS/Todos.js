import React from 'react'
function Todos () {
  return (<div className="uk-card uk-margin-large-bottom">
    <div className="uk-card-header uk-padding-remove-bottom">
      <div className="uk-grid-small uk-flex-middle" uk-grid="true">
        <div className="uk-width-auto">
          <span uk-icon="heart"></span>
        </div>
        <div className="uk-width-expand">
          <span className="uk-text-bold" style={{ color: "white" }}>Today's Todo list</span>
          <p className="uk-text-meta uk-margin-remove-top"><time dateTime="2016-04-01T19:00">April 01, 2016</time></p>
        </div>
      </div>
    </div>
    <div className="uk-card-body uk-padding-remove-vertical">
      <ul className="uk-list uk-list-divider">
        <li>
          <article className="uk-article">
            <div className="uk-article-meta">For detracty charmed add talking age. Shy resolution instrument unreserved man few.</div>
            <div className="uk-text-small uk-text-warning">Urgent & Not Important</div>
          </article>
        </li>
        <li>
          <article className="uk-article">
            <div className="uk-article-meta">Way sentiments two indulgence uncommonly own.</div>
            <div className="uk-text-small uk-text-danger">Urgent & Important</div>
          </article>
        </li>
        <li>
          <article className="uk-article">
            <div className="uk-article-meta">Donec dapibus mauris id odio ornare tempus amet.</div>
            <div className="uk-text-small uk-text-success">Not Urgent & Not Important</div>
          </article>
        </li>
        <li>
          <article className="uk-article">
            <div className="uk-article-meta">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet.</div>
            <div className="uk-text-small uk-text-warning">Urgent & Not Important</div>
          </article>
        </li>
        <li>
          <article className="uk-article">
            <div className="uk-article-meta">In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper.</div>
            <div className="uk-text-small uk-text-primary">Not Urgent & Important</div>
          </article>
        </li>
      </ul>
    </div>
  </div>)
}
export default Todos