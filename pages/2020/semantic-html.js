import Layout from '../../components/layout';
import Post from '../../components/post';
import { Avatar, AvatarBadge, Stack } from "@chakra-ui/core";    
import avatar from '../../img/avatar.jpeg';
import code from '../../img/code.png'

const SemanticHTML = () => (
   <Post>
      <h1>Semantics</h1>
      <Stack isInline>
         <Avatar size="sm" name="Lamberto Asghedom" src={avatar} />
      </Stack>
      <main>
         <article>
            <p>
               Since it can be pretty easy to write markup in JavaScript applications, sometimes we aren't thinking about how to use Semantic HTML. I admit sometimes it's pretty common to have a bunch 
               of divs aka div soup inside websites. Using semantics as an alternative to <em>div</em> elements can unlock power to all your sites, it's great for SEO , it makes easier for search engines and
               screen readers; also, your code would be easier to scale and maintain. You would be surprised on how many JavaScript applications suffer from this.
            </p>
            <p>
               We can verify that the semantics we're using are working in assistive technology becasue that's where the benefits come in. If you can navigate all the headings as a blind user, 
               that will save them a ton of time. If you can swap out a div for a more semantic element, I would recommened doing so. 
            </p>
            <img src={code} alt="semantic html code block" />
            <p>Defining styles with CSS is how we convey the sturcture of a web page to humans. By marking it up with semantics, we can represent those visual styles to machines as well.</p>
         </article>
      </main>
      <style jsx>{`
         img {
            display: block;
            width: 50%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
         }
      `}</style>
   </Post>
)

export default SemanticHTML