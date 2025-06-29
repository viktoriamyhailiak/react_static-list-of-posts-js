import { PostInfo } from '../PostInfo/PostInfo';
import posts from '../../api/posts.json';

export const PostList = () => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
