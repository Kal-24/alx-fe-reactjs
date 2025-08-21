import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return <div>Viewing Post ID: {postId}</div>;
}
