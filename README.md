<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.002.png)</center>

#**TradeMate** A Barter System Platform

##<a name="_page3_x69.00_y108.00"></a>**Introduction**

Our project, **TradeMate**, is built on the concept of bartering items, where goods and services are exchanged without involving money. This idea dates to ancient times but has seen a resurgence with the advent of the internet and online sharing.

#### <a name="_page3_x69.00_y587.00"></a>The Problem

In today's fast-paced world, we face a common problem: we accumulate older gadgets and items that still work, but we're constantly tempted by the latest technology. We don't want to waste our money by throwing away these useful things, so we're looking for a solution that allows us to trade them fairly for what we really want. This dilemma highlights the need for a platform that helps us trade our old stuff for new items, bridging our commitment to sustainability with our desire for innovation.

#### <a name="_page4_x69.00_y108.00"></a>**Proposed Solution**

Imagine a versatile platform where you can easily trade one item for another of similar value and interest. For example, you could swap your Xbox for a PlayStation or something entirely different, like furniture or a vehicle. This user-friendly website is designed to meet your diverse trading needs, making it easy to exchange items of similar value across various categories.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## <a name="_page28_x69.00_y440.00"></a>Technologies / Tools

**Next.js 13**: Utilizing the latest version of Next.js, a React framework, allowed us to build powerful web applications with enhanced performance and flexibility.

**GitHub as Repository Manager**: We employed GitHub as our version control system, enabling collaborative development and version tracking among team members.

**GitHub Actions**: Our CI/CD pipeline is orchestrated using GitHub Actions. Upon code merge into the main branch, automated workflows are triggered to build, test, and deploy the application to Firebase Hosting.

## Deployment

**Firebase Hosting**: We chose Firebase Hosting as our deployment platform due to its scalability, ease of use, and seamless integration with CI/CD workflows.

![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.044.png)

# Features

### <a name="_page6_x69.00_y429.00"></a>**Login Feature**

We've implemented a robust authentication system to secure the platform. Users can Sign up using their Google credentials or use password less login using magic link, providing a seamless and secure authentication process. This feature helps protect user data and ensures that only authorized individuals can access the platform.

<center>
	![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.007.png)
</center>

This Google based authentication uses OAuth. When a user opts to sign up via Google, your application redirects them to Google's authentication server, where they grant permission for your app to access their account. Upon approval, Google responds with an authorization code, which your app exchanges for an access token. This token allows your app to retrieve user information from Google, enabling the creation of an account on your platform. This way users don’t have to go through a registration process and can login password less.

<center>
	![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.008.png)
</center>

Magic link registration streamlines sign-up by sending users a unique link via email after they provide their email address on the registration page. When the user clicks the magic link, it verifies their identity and initiates the account creation process, again using this way users will be able to sign up and login password less.

<center>
	![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.009.png)
</center>

### <a name="_page8_x69.00_y145.00"></a>Session Management

The platform maintains user sessions until the token expires or the user actively logs out. This enhances the user experience, as users don't need to log in repeatedly during their visit. The token-based session management keeps users authenticated and engaged with the platform.

### <a name="_page8_x69.00_y236.00"></a>**Explore Feature**

We have implemented an Explore page where users can view all the nearby listings in a map view, which sort of mimics a sense of treasure map for finding cool things nearby. You can zoom in and out, move around, and discover what's going on near you. And when you find something of your interest, you can go ahead and start a conversation.

<center>
	![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.010.png)
</center>

Users have the option to view detailed information about a listing by clicking on the respective pin. Upon clicking, a card will pop up, presenting key details of the post. This includes a description, title, location, and price. There are buttons for users to directly send a message or report the listing if needed. This straightforward design aims to provide users with a seamless experience in accessing and interacting with the details of each listing.

<center>
	![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.011.png)
</center>

### <a name="_page9_x69.00_y541.00"></a>Maps Integration

Our Explore page relies on the Google Maps API to provide users with an efficient location- based experience. By utilizing this API, we effortlessly obtain the user's current location and we also implemented logic to ensures that the listings presented on the map are within the user travel and price range .

<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.012.png)</center>

Users have the flexibility to expand their search scope by utilizing the (Km) dropdown feature. Within this dropdown, users can select a search radius ranging from 1 kilometre to 30 kilometres.

<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.014.png)</center>

