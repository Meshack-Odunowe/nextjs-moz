import BlogSection from "../components/Blog/BlogSection"
import HeroSection from '../components/Blog/HeroSection'
function Blog() {
  return (
    <div>
      <div className='flex min-h-screen   flex-col '>
        <HeroSection />
        <BlogSection/>
        
      </div>    </div>
  )
}

export default Blog
