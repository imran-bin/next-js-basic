import Comments from '@/app/Comments';
import allComments from '@/lib/getComments';
import getSinglePost from '@/lib/getSinglePost';
import { Suspense } from 'react';
export async function generateMetadata({params}){
    const {id} = params
    const post = await getSinglePost(id)
    return {
        title:post?.title,
        description:post.body
    }
}
const singlePost = async ({params}) => {
    const {id} =params
    const  postPromise =  getSinglePost(id)
    const commentPorimse = allComments(id)
    const post = await  postPromise

    return (
        <div>
            
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
            </a>
            <Suspense fallback='<h1>Loading comment..........</h1>'>
              <Comments promise={commentPorimse}></Comments>
            </Suspense>

            
        </div>
    );
};

export default singlePost;