Users can change the price range by clicking on the “More” button and entering the specific price range they are looking for. After clicking “Apply”, only the listings within that particular range will be displayed, making it easier for users to find options that fit their price range.

<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.015.png)</center>

Users have the capability to chat directly with the listing owner by clicking on the Message button. Upon click, a window prompt will appear, prompting the user to input a connection message. To simplify the process, the prompt comes pre-filled with a default message—“Hi, I'm interested in your post.” Once the user presses "Ok," a connection is established in the Firebase Database with the specified connection message, you can then go to Chat Page to continue the conversation.

<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.016.png)</center>

Users can also utilize the Report button for listings that may raise concerns. By clicking on the Report button, a window prompt will appear, allowing users to provide details about the issue without any pre-filled content. Users can input their concerns or comments regarding the specific listing, and upon pressing "Ok," a report is submitted and saved in the Firebase database which the admin can view and take action.

<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.017.png)</center>

### Chat

To send a message, users can simply type their message into the input field and then press the "Send" button or hit the "Enter" key. The chat functionality operates in real-time, allowing users to engage in seamless and instant communication with one another.

<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.024.png)</center>

Users have the option to send media such as images, videos, and gifs. To do so, users can click on the "+" icon, which opens a menu for selecting the desired media. Once the media is chosen, users can press the "Send" button to share it within the chat.

<center>![](img/Aspose.Words.56995fec-9dda-45f5-a5aa-305a3ac4d90c.025.png)</center>

>  There are many more features. For More details about this project - [Click here](https://drive.google.com/file/d/1dubyT8jCCKh6sua3DWj73-_k1AjhIiKr/view?usp=sharing)

### <a name="_page31_x69.00_y108.00"></a>**Lessons Learnt**

1. **Platform Development and Collaboration:** Working on TradeMate provided valuable experience in creating a comprehensive platform involving various components like authentication, user interfaces, real-time communication, and administrative functionalities. It highlighted the significance of streamlined collaboration, ensuring the seamless integration of diverse features.
1. **User-Centric Approach:** Throughout the project, we learned the importance of prioritizing user experience. Incorporating features like Google-based and magic link authentication, interactive map views, and real-time chats aimed to enhance user convenience and engagement. Understanding user behaviour and preferences played a pivotal role in feature implementation.
1. **Technical Challenges and Solutions:** Dealing with technical hurdles, such as integrating Google Maps, ensuring secure authentication, and managing database interactions. Finding solutions for real-time communication and maintaining data integrity in a scalable environment were key challenges tackled during development.
1. **Continuous Integration and Deployment:** Implementing CI/CD pipelines using GitHub Actions and Firebase Hosting improved our understanding of automated deployment processes. It emphasized the significance of efficient testing, version control, and deployment strategies for a smooth development lifecycle.

### <a name="_page31_x69.00_y434.00"></a>**Future Work**

**Enhanced User Interactions**: Future iterations could focus on refining user interactions by implementing features like enhanced multimedia sharing within chats, improved post filtering options, or recommendation systems based on user preferences.

**Advanced Moderation Tools**: Introducing more sophisticated moderation tools, automated content analysis, and machine learning-based content flagging could enhance the platform's ability to handle reported content efficiently, ensuring a safer and more secure environment for users.

**Community Engagement and Growth**: Implementing community-building features, such as user reviews, ratings, or forums, could foster a sense of community and trust among users. Encouraging user-generated content and feedback can boost engagement and platform growth.

**Expanded Analytics and Insights**: Enhancing analytics capabilities to derive deeper insights into user behaviour, engagement patterns, and post interaction metrics could facilitate data- driven decision-making for further platform enhancements.

### <a name="_page32_x69.00_y108.00"></a>**Concluding Remarks**

The TradeMate project has been an enriching journey, emphasizing the fusion of technology with user needs in the domain of barter-based exchanges. The platform's core ethos revolves around sustainability, community engagement, and seamless user interactions.

The development process highlighted the importance of innovation, adaptability, and user- centric design in creating a dynamic platform. As a team, we're proud to have conceptualized and developed TradeMate, aiming to bridge the gap between sustainability and innovation while fostering a sense of community through fair and transparent barter transactions.

The journey doesn't end here. Moving forward, TradeMate is positioned to evolve further, driven by the feedback received and the continuous pursuit of enhancing user experiences and creating a more vibrant and engaging platform for barter enthusiasts worldwide.
