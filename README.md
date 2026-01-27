# Shameless Blog 📝

A modern, fast, and minimalist personal blog built with Next.js 15, featuring Server-Side Rendering (SSR), Static Site Generation (SSG), and MDX support for rich content creation.

## ✨ Features

- 🚀 **Next.js 15** with App Router and Server Components
- 📱 **Fully Responsive** design with Tailwind CSS
- 📝 **MDX Support** - Write blog posts with React components
- 🎨 **Dark Mode** support
- 🔍 **SEO Optimized** with metadata and Open Graph tags
- 📊 **RSS Feed** generation
- 🗺️ **Sitemap** automatic generation
- 💬 **Comments System** with Utterances (GitHub Issues)
- 📈 **Analytics** with Vercel Analytics
- ⚡ **Performance Monitoring** with Vercel Speed Insights
- 🎯 **TypeScript** for type safety
- 💅 **Biome** for linting and formatting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (canary)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Content**: MDX (next-mdx-remote)
- **Fonts**: Geist Sans & Geist Mono
- **Code Highlighting**: sugar-high
- **Linter/Formatter**: Biome
- **Analytics**: Vercel Analytics & Speed Insights

## 📦 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shameless-blog.git
cd shameless-blog
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure your personal information

Edit the `app/config/owner.ts` file with your information:

```typescript
export const configOwner: IConfigOwner = {
  name: "Your Full Name",
  displayName: "Your Display Name",
  email: "your.email@example.com",
  website: "https://your-website.com",
  bio: "Your bio or tagline",
  social: {
    twitter: "https://twitter.com/your-username",
    github: "https://github.com/your-username",
    githubUsername: "your-username",
    linkedin: "https://www.linkedin.com/in/your-username/",
  },
  avatar: "/avatar.jpeg",
  commentsRepo: "your-username/blog-comments",
};
```

### 4. Replace the avatar

Replace `public/avatar.jpeg` with your own avatar image.

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✍️ Creating Blog Posts

### Adding a New Post

1. Create a new `.mdx` file in `app/blog/posts/`:

```bash
touch app/blog/posts/my-first-post.mdx
```

2. Add frontmatter and content:

```mdx
---
title: "My First Blog Post"
publishedAt: "2024-01-27"
summary: "This is a short summary of my blog post"
issueTerm: "my-first-post"
---

# Hello World!

This is my first blog post using MDX.

You can use **markdown** and React components!
```

### Frontmatter Fields

- `title` (required): Post title
- `publishedAt` (required): Publication date (YYYY-MM-DD)
- `summary` (required): Short description for SEO and preview
- `issueTerm` (optional): GitHub issue identifier for comments
- `image` (optional): Custom OG image path

### Using React Components in Posts

You can import and use React components in your MDX files:

```mdx
import { CustomComponent } from "../components/custom-component";

# My Post

<CustomComponent />
```

## 🎨 Customization

### Styling

- Global styles: `app/global.css`
- Tailwind config: Using Tailwind CSS 4 (no config file needed)
- Dark mode: Automatic with `dark:` utility classes

### Components

All reusable components are in `app/components/`. Feel free to modify them:

- `nav.tsx`: Navigation bar
- `footer.tsx`: Footer with copyright
- `posts.tsx`: Blog post listing
- `mdx.tsx`: Custom MDX components (code blocks, links, etc.)

### Comments System with Utterances

This blog uses [Utterances](https://utteranc.es/), a lightweight comments widget built on GitHub Issues. Here's how it works:

#### How Utterances Works

When someone comments on your blog post:

1. **First-time setup**: The reader must authorize the Utterances app via GitHub OAuth
2. **Issue creation**: Utterances automatically creates a GitHub Issue in your designated repository
3. **Comment mapping**: Each blog post is linked to its own unique Issue using the `issueTerm` from the post's frontmatter
4. **Real-time display**: Comments appear instantly on your blog, pulled directly from GitHub Issues
5. **Benefits**:
   - No database needed
   - Markdown support in comments
   - GitHub notifications for new comments
   - Free hosting via GitHub
   - Reduces spam (requires GitHub account)
   - Full moderation control via GitHub Issues

#### Setup Instructions

**Step 1: Create a Comments Repository**

```bash
# Create a new public repository on GitHub
# Example: your-username/blog-comments
```

Important: The repository **must be public** for Utterances to work.

**Step 2: Install the Utterances App**

1. Go to [https://github.com/apps/utterances](https://github.com/apps/utterances)
2. Click "Install"
3. Choose your comments repository (e.g., `your-username/blog-comments`)
4. Grant the necessary permissions

**Step 3: Configure Your Blog**

Update `app/config/owner.ts`:

```typescript
export const configOwner: IConfigOwner = {
  // ... other fields
  commentsRepo: "your-username/blog-comments", // 👈 Your comments repo
};
```

**Step 4: Set Issue Terms in Blog Posts**

In each MDX blog post, add the `issueTerm` field:

```mdx
---
title: "My Awesome Post"
publishedAt: "2024-01-27"
summary: "Post summary"
issueTerm: "my-awesome-post" # 👈 Unique identifier for this post
---
```

The `issueTerm` will be used as the Issue title in your comments repository.

#### Managing Comments

All comments are stored as GitHub Issues:

- **View all comments**: Visit your comments repository's Issues tab
- **Moderate**: Close, lock, or delete issues as needed
- **Respond**: Reply directly on GitHub or on your blog
- **Get notified**: Receive email notifications for new comments (GitHub settings)

#### Troubleshooting Comments

**Comments not showing?**

- Ensure the repository is **public**
- Verify Utterances app is installed on the correct repository
- Check that `commentsRepo` in config matches your GitHub repository name
- Confirm `issueTerm` is set in the blog post frontmatter

**Can't post comments?**

- Readers must have a GitHub account
- They must authorize the Utterances app on first use
- Check if Issues are enabled in your repository settings

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Done! ✨

### Build for Production

```bash
pnpm build
pnpm start
```

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code with Biome

## 🌐 Features Explained

### Server-Side Rendering (SSR)

All pages use Next.js Server Components by default, providing:

- Fast initial page load
- SEO-friendly content
- Automatic code splitting

### Static Site Generation (SSG)

Blog posts are pre-rendered at build time using `generateStaticParams`:

- Lightning-fast page loads
- Reduced server costs
- Better SEO

### RSS Feed

Automatically generated at `/rss` with all your blog posts.

### Sitemap

Automatically generated at `/sitemap.xml` for search engines.

### Open Graph Images

Dynamic OG images generated at `/og` for social media sharing.

## 🤝 Contributing

Feel free to open issues or submit pull requests!

## 📄 License

MIT License - feel free to use this project for your personal blog.

## 💡 Tips

1. **Keep posts organized**: Use descriptive filenames for your MDX files
2. **Optimize images**: Use Next.js `<Image>` component for better performance
3. **Test locally**: Always run `pnpm build` before deploying
4. **Update dependencies**: Keep your packages up to date with `pnpm update`
5. **Monitor performance**: Check Vercel Analytics and Speed Insights

## 🆘 Troubleshooting

### Build fails

- Check if all required frontmatter fields are present in MDX files
- Ensure `app/config/owner.ts` has all required fields

### Comments not working

- Verify Utterances app is installed on your comments repository
- Check `commentsRepo` in config matches your GitHub repo

### Styles not applying

- Clear `.next` folder and rebuild: `rm -rf .next && pnpm dev`

---

Made with ❤️ using Next.js and TypeScript
