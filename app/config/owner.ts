export interface IConfigOwner {
    name: string;
    displayName: string;
    email: string;
    website: string;
    bio: string;
    social: {
        twitter: string;
        github: string;
        githubUsername: string;
        linkedin: string;
    };
    avatar: string;
    commentsRepo: string;
}

export const configOwner: IConfigOwner = {
    name: "Iago Ferreira",
    displayName: "Iago",
    email: "iago@iago-ferreira.com",
    website: "https://www.iago-ferreira.com",
    bio: "turning coffee into code since 2017, i build software",
    social: {
        twitter: "https://twitter.com/iago-ferreira",
        github: "https://github.com/iagxferreira",
        githubUsername: "iagxferreira",
        linkedin: "https://www.linkedin.com/in/iagxferreira/",
    },
    avatar: "/avatar.jpeg",
    commentsRepo: "iagxferreira/blog-comments",
};