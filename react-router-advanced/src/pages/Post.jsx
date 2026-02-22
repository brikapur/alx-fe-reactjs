import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Post ID: {id}</h2>
      <p>Dynamic routing working!</p>
    </div>
  );
};

export default Post;