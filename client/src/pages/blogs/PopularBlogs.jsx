/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchRelatedBlogs } from '../../redux/features/blogs/relatedBlogs/relatedBlogsSlice';
import RelatedBlogCard from './RelatedBlogCard';

const PopularBlogs = ({tags,currentBlogID}) => {
  const dispatch = useDispatch();
  const {relatedBlogs} = useSelector((state) => state.relatedBlogs);

  useEffect(() => {
    dispatch(fetchRelatedBlogs({tags , id: currentBlogID}))
  }, [dispatch, tags,currentBlogID])

  return (
    
    <section className="text-gray-600 mt-12">
      <h2 className="text-3xl font-bold">Popular Blogs</h2>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
         {
          relatedBlogs.slice(0,3).map((blog) => <RelatedBlogCard key={currentBlogID} blog = {blog}/>)
         }
          {/* Repeat the structure for other blog entries */}
        </div>
      </div>
    </section>
   
  )
}

export default PopularBlogs