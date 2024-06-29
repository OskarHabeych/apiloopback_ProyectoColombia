

const Home = () => {

    return (
      <section>
        <Hero />
        <ThingsToDo>
          {
            thingsToDoList.map((item, index) => (
              <ThingCard key={index} details={item} />
            ))
          }
        </ThingsToDo>
        <Deals/>
        <Vacations />
        <AboutUs />
        <Blog>
          {
            articles.map((article, index) => (
              <BlogCard key={index} details={article} />
            ))
          }
        </Blog>
        <Subscription />
      </section>
    )
  }
  
  export default Home