import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import comments from '../../api/comments.json';
import users from '../../api/users.json';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={users.find(x => x.id === post.userId)} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList
      comments={comments.filter(comment => comment.postId === post.id)}
    />
  </div>
);
