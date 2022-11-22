import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="w-96 mt-0 mx-6 mb-10">
      {post.photo && <img className="w-full h-72 object-cover rounded-lg" src={PF + post.photo} alt="" />}
      <div className="flex flex-col items-center">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="text-xs text-kuning leading-5 mt-4 mr-2 cursor-pointer">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="text-2xl font-bold font-playfair mt-4 cursor-pointer">{post.title}</span>
        </Link>
        <hr />
        <span className="italic text-sm mt-4">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc font-playfair text-base mt-4 overflow-hidden text-ellipsis ">{post.desc}</p>
    </div>
  );
}
