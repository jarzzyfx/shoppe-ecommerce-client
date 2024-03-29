import './Blog.css'
import Search  from '../../ui-components/Search/Search'
import LinkSlider from '../../ui-components/LinkSlider/LinkSlider'
import BlogCard from '../../ui-components/BlogCard/BlogCard'
import Button from '../../ui-components/Button/Button'
import { FaAngleRight } from "react-icons/fa6";

const Blog = () => {

const BlogLinks=[
  {
    text:'Fashion',
    url:'#',
  },
  {
    text:'Style',
    url:'#',
  },
  {
    text:'Accessories',
    url:'#',
  },
  {
    text:'Season',
    url:'#',
  },
]

const demodesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptates rem provident iure at accusantium sequi eum quae est, ut odit reiciendis quidem a recusandae aliquam assumenda ratione tenetur eius. Repellat tenetur cupiditate nobis autem ipsa optio esse voluptates voluptatibus blanditiis neque veritatis repellendus sed adipisci fugit nesciunt necessitatibus unde magnam sint impedit aspernatur accusantium libero, et a modi! Commodi temporibus, ducimus officiis facere fugit eum reiciendis enim nostrum rem, rerum architecto doloribus ipsam placeat eaque animi. Commodi reprehenderit repellat iure, ut laudantium perspiciatis earum totam quae quasi adipisci corrupti laborum, ab mollitia labore distinctio nisi atque optio doloribus eos.'

  return (
    <div className="blog">
      <h1>Blog</h1>
      <main className="blog-body">
        <section className="blog-panel-left">
          <Search exposed={true}/>
          <div className="blog-links">
            <h4>Categories</h4>
          <LinkSlider linkFormat={'column'} slider={false} links={BlogLinks}/>
          </div>
        </section>
        <section className="blog-panel-right">
         <div className='blog-items'>
         <BlogCard
          TopicTitle={'Top trends from spring'}
          blogLink={'#'}
          category={'fashion'}
          datePublished={'october 8,2022'}
          description={demodesc}
          img={'/images/product-with-care.png'}
          />
          <BlogCard
          TopicTitle={'Top trends from spring'}
          blogLink={'#'}
          category={'fashion'}
          datePublished={'october 8,2022'}
          description={demodesc}
          img={'/images/womanFace-front.png'}
          />
          <BlogCard
          TopicTitle={'Top trends from spring'}
          blogLink={'#'}
          category={'fashion'}
          datePublished={'october 8,2022'}
          description={demodesc}
          img={'/images/womanFace-side.png'}
          />
          <BlogCard
          TopicTitle={'Top trends from spring'}
          blogLink={'#'}
          category={'fashion'}
          datePublished={'october 8,2022'}
          description={demodesc}
          img={'/images/top-trends.png'}
          />
         </div>

<div className="btn-control-buttons">
              <Button className={'control-btn'} btnType={'fullBlack'}>1</Button>
              <Button className={'control-btn'} btnType={'ghostBlack'}>2</Button>
              <Button className={'control-btn'} btnType={'ghostBlack'}><FaAngleRight /></Button>
        </div>
        </section>
      </main>
    </div>
  )
}

export default Blog