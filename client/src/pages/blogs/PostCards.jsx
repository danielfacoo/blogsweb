import  { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { fetchBlogs } from '../../redux/features/blogs/blogsSlice';
import Card from './Card';


const PostCards = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error} = useSelector((state) => state.blogs)   ;

  

//dispatch action to get blogs 
  
useEffect (() => {
  dispatch(fetchBlogs())
}, [dispatch])
 console.log(blogs)

  return (
    <div className="w-full lg:w-2/3">

    {
      !isError && !isLoading && blogs?.length >0 ? (<div>
        {
          blogs.map((blog, index) => (<Card blog={blog} key ={index}/>))
        }
      </div>) : <div>No blogs found</div> 
    }

    

  </div>
  )
}

export default PostCards