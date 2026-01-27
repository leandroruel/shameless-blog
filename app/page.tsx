import { BlogPosts } from "app/components/posts";
import { AuthorAvatar } from "./components/author-avatar";
import { configOwner } from "./config/owner";

export const metadata = {
  title: "home",
  description: "welcome to my personal website.",
};

export default function Page() {
  return (
    <section>
      <div className="gap-2 flex justify-between">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          it's me, {configOwner.displayName}
        </h1>
        <AuthorAvatar />
      </div>
      <p className="mb-4">
        {configOwner.bio}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
