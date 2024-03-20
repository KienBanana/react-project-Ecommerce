
import CommentClient from "../comment-client";
import ContainerAbout from "../container-about";
import FounderAbout from "../founder-about";
import ImageAbout from "../image-about-list";

const About = () => {
  return (
    <div>
      <ImageAbout></ImageAbout>
      <ContainerAbout></ContainerAbout>
      <FounderAbout></FounderAbout>
      <CommentClient></CommentClient>
    </div>
  );
};

export default About;
