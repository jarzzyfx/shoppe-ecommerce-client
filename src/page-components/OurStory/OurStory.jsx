import './OurStory.css'

const OurStory = () => {
  return (
    <div className="ourStory">
      <h1>About</h1>
      <h3>Who we are and why we do what we do!</h3>
      <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus ex cum vero eveniet natus distinctio? Suscipit facere autem dolore doloribus ratione excepturi voluptatem ea animi. </article>

      <div className="story">
        <h2>Top Trends</h2>
        <img src="/images/top-trends.png" alt="image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium necessitatibus ea fugit dolores aspernatur voluptate voluptatem, illum numquam atque assumenda fugiat rem deserunt aliquam? Rem tempore similique molestiae suscipit quae.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
        </ul>
      </div>
      <div className="story">
        <h2>Product With Care</h2>
        <img src="/images/product-with-care.png" alt="image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium necessitatibus ea fugit dolores aspernatur voluptate voluptatem, illum numquam atque assumenda fugiat rem deserunt aliquam? Rem tempore similique. </p>
      </div>
    </div>
  )
}

export default OurStory