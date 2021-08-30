import Header from "../../components/Header";
import Coments from "../../components/Coments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";
import Profile from "../Profile";


function Home() {

    const posts = [{
        author: {
            name: "Fulano",
            image: ""
        },
        created_at: "10/10/2021",
        title: "São Paulo Futebol Clube",
        description: "O maior do Brasil!!",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        gist: "https://github.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "Ciclano",
                    image: ""
                },
                created_at: "11/10/2021",
                description: "vamos vamos tricolor!!"
            }
        ]
    }];



    return (
        <>
            <Header />
            <Main>
                <nav>
                    <Profile/>
                </nav>
                <FeedContainer>
                    {posts.map(post => <PostCard post={post}/>)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard({post}) {

    return (
        <Post>
            <header>
                <img src="https://i.pinimg.com/736x/a6/a7/03/a6a70302597b42240957a63683c496be.jpg" />
                <div>
                    <strong>
                        {post.author.name}
                    </strong>
                    <p>
                        {post.created_at}
                    </p>
                </div>
                <GistIcon />
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src="https://lh3.googleusercontent.com/proxy/HP7a2IGfERU-qiPL25OfuZRyi95337pqiChhWNa-QJTGAOBu4VJsVPcmRuVEI0seAvQS8iGsMf8jKDT44LIKEEnFnkQ5lxFKmpMtzZvX8XmmysprevmjmJFDzoI8dAQBNKF_L78TrdHRso0UZz9oCwiHo_yucyJacEi8XgzV" />
                <section>
                   {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Coments coment={coment}/>)}
                {post.coments.map(coment => <Coments coment={coment}/>)}    
            </footer>
        </Post>

    );
}

export default Home;