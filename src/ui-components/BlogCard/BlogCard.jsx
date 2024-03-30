import  Button from '../Button/Button'
import "./BlogCard.css";

const BlogCard = ({ className ,blogLink, img, category, datePublished, TopicTitle, description }) => {
  return (
      <div className={`BlogCard ${className}`}>
        <div className="blog-img-section">
            <img src={img ? img : 'loading...'} alt={`${TopicTitle}-img`} />
        </div>
        <section className="blog-card-body">
            <small>{category} - {datePublished}</small>

            <h3>{TopicTitle}</h3>

            <article>{description}</article>

            <Button
             btnLink={blogLink ? blogLink : null} 
             btnType={'ghost'}
             className="blogCard-btn"
              >Read More</Button>
        </section>
      </div>
  );
};

export default BlogCard;
