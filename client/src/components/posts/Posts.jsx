import Post from "../post/Post";

<<<<<<< HEAD
export default function Posts({ posts }) {
  return (
    <div className="posts flex flex-wrap m-5">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
=======
export default function Posts() {
    return (
        <div className="flex m-5 flex-wrap flex-9">
            <SinglePost img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <SinglePost img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <SinglePost img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <SinglePost img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            <SinglePost img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </div>
    );
>>>>>>> 9efcbba05924aae88961082f77ff8059e5b3d5fc
}
